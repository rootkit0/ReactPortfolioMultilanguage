import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import { FiCpu, FiWifi, FiShield, FiTool, FiLayers } from "react-icons/fi";
import { BsSpeedometer2 } from "react-icons/bs";

const PHONE_E164 = "34644369266";
const EMAIL = "xavier@agromind.es";
const LINKEDIN = "https://www.linkedin.com/in/xavierberga/";

function IoTBarcelona() {
  const { t } = useTranslation();
  const CITY = "Barcelona";
  const SLUG = "barcelona";
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = `${t("landingIOT.metaTitle")} ${CITY} | Xavier Berga`;
  }, [t]);

  const update = (key) => (e) =>
    setForm((s) => ({
      ...s,
      [key]: e.target.value,
    }));

  const { subject, body } = useMemo(() => {
    const subject = t("landingIOT.form.emailSubject");
    const lines = [
      `${t("landing.common.service")}: ${t("landingIOT.form.serviceName")}`,
      `${t("landing.common.name")}: ${form.name || "-"}`,
      `${t("landing.common.company")}: ${form.company || "-"}`,
      `${t("landing.common.email")}: ${form.email || "-"}`,
      "",
      `${t("landing.common.message")}:`,
      form.message || "-",
      "",
      `${t("landing.common.source")}: /iot-${SLUG}`,
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

  const serviceCards = [
    { key: "c1", Icon: FiCpu },
    { key: "c2", Icon: BsSpeedometer2 },
    { key: "c3", Icon: FiWifi },
    { key: "c4", Icon: FiLayers },
    { key: "c5", Icon: FiShield },
    { key: "c6", Icon: FiTool },
  ];

  return (
    <>
      <Container fluid className="section-block section-landing-hero section-landing-iot">
        <Container className="section-inner">
          <p className="landing-kicker">{t("landing.common.kicker")} {CITY} {t("landing.common.kicker2")}</p>

          <h1 className="landing-title gradient-heading">{t("landingIOT.heroTitle")}</h1>

          <p className="landing-lead">{t("landingIOT.heroLead")}</p>

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
            <span>{t("landingIOT.proof1")}</span>
            <span>•</span>
            <span>{t("landingIOT.proof2")}</span>
            <span>•</span>
            <span>{t("landingIOT.proof3")}</span>
          </div>
        </Container>
      </Container>

      <Container fluid className="section-block section-landing-alt">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("landingIOT.servicesTitle")}</h2>

          <Row className="g-4 justify-content-center">
            {serviceCards.map(({ key, Icon }) => (
              <Col key={key} md={6} lg={4}>
                <div className="landing-card landing-card-icon">
                  <div className="landing-card-badge" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className="landing-card-title">{t(`landingIOT.cards.${key}.title`)}</h3>
                  <p className="landing-card-text">{t(`landingIOT.cards.${key}.text`)}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Container fluid className="section-block section-landing-white">
        <Container className="section-inner">
          <h2 className="section-title gradient-heading">{t("landingIOT.sectorsTitle")}</h2>

          <Row className="g-4 justify-content-center">
            {["s1", "s2", "s3", "s4"].map((k) => (
              <Col key={k} md={6} lg={3}>
                <div className="landing-step">
                  <div className="landing-step-num">✓</div>
                  <h3 className="landing-step-title">{t(`landingIOT.sectors.${k}.title`)}</h3>
                  <p className="landing-step-text">{t(`landingIOT.sectors.${k}.text`)}</p>
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
                      placeholder={t("landingIOT.form.messagePh")}
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

export default IoTBarcelona;
