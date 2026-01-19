import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import { FiTrendingUp, FiEye, FiMessageSquare, FiTool, FiLayers } from "react-icons/fi";
import { MdOutlineAutoGraph } from "react-icons/md";

const PHONE_E164 = "34644369266";
const EMAIL = "xavier@agromind.es";
const LINKEDIN = "https://www.linkedin.com/in/xavierberga/";

function AIMadrid() {
  const { t } = useTranslation();
  const CITY = "Madrid";
  const SLUG = "madrid";
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = `${t("landingAI.metaTitle")} ${CITY} | Xavier Berga`;
  }, [t]);

  const update = (key) => (e) =>
    setForm((s) => ({
      ...s,
      [key]: e.target.value,
    }));

  const { subject, body } = useMemo(() => {
    const subject = `${t("landingAI.form.emailSubject")} - ${CITY}`;
    const lines = [
      `${t("landing.common.service")}: ${t("landingAI.form.serviceName")} (${CITY})`,
      `${t("landing.common.name")}: ${form.name || "-"}`,
      `${t("landing.common.company")}: ${form.company || "-"}`,
      `${t("landing.common.email")}: ${form.email || "-"}`,
      "",
      `${t("landing.common.message")}:`,
      form.message || "-",
      "",
      `${t("landing.common.source")}: /ia-${SLUG}`,
    ];
    return { subject, body: lines.join("\n") };
  }, [form, t]);

  const openWhatsApp = () => {
    const url = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openEmail = () => {
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  const aiCards = [
    { key: "c1", Icon: MdOutlineAutoGraph },
    { key: "c2", Icon: FiEye },
    { key: "c3", Icon: FiMessageSquare },
    { key: "c4", Icon: FiTool },
    { key: "c5", Icon: FiLayers },
    { key: "c6", Icon: FiTrendingUp },
  ];

  return (
    <>
      <Container fluid className="section-block section-landing-hero section-landing-ai">
        <Container className="section-inner">
          <p className="landing-kicker">{t("landing.common.kicker")} {CITY} {t("landing.common.kicker2")}</p>

          <h1 className="landing-title gradient-heading">{t("landingAI.heroTitle")}</h1>

          <p className="landing-lead">{t("landingAI.heroLead")}</p>

          <div className="landing-cta">
            <Button className="cta-btn" variant="primary" type="button" onClick={openWhatsApp}>
              <AiOutlineWhatsApp />&nbsp; {t("landing.common.ctaWhatsApp")}
            </Button>

            <Button className="cta-btn" variant="outline-primary" type="button" onClick={openEmail}>
              <AiOutlineMail />&nbsp; {t("landing.common.ctaEmail")}
            </Button>

            <Button className="cta-btn" variant="outline-primary" href={LINKEDIN} target="_blank" rel="noreferrer">
              <FaLinkedinIn />&nbsp; LinkedIn
            </Button>
          </div>

          <div className="landing-proof">
            <span>{t("landingAI.proof1")}</span>
            <span>•</span>
            <span>{t("landingAI.proof2")}</span>
            <span>•</span>
            <span>{t("landingAI.proof3")}</span>
          </div>
        </Container>
      </Container>

      <Container fluid className="section-block section-landing-alt">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("landingAI.helpTitle")}</h2>

          <Row className="g-4 justify-content-center">
            {aiCards.map(({ key, Icon }) => (
              <Col key={key} md={6} lg={4}>
                <div className="landing-card landing-card-icon">
                  <div className="landing-card-badge" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className="landing-card-title">{t(`landingAI.cards.${key}.title`)}</h3>
                  <p className="landing-card-text">{t(`landingAI.cards.${key}.text`)}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-block section-landing-white">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("landing.common.howTitle")}</h2>

          <Row className="g-4 justify-content-center">
            {["s1", "s2", "s3", "s4"].map((k, idx) => (
              <Col key={k} md={6} lg={3}>
                <div className="landing-step">
                  <div className="landing-step-num">{idx + 1}</div>
                  <h3 className="landing-step-title">{t(`landing.common.steps.${k}.title`)}</h3>
                  <p className="landing-step-text">{t(`landing.common.steps.${k}.text`)}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-block section-landing-alt">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("landing.common.formTitle")}</h2>
          <p className="landing-lead" style={{ maxWidth: "72ch", margin: "0 auto 16px" }}>
            {t("landing.common.formLead")}
          </p>

          <div className="mini-form">
            <Form>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>{t("landing.common.name")}</Form.Label>
                    <Form.Control
                      value={form.name}
                      onChange={update("name")}
                      placeholder={t("landing.common.namePh")}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>{t("landing.common.company")}</Form.Label>
                    <Form.Control
                      value={form.company}
                      onChange={update("company")}
                      placeholder={t("landing.common.companyPh")}
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group>
                    <Form.Label>{t("landing.common.email")}</Form.Label>
                    <Form.Control
                      value={form.email}
                      onChange={update("email")}
                      placeholder={t("landing.common.emailPh")}
                      type="email"
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group>
                    <Form.Label>{t("landing.common.message")}</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder={t("landingAI.form.messagePh")}
                    />
                  </Form.Group>
                </Col>

                <Col md={12} className="mini-form-actions">
                  <Button className="cta-btn" variant="primary" type="button" onClick={openWhatsApp}>
                    <AiOutlineWhatsApp />&nbsp; {t("landing.common.sendWhatsApp")}
                  </Button>
                  <Button className="cta-btn" variant="outline-primary" type="button" onClick={openEmail}>
                    <AiOutlineMail />&nbsp; {t("landing.common.sendEmail")}
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default AIMadrid;
