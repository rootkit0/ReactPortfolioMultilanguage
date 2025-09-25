import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/images/avatar.png";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}><b>{t("home2.intro1")}</b></h1>
            <p className="home-about-body">{t("home2.intro2")}<br /><br />{t("home2.intro3")}<br /><br />{t("home2.intro4")}<br /><br />{t("home2.intro5")}</p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><b>{t("home2.findmeon")}</b></h1>
            <p>{t("home2.connectme")}</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://wa.me/+34644369266" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/xavierberga/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://github.com/rootkit0" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiOutlineGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
