import { getApiDocs } from "@/libs/swagger";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  const spec = await getApiDocs();
  return NextResponse.json(spec);
}
