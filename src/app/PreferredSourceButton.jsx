"use client";

export default function PreferredSourceButton() {
    return (
        <div
            className="preferred-source-float"
            id="google-preferred-source-container"
            google-add-preferred-source-btn=""
            data-theme="light"
            data-lang="en"
            style={{
                position: "fixed",
                right: "20px",
                bottom: "20px",
                zIndex: 9999,
            }}
        />
    );
}
