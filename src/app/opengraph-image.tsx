import { ImageResponse } from "next/og";
import { event } from "@/lib/content";

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
          background:
            "linear-gradient(180deg, #23090b 0%, #52161b 55%, #23090b 100%)",
          fontFamily: "serif",
        }}
      >
        {/* Lotus mark */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(226,137,47,0.5) 0%, rgba(226,137,47,0) 70%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#6b1e23",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #c9a227",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#e2892f",
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontSize: 26,
            color: "#b97a63",
            fontStyle: "italic",
            marginBottom: 6,
            display: "flex",
          }}
        >
          {event.hostFamily}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#f6eee0",
            opacity: 0.8,
            marginBottom: 14,
            display: "flex",
          }}
        >
          warmly invites you to
        </div>
        <div
          style={{
            fontSize: 72,
            color: "#c9a227",
            fontWeight: 600,
            letterSpacing: 1,
            display: "flex",
          }}
        >
          {event.occasion}
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 28,
            color: "#f6eee0",
            display: "flex",
          }}
        >
          {event.dateLabel}
        </div>
      </div>
    ),
    { ...size }
  );
}
