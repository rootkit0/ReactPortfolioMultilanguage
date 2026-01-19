import { Container } from "react-bootstrap";
import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();

  return (
    <>
      {/* ME PRESENTO */}
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

      {/* ENCUÉNTRAME */}
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
