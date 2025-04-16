import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/*<Route path="/details/:spaceID" element={} />*/}
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
