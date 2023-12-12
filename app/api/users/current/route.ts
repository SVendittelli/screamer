import { NextRequest, NextResponse } from "next/server";
import { withSession } from "@/libs/session";

/**
 * Get the session information about the current user.
 */
export function GET(request: NextRequest) {
  return withSession(request, async (session) => {
    if (!session) {
      return new NextResponse("Authentication required", { status: 401 });
    }

    return NextResponse.json({
      userId: session.getUserId(),
      sessionHandle: session.getHandle(),
      accessTokenPayload: session.getAccessTokenPayload(),
    });
  });
}
