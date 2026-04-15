import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jade Alombro — WordPress Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAF8",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top: label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "2px",
              backgroundColor: "#3D5A4C",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#3D5A4C",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            WordPress Developer
          </span>
        </div>

        {/* Middle: name */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#111110",
            }}
          >
            Jade Alombro
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.5,
              color: "#4A4A47",
              fontFamily: "system-ui, sans-serif",
              maxWidth: "600px",
            }}
          >
            Custom WordPress websites, WooCommerce development, and ongoing site support.
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              color: "#8F8F89",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            jadealombro.com
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#3D5A4C",
            }}
          >
            <span style={{ color: "#FAFAF8", fontSize: "20px" }}>J</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
