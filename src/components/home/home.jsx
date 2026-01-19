import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";

import homeLogo from "../../assets/images/home-main.png";
import Home2 from "./home2";
import Type from "./type";

function Home() {
  const { t } = useTranslation();

  const isMobile = useMemo(
    () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
    []
  );

  const [gyroEnabled, setGyroEnabled] = useState(false);
  const [angles, setAngles] = useState({ x: 0, y: 0 });

  const isIOS = useMemo(
    () => /iPhone|iPad|iPod/i.test(navigator.userAgent),
    []
  );

  const requestGyroPermission = async () => {
    try {
      const DeviceOrientationEventRef = window.DeviceOrientationEvent;

      if (DeviceOrientationEventRef?.requestPermission) {
        const res = await DeviceOrientationEventRef.requestPermission();
        if (res === "granted") setGyroEnabled(true);
        return;
      }

      setGyroEnabled(true);
    } catch {
    }
  };

  useEffect(() => {
    if (isMobile && !isIOS) setGyroEnabled(true);
  }, [isMobile, isIOS]);

  return (
    <section>
      <Container fluid className="home-section section-block section-hero" id="home">
        <Container className="home-content">
          <Row className="align-items-center g-4">
            <Col md={7} className="home-header text-center text-md-start">
              <p className="heading">
                {t("home.salute")}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </p>

              <h1 className="heading-name">
                {t("home.im")} <strong className="main-name">XAVIER BERGA</strong>
              </h1>

              <div className="type-wrap">
                <Type />
              </div>

              <p className="hero-tagline mx-md-0 mx-auto">{t("home.tagline")}</p>

              <div className="hero-cta justify-content-center justify-content-md-start">
                <Button as={Link} to="/projects" variant="primary" className="cta-btn">
                  {t("navbar.projects")}
                </Button>
                <Button as={Link} to="/resume" variant="outline-primary" className="cta-btn">
                  {t("navbar.resume")}
                </Button>
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center">
              <div style={{ width: "100%", maxWidth: 520 }}>
                {isMobile && isIOS && !gyroEnabled && (
                  <div className="d-flex justify-content-center mb-3">
                    <Button
                      type="button"
                      variant="outline-primary"
                      className="cta-btn"
                      onClick={requestGyroPermission}
                    >
                      {t("home.enableMotion") ?? "Activar movimiento"}
                    </Button>
                  </div>
                )}

                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  glareEnable={false}
                  transitionSpeed={700}
                  tiltEnable={!(isMobile && gyroEnabled)}
                  tiltAngleXManual={isMobile && gyroEnabled ? angles.x : undefined}
                  tiltAngleYManual={isMobile && gyroEnabled ? angles.y : undefined}
                >
                  <img src={homeLogo} alt="home" className="img-fluid hero-image" />
                </Tilt>

                {isMobile && !isIOS && !gyroEnabled && (
                  <span style={{ display: "none" }}>
                    {requestGyroPermission()}
                  </span>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
