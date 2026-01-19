import { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";

import Particle from "../particle";
import pdfES from "../../assets/documents/CV_XavierBerga_ES.pdf";
import pdfEN from "../../assets/documents/CV_XavierBerga_EN.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t, i18n } = useTranslation();
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const selectedPdf = useMemo(() => {
    switch (i18n.language) {
      case "en":
        return pdfEN;
      case "ca":
      case "es":
      default:
        return pdfES;
    }
  }, [i18n.language]);

  const pageWidth = useMemo(() => {
    if (width >= 1200) return 880;
    if (width >= 992) return 820;
    if (width >= 768) return Math.min(760, width - 64);
    return Math.max(320, width - 32);
  }, [width]);

  return (
    <>
      <Container fluid className="section-block section-resume-top">
        <Particle />
        <Container className="section-inner text-center">
          <div className="resume-cta">
            <Button
              variant="primary"
              href={selectedPdf}
              target="_blank"
              style={{ maxWidth: "350px" }}
            >
              <AiOutlineDownload />
              &nbsp;{t("resume.download")}
            </Button>
          </div>
        </Container>
      </Container>

      <Container fluid className="section-block section-resume-doc">
        <Container className="section-inner">
          <div className="resume-pdf-scroll">
            <Document
              file={selectedPdf}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              loading={<div className="text-center">{t("resume.loading") ?? "Cargando..."}</div>}
            >
              {Array.from({ length: numPages }, (_, idx) => (
                <Page
                  key={`p_${idx + 1}`}
                  pageNumber={idx + 1}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              ))}
            </Document>
          </div>
        </Container>
      </Container>

      <Container fluid className="section-block section-resume-bottom">
        <Container className="section-inner text-center">
          <div className="resume-cta">
            <Button
              variant="primary"
              href={selectedPdf}
              target="_blank"
              style={{ maxWidth: "350px" }}
            >
              <AiOutlineDownload />
              &nbsp;{t("resume.download")}
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default ResumeNew;
