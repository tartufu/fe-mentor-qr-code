import React from "react";
import Card from "react-bootstrap/Card";

export default function QrCodeCardText() {
  return (
    <Card.Body style={{ fontFamily: "Outfit" }}>
      <Card.Title>
        Improve your front-end skills by building projects
      </Card.Title>
      <Card.Text>
        Scan the QR Code to visit Frontend Mentor and take your coding skills to
        the next level!
      </Card.Text>
    </Card.Body>
  );
}
