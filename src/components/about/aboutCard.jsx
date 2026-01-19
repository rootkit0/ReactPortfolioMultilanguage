import { AiFillCheckSquare } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <div className="aboutme-card">
      <div className="about-chunks">
        <div className="about-chunk chunk-a">
          <p className="about-text">{t("about.content1")}</p>
        </div>
        <div className="about-chunk chunk-b">
          <p className="about-text">{t("about.content2")}</p>
        </div>
        <div className="about-chunk chunk-c">
          <p className="about-text">{t("about.content3")}</p>
        </div>
        <div className="about-chunk chunk-d">
          <p className="about-text">{t("about.content4")}</p>
        </div>
        <div>
          <p className="about-text">{t("about.content5")}</p>
        </div>
      </div>

      <ul className="about-hobbies">
        <li><AiFillCheckSquare /> {t("about.read")}</li>
        <li><AiFillCheckSquare /> {t("about.travel")}</li>
        <li><AiFillCheckSquare /> {t("about.nature")}</li>
        <li><AiFillCheckSquare /> {t("about.gym")}</li>
        <li><AiFillCheckSquare /> {t("about.drive")}</li>
        <li><AiFillCheckSquare /> {t("about.cinema")}</li>
      </ul>
    </div>
  );
}

export default AboutCard;
