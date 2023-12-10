import { baseUrl } from "@/libs/constants";
import { version } from "@/libs/constants/version";
import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.1.0",
      info: {
        title: "🩸 Screamer API",
        summary: "The RESTful API for Screamer.",
        description: `To acquire an access token for the API please visit [/auth](${baseUrl}/auth) endpoint.`,
        version,
        license: {
          name: "MIT",
          url: `${baseUrl}/license`,
        },
      },
      externalDocs: {
        description: "Find out more about Screamer",
        url: `${baseUrl}/docs`,
      },
      servers: [
        {
          url: `${baseUrl}/api`,
        },
      ],
      tags: [
        {
          name: "users",
          description: "Operations about users",
        },
      ],
      components: {
        schemas: {
          CreateUserEmail: {
            type: "object",
            properties: {
              email: {
                type: "string",
                format: "email",
                description: "The user's email address",
              },
            },
            required: ["email"],
          },
          CreateUserPhoneNumber: {
            type: "object",
            properties: {
              phoneNumber: {
                type: "string",
                description: "The user's phone number",
              },
            },
            required: ["phoneNumber"],
          },
          CreateUserResponse: {
            type: "object",
            properties: {
              inviteLink: {
                type: "string",
                description: "The magic link to sign in",
              },
            },
            required: ["inviteLink"],
          },
          Error: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "The error message",
              },
              details: {
                type: "array",
                description: "Additional details about the error",
                items: {
                  type: "object",
                },
              },
            },
            required: ["error"],
          },
        },
        examples: {
          CreateUserEmail: {
            value: {
              email: "user@test.com",
            },
          },
          CreateUserPhoneNumber: {
            value: {
              phoneNumber: "+447777777777",
            },
          },
        },
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            description: "Token from SuperTokens",
          },
          CookieAuth: {
            type: "apiKey",
            in: "cookie",
            name: "sAccessToken",
            description: "Token from SuperTokens",
          },
        },
      },
      security: [
        {
          BearerAuth: [],
        },
        {
          CookieAuth: [],
        },
      ],
    },
  });
  return spec;
};
