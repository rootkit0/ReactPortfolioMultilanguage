import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Particle from "../particle";
import Github from "./github";
import Techstack from "./techStack";
import Aboutcard from "./aboutCard";
import Toolstack from "./toolStack";
import Serverstack from "./serverStack";
import sensorImg from "../../assets/images/sensor.png";
import platformImg from "../../assets/images/iot-cloud-platform.png";

function About() {
  const { t } = useTranslation();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}><b>{t("about.more")}</b></h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={platformImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading"><b>{t("about.skillset")}</b></h1>
        <Techstack />

        <h1 className="project-heading"><b>{t("about.serverapps")}</b></h1>
        <Serverstack />

        <h1 className="project-heading"><b>{t("about.tools")}</b></h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
