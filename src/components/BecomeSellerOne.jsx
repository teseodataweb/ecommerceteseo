import React, { useState } from "react";
import { Icon } from "@iconify/react";

const faqData = [
  {
    question: "¿Cómo recibo mi reporte?",
    answer: (
      <span>
        Tras tu pago, recibirás un correo con un enlace seguro para descargar tu PDF al instante.
      </span>
    ),
  },
  {
    question: "¿Puedo pedir factura?",
    answer: (
      <span>
        Sí. Te enviaremos un formulario post-compra para facturación manual (versión MVP).
      </span>
    ),
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: (
      <span>
        Stripe admite tarjetas de crédito/débito internacionales.
      </span>
    ),
  },
  {
    question: "¿Mis reportes son personalizados?",
    answer: (
      <span>
        Los reportes estándar son generales por sector; si requieres un estudio a la medida, contáctanos en Teseo Data Lab.
      </span>
    ),
  },
  {
    question: "¿Puedo volver a descargar el reporte más de una vez?",
    answer: (
      <span>
        Sí. Cada compra incluye un enlace seguro que podrás usar varias veces durante un periodo limitado, siempre protegido para tu seguridad.
      </span>
    ),
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion" id="faqAccordion">
      {faqData.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            className="accordion-item mb-3 border-0"
            key={idx}
            style={{
              background: "#f7f7fa",
              borderRadius: "1rem",
              boxShadow: isOpen ? "0 2px 12px rgba(80,60,160,0.07)" : "none",
              transition: "box-shadow 0.2s",
            }}
          >
            <h3 className="accordion-header" style={{ fontSize: "1.1rem" }}>
              <button
                className="fw-600"
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
                style={{
                  background: "none",
                  color: "#4b3576",
                  border: "none",
                  boxShadow: "none",
                  padding: "1rem 1.25rem",
                  borderRadius: "1rem",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.question}
                <span
                  aria-hidden="true"
                  style={{
                    marginLeft: "auto",
                    fontSize: "1.4em",
                    color: "#a08edb",
                  }}
                >
                  {isOpen ? (
                    <Icon icon="mdi:chevron-up" />
                  ) : (
                    <Icon icon="mdi:chevron-down" />
                  )}
                </span>
              </button>
            </h3>
            <div
              className="accordion-collapse"
              style={{
                maxHeight: isOpen ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div
                className="accordion-body"
                style={{
                  padding: isOpen ? "1rem 1.25rem" : "0 1.25rem",
                  color: "#3d3350",
                  fontSize: "1rem",
                  opacity: isOpen ? 1 : 0,
                  transition: "opacity 0.2s, padding 0.2s",
                }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const BecomeSellerOne = () => {
  return (
    <section className="seller padding-y-120">
      <div className="container container-two">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="faq-block p-4 p-md-5 rounded-4 my-4"
              style={{
                background: "linear-gradient(135deg, #f3f0fa 0%, #f7f7fa 100%)",
                boxShadow: "0 4px 24px rgba(80,60,160,0.08)",
                border: "1px solid #e3e0f3",
              }}
            >
              <h2 className="mb-4 text-center fw-700" style={{ color: "#4b3576" }}>
                Preguntas Frecuentes
              </h2>
              <FAQAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeSellerOne;
