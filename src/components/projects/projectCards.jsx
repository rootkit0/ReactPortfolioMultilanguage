import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  const { t } = useTranslation();
  const hasGithub = Boolean(props.openSource) && Boolean(props.srcLink);
  const hasDemo = Boolean(props.demoLink);

  return (
    <Card className="project-card-view">
      <div className="project-media">
        <img src={props.imgPath} alt={props.title} className="project-media-img" />
      </div>

      <Card.Body className="project-body">
        <div className="project-text">
          <Card.Title className="project-title">{props.title}</Card.Title>
          <Card.Text className="project-desc">{props.description}</Card.Text>
        </div>

        {(hasGithub || hasDemo) && (
          <div className="project-actions">
            {hasGithub && (
              <Button
                variant="outline-primary"
                href={props.srcLink}
                target="_blank"
                className="project-btn"
              >
                <BsGithub /> &nbsp; GitHub
              </Button>
            )}

            {hasDemo && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="project-btn"
              >
                <CgWebsite /> &nbsp;{t("projects.visit")}
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
