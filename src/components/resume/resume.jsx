import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Particle from "../particle";
import pdfES from "../../assets/documents/CV_XavierBerga_ES.pdf";
import pdfEN from "../../assets/documents/CV_XavierBerga_EN.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const getPdfByLang = () => {
    switch (i18n.language) {
      case "ca":
        return pdfES;
      case "es":
        return pdfES;
      case "en":
        return pdfEN;
      default:
        return pdfES;
    }
  };

  const selectedPdf = getPdfByLang();
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={selectedPdf} target="_blank" style={{ maxWidth: "250px" }} >
            <AiOutlineDownload />
            &nbsp;{t("resume.download")}
          </Button>
        </Row>
        <Row className="resume">
        <Document file={selectedPdf} className="d-flex justify-content-center">
          <Page pageNumber={1} width={window.innerWidth > 786 ? 800 : window.innerWidth - 40} />
        </Document>
      </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
