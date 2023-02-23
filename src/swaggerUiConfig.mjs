const swaggerSpecs = {
  "openapi": "3.0.0",
  "info": {
    "title": "Example API",
    "version": "1.0.0",
    "description": "An example API with Swagger"
  },
  "servers":[{
      "url": `${process.env.BASE_URL}/api`,
      "description": "Local development server"
    }],
  "paths": {
    "/user/create": {
      "post": {
        "summary": "This api will create new user",
        "tags": ["Users"],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "username",
                  "password",
                  "email",
                  "firstname",
                  "lastname"
                ],
                "properties": {
                  "username": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  },
                  "phoneNo": {
                    "type": "string"
                  },
                  "firstname": {
                    "type": "string"
                  },
                  "lastname": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "New user is created.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          },
          "500": {
            "description": "Some server error"
          }
        }
      }
    },
    "/user/login": {
      "post": {
        "summary": "This api will login the user",
        "tags": ["Users"],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["email", "password"],
                "properties": {
                  "email": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "user token is generated.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          },
          "500": {
            "description": "Some server error"
          }
        }
      }
    }
  }
}
export default swaggerSpecs;