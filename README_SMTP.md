Contact form / SMTP setup

This project includes a server-side API endpoint that sends contact form submissions to michael@danielriskintelligence.com.

Environment variables
- SMTP_SERVER - SMTP server host (e.g., smtp.sendgrid.net)
- SMTP_SERVER_PORT - SMTP port (587 for TLS, 465 for SSL)
- SMTP_USER - SMTP username
- SMTP_PASS - SMTP password

Local testing
1. Set the environment variables in your shell:

```bash
export SMTP_SERVER=smtp.example.com
export SMTP_SERVER_PORT=587
export SMTP_USER="username"
export SMTP_PASS="password"
```

2. Start the dev server:

```bash
npm run dev
```

3. Open http://localhost:3000 and submit the contact form.

Notes
- For best deliverability, use a transactional email provider and configure SPF/DKIM for @danielriskintelligence.com.
- The API uses `michael@danielriskintelligence.com` as the envelope `from` and sets the visitor's email as `replyTo` to avoid DMARC/forgery issues with many providers.
