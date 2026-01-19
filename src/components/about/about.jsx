import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Github from "./github";
import Techstack from "./techStack";
import Aboutcard from "./aboutCard";
import Toolstack from "./toolStack";
import Serverstack from "./serverStack";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className="section-block section-aboutme-more">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("about.more")}</h2>
          <Aboutcard />
        </Container>
      </Container>

      <Container fluid className="section-block section-aboutme-skillset">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("about.skillset")}</h2>
          <Techstack />
        </Container>
      </Container>

      <Container fluid className="section-block section-aboutme-server">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("about.serverapps")}</h2>
          <Serverstack />
        </Container>
      </Container>

      <Container fluid className="section-block section-aboutme-tools">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("about.tools")}</h2>
          <Toolstack />
        </Container>
      </Container>

      <Container fluid className="section-block section-aboutme-code">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("about.code")}</h2>
          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
