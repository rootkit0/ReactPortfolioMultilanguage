import { Col, Row } from "react-bootstrap";
import {
  SiTruenas, SiDocker, SiKubernetes, SiAdguard, SiApache, SiNextcloud, SiPlex,
  SiHomeassistant, SiEsphome, SiEclipsemosquitto, SiCloudflare, SiNgrok,
  SiMysql, SiPostgresql, SiMonero
} from "react-icons/si";

function Serverstack() {
  return (
    <Row className="stack-grid">
      <Col xs={4} md={2} className="tech-icons"><SiTruenas /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKubernetes /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdguard /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApache /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextcloud /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPlex /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHomeassistant /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiEsphome /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiEclipsemosquitto /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCloudflare /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNgrok /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMonero /></Col>
    </Row>
  );
}

export default Serverstack;
