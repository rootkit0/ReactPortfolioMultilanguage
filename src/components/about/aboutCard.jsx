import { AiFillCheckSquare } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("about.content1")}
            <br /> {t("about.content2")}
            <br /> {t("about.content3")}
            <br /> {t("about.content4")}
            <br /> {t("about.content5")}
          </p>
          <ul>
            <li className="about-activity"><AiFillCheckSquare /> {t("about.read")}</li>
            <li className="about-activity"><AiFillCheckSquare /> {t("about.travel")}</li>
            <li className="about-activity"><AiFillCheckSquare /> {t("about.nature")}</li>
            <li className="about-activity"><AiFillCheckSquare /> {t("about.gym")}</li>
            <li className="about-activity"><AiFillCheckSquare /> {t("about.drive")}</li>
            <li className="about-activity"><AiFillCheckSquare /> {t("about.cinema")}</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
