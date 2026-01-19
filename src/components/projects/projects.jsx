import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./projectCards";
import Particle from "../particle";

import logo from "../../assets/logos/logo.png";
import alimentando from "../../assets/logos/alimentando-logo.png";
import agromind from "../../assets/logos/agromind-logo.png";
import openwebui from "../../assets/logos/openwebui-logo.png";
import nextcloud from "../../assets/logos/nextcloud-logo.png";
import homeassistant from "../../assets/logos/home-assistant-logo.png";
import adguard from "../../assets/logos/adguard-logo.png";
import mqtt from "../../assets/logos/mqtt-logo.png";
import n8n from "../../assets/logos/n8n-logo.png";

function Projects() {
  const { t } = useTranslation();
  const demoText = t("projects.demo");

  return (
    <>
      <Container fluid className="section-block section-projects-hero">
        <Particle />
        <Container className="section-inner">
          <h1 className="section-title gradient-heading">
            <b>{t("projects.recent")}</b>
          </h1>
          <p className="project-subheading">{t("projects.recentDescription")}</p>
        </Container>
        <Container className="section-inner">
          <Row style={{ justifyContent: "center" }}>
            <Col xs={12} md={10} lg={8} xl={7} className="project-card">
              <ProjectCard
                imgPath={logo}
                openSource={true}
                title={t("projects.title1")}
                description={t("projects.desc1")}
                srcLink={t("projects.src1")}
                demoLink={t("projects.demo1")}
                demoText={demoText}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-block section-projects-pro">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("projects.groupPro")}</h2>
          <p className="section-subtitle">{t("projects.groupProDesc")}</p>

          <Row style={{ justifyContent: "center" }}>
            <Col xs={12} md={6} lg={6} xl={5} className="project-card">
              <ProjectCard
                imgPath={alimentando}
                openSource={true}
                title={t("projects.title2")}
                description={t("projects.desc2")}
                demoLink={t("projects.demo2")}
                demoText={demoText}
              />
            </Col>

            <Col xs={12} md={6} lg={6} xl={5} className="project-card">
              <ProjectCard
                imgPath={agromind}
                openSource={true}
                title={t("projects.title3")}
                description={t("projects.desc3")}
                demoLink={t("projects.demo3")}
                demoText={demoText}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-block section-projects-ai">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("projects.groupAi")}</h2>
          <p className="section-subtitle">{t("projects.groupAiDesc")}</p>

          <Row style={{ justifyContent: "center" }}>
            <Col xs={12} md={6} lg={6} xl={5} className="project-card">
              <ProjectCard
                imgPath={openwebui}
                openSource={true}
                title={t("projects.title4")}
                description={t("projects.desc4")}
                srcLink={t("projects.src4")}
                demoLink={t("projects.demo4")}
                demoText={demoText}
              />
            </Col>

            <Col xs={12} md={6} lg={6} xl={5} className="project-card">
              <ProjectCard
                imgPath={n8n}
                openSource={true}
                title={t("projects.title9")}
                description={t("projects.desc9")}
                srcLink={t("projects.src9")}
                demoLink={t("projects.demo9")}
                demoText={demoText}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-block section-projects-iot">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("projects.groupIot")}</h2>
          <p className="section-subtitle">{t("projects.groupIotDesc")}</p>

          <Row style={{ justifyContent: "center" }}>
            <Col xs={12} md={6} lg={6} xl={5} className="project-card">
              <ProjectCard
                imgPath={homeassistant}
                openSource={true}
                title={t("projects.title6")}
                description={t("projects.desc6")}
                srcLink={t("projects.src6")}
                demoLink={t("projects.demo6")}
                demoText={demoText}
              />
            </Col>

            <Col xs={12} md={6} lg={6} xl={5} className="project-card">
              <ProjectCard
                imgPath={mqtt}
                openSource={true}
                title={t("projects.title8")}
                description={t("projects.desc8")}
                srcLink={t("projects.src8")}
                demoLink={t("projects.demo8")}
                demoText={demoText}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-block section-projects-infra">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("projects.groupInfra")}</h2>
          <p className="section-subtitle">{t("projects.groupInfraDesc")}</p>

          <Row style={{ justifyContent: "center" }}>
            <Col xs={12} md={6} lg={6} xl={5} className="project-card">
              <ProjectCard
                imgPath={nextcloud}
                openSource={true}
                title={t("projects.title5")}
                description={t("projects.desc5")}
                srcLink={t("projects.src5")}
                demoLink={t("projects.demo5")}
                demoText={demoText}
              />
            </Col>

            <Col xs={12} md={6} lg={6} xl={5} className="project-card">
              <ProjectCard
                imgPath={adguard}
                openSource={true}
                title={t("projects.title7")}
                description={t("projects.desc7")}
                srcLink={t("projects.src7")}
                demoLink={t("projects.demo7")}
                demoText={demoText}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
