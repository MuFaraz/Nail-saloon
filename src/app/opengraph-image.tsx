import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#FBF7F4 0%,#F3DCD9 100%)",
          color: "#5E2D39",
          fontFamily: "Georgia, serif",
          border: "18px solid #FBF7F4",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 28, border: "2px solid #B8935A", display: "flex" }} />
        <div style={{ fontSize: 30, letterSpacing: 14, color: "#7F6128", textTransform: "uppercase", display: "flex" }}>
          {site.suffix}
        </div>
        <div style={{ fontSize: 150, marginTop: 10, fontStyle: "italic", display: "flex" }}>{site.shortName}</div>
        <div style={{ width: 160, height: 2, background: "#B8935A", margin: "26px 0", display: "flex" }} />
        <div style={{ fontSize: 40, color: "#2A2224", display: "flex" }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
