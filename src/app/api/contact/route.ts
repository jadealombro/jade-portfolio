import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "jadealombro@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, website, helpWith, description, timeline, budget, referral } = body;

    if (!name || !email || !helpWith || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const rows = [
      ["Name", name],
      ["Email", email],
      ["Company", company || "—"],
      ["Website", website || "—"],
      ["Help with", helpWith],
      ["Timeline", timeline || "—"],
      ["Budget", budget || "—"],
      ["Referral", referral || "—"],
    ];

    const tableRows = rows
      .map(
        ([label, value]) =>
          `<tr>
            <td style="padding:8px 12px;font-weight:600;color:#111110;background:#f4f4f1;border-bottom:1px solid #e4e4e0;width:140px;vertical-align:top">${label}</td>
            <td style="padding:8px 12px;color:#4a4a47;border-bottom:1px solid #e4e4e0">${value}</td>
          </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;color:#111110">
        <div style="background:#3d5a4c;padding:24px 32px;border-radius:8px 8px 0 0">
          <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.7)">New inquiry</p>
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:600;color:#fff">${name}</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;border:1px solid #e4e4e0;border-top:none;border-radius:0 0 8px 8px;overflow:hidden">
          ${tableRows}
        </table>
        <div style="margin-top:24px;padding:20px 24px;background:#eef3f0;border-radius:8px;border-left:3px solid #3d5a4c">
          <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#3d5a4c">Project description</p>
          <p style="margin:0;font-size:15px;line-height:1.65;color:#4a4a47;white-space:pre-wrap">${description}</p>
        </div>
        <p style="margin:24px 0 0;font-size:13px;color:#8f8f89">Reply directly to this email to respond to ${name} at ${email}.</p>
      </div>
    `;

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name} — ${helpWith}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
