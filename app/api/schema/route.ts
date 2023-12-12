import { NextRequest, NextResponse } from "next/server";
import { getApiDocs } from "@/libs/swagger";

export async function GET(_request: NextRequest) {
  const spec = await getApiDocs();
  return NextResponse.json(spec);
}
