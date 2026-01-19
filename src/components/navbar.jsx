import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import logo from "../assets/logos/logo.png";
import LanguageSelector from "./languageSelector";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : ""}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex"
          onClick={() => setExpanded(false)}
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/aboutme" onClick={() => setExpanded(false)}>
                {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
                {t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>
                {t("navbar.resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="px-2 d-flex justify-content-center align-items-center">
              <LanguageSelector />
            </Nav.Item>

            <Nav.Item className="d-flex align-items-center">
              <Button
                href="https://github.com/rootkit0"
                target="_blank"
                variant="outline-primary"
              >
                <BsGithub /> &nbsp; GitHub
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
