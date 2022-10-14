import React from "react";
import Card from "react-bootstrap/Card";

export default function QrCodeCard() {
  return (
    <Card style={{ width: "18rem" }} className="text-center">
      <div style={{ padding: "16px 16px 0 16px" }}>
        <Card.Img
          variant="top"
          src="images/image-qr-code.png"
          style={{ borderRadius: "8px" }}
        />
      </div>
      <Card.Body style={{ fontFamily: "Outfit" }}>
        <Card.Title>
          Improve your front-end skills by building projects
        </Card.Title>
        <Card.Text>
          Scan the QR Code to visit Frontend Mentor and take your coding skills
          to the next level!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
