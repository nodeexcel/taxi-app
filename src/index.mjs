import 'dotenv/config';
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './swaggerUiConfig.mjs';
import './db.mjs';
import ApiRouter from './routes/routes.mjs';
import { globalErrorHandler } from './middleware.mjs';

const { PORT } = process.env;

process.on('uncaughtException', (err) => console.error(err, err.stack));
process.on('unhandledRejection', (err) => console.error(err, err.stack));

const app = express();
const server = http.createServer(app);
// app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('Started :method :url for :remote-addr at :date[iso]', { immediate: true }));
  app.use((req, res, next) => {
    if (Object.keys(req.body).length > 0) {
      const body = { ...req.body };
      if (body.password) body.password = '<REDACTED>';
      console.log(`${req.method} ${req.url} Body Debug\nParameters:`, JSON.stringify(body));
    }
    next();
  });
  app.use(morgan('Completed :method :url :status in :response-time ms - :res[content-length]'));
}

// routes
app.get('/healths', (req, res) => res.send('Online'));
app.use('/api', ApiRouter);

// swagger UI
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerSpecs, { explorer: true }));

// global error handler
app.use(globalErrorHandler);
const port = PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;
