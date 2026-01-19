import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";

import pdfES from "../../assets/documents/CV_XavierBerga_ES.pdf";
import pdfEN from "../../assets/documents/CV_XavierBerga_EN.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const { t, i18n } = useTranslation();
  const wrapRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(900);
  const [numPages, setNumPages] = useState(0);

  const selectedPdf = useMemo(() => {
    const lang = (i18n.language || "es").toLowerCase();
    if (lang.startsWith("en")) return pdfEN;
    // ca -> ES, es -> ES, resto -> ES
    return pdfES;
  }, [i18n.language]);

  useEffect(() => {
    if (!wrapRef.current) return;

    const el = wrapRef.current;

    const update = () => {
      const w = el.getBoundingClientRect().width;
      setContainerWidth(Math.max(320, Math.floor(w)));
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  const pageWidth = useMemo(() => {
    // resta padding/borde del contenedor scroll
    const w = containerWidth;

    // límites razonables para mantener lectura
    if (w >= 1100) return 900;
    if (w >= 992) return 840;
    if (w >= 768) return Math.max(640, w - 48);
    return Math.max(320, w - 24);
  }, [containerWidth]);

  return (
    <>
      {/* ===== Top: título + subtítulo (sin botón) ===== */}
      <Container fluid className="section-block section-resume-top">
        <Container className="section-inner text-center">
          <h1 className="section-title gradient-heading">
            <b>{t("resume.title")}</b>
          </h1>
          <p className="section-subtitle">{t("resume.subtitle")}</p>
        </Container>
      </Container>

      {/* ===== Documento ===== */}
      <Container fluid className="section-block section-resume-doc">
        <Container className="section-inner" ref={wrapRef}>
          <div className="resume-pdf-scroll">
            <Document
              file={selectedPdf}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              loading={<div className="text-center">{t("resume.loading") ?? "Cargando..."}</div>}
              error={<div className="text-center">{t("resume.error") ?? "No se pudo cargar el documento."}</div>}
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

      {/* ===== Bottom: botón descargar ===== */}
      <Container fluid className="section-block section-resume-bottom">
        <Container className="section-inner text-center">
          <div className="resume-cta">
            <Button
              variant="primary"
              href={selectedPdf}
              target="_blank"
              rel="noreferrer"
              download
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

export default Resume;
