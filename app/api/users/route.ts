import { NextRequest, NextResponse } from "next/server";
import Passwordless from "supertokens-node/recipe/passwordless";
import UserRoles from "supertokens-node/recipe/userroles";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { withSession } from "@/libs/session";

const createUserSchema = z.union([
  z.object({
    email: z.string().email(),
  }),
  z.object({
    phoneNumber: z
      .string()
      .refine(
        (arg) => isMobilePhone(arg, "any", { strictMode: true }),
        "Invalid mobile phone number",
      ),
  }),
]);

type CreateUser = z.infer<typeof createUserSchema>;

/**
 * @openapi
 *
 * /users:
 *   post:
 *     tags:
 *       - users
 *     summary: Create a user
 *     description: |-
 *       Create a user in SuperTokens and create them a magic link to sign in.
 *
 *       The role `admin` is required.
 *     operationId: createUser
 *     requestBody:
 *       description: The user to create.
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: '#/components/schemas/CreateUserEmail'
 *               - $ref: '#/components/schemas/CreateUserPhoneNumber'
 *           examples:
 *             email:
 *               $ref: '#/components/examples/CreateUserEmail'
 *             phoneNumber:
 *               $ref: '#/components/examples/CreateUserPhoneNumber'
 *       required: true
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export function POST(request: NextRequest) {
  return withSession(
    request,
    async () => {
      const parsedInput = createUserSchema.safeParse(await request.json());

      if (!parsedInput.success) {
        const { message, details } = fromZodError(parsedInput.error);
        return NextResponse.json(
          {
            message,
            details,
          },
          { status: 400 },
        );
      }

      const body = parsedInput.data as CreateUser;

      let inviteLink: string = "";

      // create the user in SuperTokens if they don't already exist.
      if ("email" in body) {
        await Passwordless.signInUp({
          tenantId: "public",
          email: body.email,
        });
        inviteLink = await Passwordless.createMagicLink({
          tenantId: "public",
          email: body.email,
        });
      } else if ("phoneNumber" in body) {
        await Passwordless.signInUp({
          tenantId: "public",
          phoneNumber: body.phoneNumber,
        });
        inviteLink = await Passwordless.createMagicLink({
          tenantId: "public",
          phoneNumber: body.phoneNumber,
        });
      }

      return NextResponse.json({ inviteLink }, { status: 201 });
    },
    {
      overrideGlobalClaimValidators: async (globalValidators) => [
        ...globalValidators,
        UserRoles.UserRoleClaim.validators.includes("admin"),
      ],
    },
  );
}
