import swaggerJsdoc from 'swagger-jsdoc';
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Taxi APP",
        version: "1.0.0",
        description:
          "Taxi app of excellence technologies",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/api",
        },
      ],
    },
    apis: ['./src/routes/*.mjs']
  };
  
  const swaggerSpecs = swaggerJsdoc(options);
  export default swaggerSpecs;