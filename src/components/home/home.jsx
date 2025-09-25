import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import homeLogo from "../../assets/images/home-main.png";
import Particle from "../particle";
import Home2 from "./home2";
import Type from "./type";
import Tilt from "react-parallax-tilt";

function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("home.salute")} <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                {t("home.im")} <strong className="main-name">XAVIER BERGA</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
