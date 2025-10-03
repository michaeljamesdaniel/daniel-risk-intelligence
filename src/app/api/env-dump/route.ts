import { NextResponse } from 'next/server';

// Temporary debug endpoint. Returns a list of environment variable keys available
// in process.env. DO NOT return values for security reasons.
export async function GET() {
  try {
    // Collect keys only, sorted for readability
    const envKeys = Object.keys(process.env).sort();

    return NextResponse.json({ envKeys });
  } catch (err: any) {
    console.error('env-dump error:', err);
    return NextResponse.json({ error: err?.message ?? 'Unknown error' }, { status: 500 });
  }
}

// NOTE: This endpoint is intended for short-lived debugging. Remove it after
// you've confirmed which environment variables are available at runtime.
