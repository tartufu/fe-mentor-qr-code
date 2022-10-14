import React from "react";
import Card from "react-bootstrap/Card";

import QrCodeImage from "./QrCodeImage";
import QrCodeCardText from "./QrCodeCardText";

export default function QrCodeCard() {
  return (
    <Card style={{ width: "18rem" }} className="text-center">
      <QrCodeImage />
      <QrCodeCardText />
    </Card>
  );
}
