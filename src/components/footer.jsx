import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center g-3">
        <Col md="4" className="footer-copywright">
          <h3>
            {t("footer.designedby")} ❤️‍🔥 {t("footer.designedby2")}
          </h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>
            Copyleft <span aria-hidden="true">🄯</span> {year} Xavier Berga
          </h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li>
              <a
                href="https://wa.me/+34644369266"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
                aria-label="WhatsApp"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/xavierberga/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rootkit0"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
