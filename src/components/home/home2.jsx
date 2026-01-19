import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FiCpu } from "react-icons/fi";
import { MdOutlineAutoGraph } from "react-icons/md";

function Home2() {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className="section-block section-about" id="about">
        <Container className="section-inner">
          <h2 className="section-title">{t("home2.intro1")}</h2>

          <div className="about-chunks">
            <div className="about-chunk chunk-a">
              <p className="about-text">{t("home2.intro2")}</p>
            </div>

            <div className="about-chunk chunk-b">
              <p className="about-text">{t("home2.intro3")}</p>
            </div>

            <div className="about-chunk chunk-c">
              <p className="about-text">{t("home2.intro4")}</p>
            </div>

            <div className="about-chunk chunk-d">
              <p className="about-text">{t("home2.intro5")}</p>
            </div>
          </div>
        </Container>
      </Container>

      <Container fluid className="section-block section-services" id="services">
        <Container className="section-inner">
          <h2 className="section-title">{t("home.services.title")}</h2>
          <p className="section-subtitle">{t("home.services.subtitle")}</p>

          <Row className="g-4 justify-content-center">
            <Col md={6} lg={5}>
              <div className="service-card">
                <div className="service-card-head">
                  <div className="service-badge" aria-hidden="true">
                    <MdOutlineAutoGraph />
                  </div>
                  <div>
                    <h3 className="service-title">{t("home.services.ai.title")}</h3>
                    <p className="service-text">{t("home.services.ai.desc")}</p>
                  </div>
                </div>

                <div className="service-links">
                  <Link className="service-link" to="/ia-zaragoza">{t("cities.zaragoza")}</Link>
                  <Link className="service-link" to="/ia-barcelona">{t("cities.barcelona")}</Link>
                  <Link className="service-link" to="/ia-lleida">{t("cities.lleida")}</Link>
                  <Link className="service-link" to="/ia-madrid">{t("cities.madrid")}</Link>
                </div>
              </div>
            </Col>

            <Col md={6} lg={5}>
              <div className="service-card">
                <div className="service-card-head">
                  <div className="service-badge" aria-hidden="true">
                    <FiCpu />
                  </div>
                  <div>
                    <h3 className="service-title">{t("home.services.iot.title")}</h3>
                    <p className="service-text">{t("home.services.iot.desc")}</p>
                  </div>
                </div>

                <div className="service-links">
                  <Link className="service-link" to="/iot-zaragoza">{t("cities.zaragoza")}</Link>
                  <Link className="service-link" to="/iot-barcelona">{t("cities.barcelona")}</Link>
                  <Link className="service-link" to="/iot-lleida">{t("cities.lleida")}</Link>
                  <Link className="service-link" to="/iot-madrid">{t("cities.madrid")}</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-block section-findme" id="findme">
        <Container className="section-inner text-center">
          <h2 className="section-title">{t("home2.findmeon")}</h2>
          <p className="section-subtitle">{t("home2.connectme")}</p>

          <ul className="social-pills">
            <li>
              <a
                href="https://wa.me/+34644369266"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/xavierberga/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rootkit0"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <AiOutlineGithub />
              </a>
            </li>
          </ul>
        </Container>
      </Container>
    </>
  );
}

export default Home2;
