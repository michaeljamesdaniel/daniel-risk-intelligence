import { NextResponse } from 'next/server';

// Server-only endpoint: returns presence (true/false) of SMTP env vars.
// WARNING: This endpoint intentionally does NOT return secret values — only true/false
// to confirm whether Vercel/local env vars are set. Remove after verification.

export async function GET() {
  const vars = ['SMTP_SERVER', 'SMTP_SERVER_PORT', 'SMTP_USER', 'SMTP_PASS'] as const;
  const presence: Record<string, boolean> = {};
  for (const v of vars) {
    presence[v] = Boolean(process.env[v]);
  }

  return NextResponse.json({ ok: true, presence });
}
