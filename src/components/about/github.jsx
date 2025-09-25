import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const { t } = useTranslation();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}><b>{t("about.code")}</b></h1>
      <GitHubCalendar
        username="rootkit0"
        blockSize={15}
        blockMargin={5}
        color="#8B0000"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
