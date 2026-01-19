import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";

import homeLogo from "../../assets/images/home-main.png";
import Particle from "../particle";
import Home2 from "./home2";
import Type from "./type";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section section-block section-hero" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center g-4">
            <Col md={7} className="home-header text-center text-md-start">
              <p className="heading">
                {t("home.salute")}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </p>

              <h1 className="heading-name">
                {t("home.im")} <strong className="main-name">XAVIER BERGA</strong>
              </h1>

              <div className="type-wrap">
                <Type />
              </div>

              <p className="hero-tagline mx-md-0 mx-auto">{t("home.tagline")}</p>

              <div className="hero-cta justify-content-center justify-content-md-start">
                <Button as={Link} to="/projects" variant="primary" className="cta-btn">
                  {t("navbar.projects")}
                </Button>
                <Button as={Link} to="/resume" variant="outline-primary" className="cta-btn">
                  {t("navbar.resume")}
                </Button>
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center">
              <div>
                <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={false}>
                  <img src={homeLogo} alt="home" className="img-fluid hero-image" />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
