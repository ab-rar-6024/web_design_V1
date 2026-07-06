import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, products, message } = body as {
      name: string;
      email: string;
      phone: string;
      products: string[];
      message: string;
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const productList = products.length
      ? products.map((p) => `  • ${p}`).join("\n")
      : "  (none selected)";

    await transporter.sendMail({
      from: `"APM Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || "info@apmgroups.in",
      replyTo: email,
      subject: `New Enquiry from ${name} — APM Contact Form`,
      text: [
        `New contact form submission received on the APM website.`,
        ``,
        `Name    : ${name}`,
        `Email   : ${email}`,
        `Phone   : ${phone}`,
        ``,
        `Products / Services:`,
        productList,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:0;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
          <div style="background:#0b1929;padding:28px 32px">
            <img src="https://apmgroups.in/img/Layoutimg/apm-logo-1.png" alt="APM Group" style="height:36px;filter:brightness(1.2)" />
            <h2 style="color:#3ebdef;margin:16px 0 4px;font-size:20px">New Enquiry</h2>
            <p style="color:#94a3b8;margin:0;font-size:13px">Submitted via the APM website contact form</p>
          </div>
          <div style="padding:28px 32px;background:#ffffff">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:100px;vertical-align:top">Name</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#3ebdef;font-size:14px">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;vertical-align:top">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#3ebdef;font-size:14px">${phone}</a></td></tr>
            </table>
            <div style="margin-top:20px">
              <p style="color:#64748b;font-size:13px;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Products / Services Enquired</p>
              ${products.length ? products.map((p) => `<span style="display:inline-block;margin:3px 4px;padding:4px 12px;background:#eff6ff;color:#2563eb;border-radius:20px;font-size:13px;font-weight:600">${p}</span>`).join("") : '<span style="color:#94a3b8;font-size:13px">None selected</span>'}
            </div>
            <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:8px;border-left:3px solid #3ebdef">
              <p style="color:#64748b;font-size:13px;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Message</p>
              <p style="color:#1e293b;font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap">${message}</p>
            </div>
          </div>
          <div style="padding:16px 32px;background:#f1f5f9;text-align:center">
            <p style="color:#94a3b8;font-size:12px;margin:0">Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact/route] email error:", err);
    return Response.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
