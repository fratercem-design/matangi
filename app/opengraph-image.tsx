import { ImageResponse } from "next/og";

export const alt = "Temple of Ma Matangi — a digital temple of speech, wisdom, music, and transformative knowledge";
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
          background: "linear-gradient(160deg, #0a0a0f 0%, #0c1a12 45%, #100d1a 100%)",
          color: "#f5f0e8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#b8962e", letterSpacing: 18, marginBottom: 28 }}>
          MAHAVIDYA IX
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 300, letterSpacing: -1 }}>
          Temple of Ma Matangi
        </div>
        <div style={{ display: "flex", fontSize: 32, fontStyle: "italic", color: "#c8c0b0", marginTop: 26 }}>
          Speech · Wisdom · Music · Transformative Knowledge
        </div>
        <div
          style={{
            display: "flex",
            width: 18,
            height: 18,
            marginTop: 48,
            background: "#b8962e",
            transform: "rotate(45deg)",
            boxShadow: "0 0 40px rgba(184,150,46,0.6)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
