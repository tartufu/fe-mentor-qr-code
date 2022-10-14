import React from "react";
import Card from "react-bootstrap/Card";

export default function QrCodeImage() {
  return (
    <div style={{ padding: "16px 16px 0 16px" }}>
      <Card.Img
        variant="top"
        src="images/image-qr-code.png"
        style={{ borderRadius: "8px" }}
      />
    </div>
  );
}
