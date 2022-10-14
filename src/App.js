import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import QrCodeCard from "./Components/QrCodeCard";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "hsl(212, 45%, 89%)", fontFamily: "Outfit" }}
    >
      <Container style={{ height: "100vh" }}>
        <Row className="h-100 d-flex justify-content-center align-items-center">
          <Col className="d-flex justify-content-center">
            <QrCodeCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
