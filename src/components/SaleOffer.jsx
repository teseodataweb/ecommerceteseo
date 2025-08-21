import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SaleOffer = () => {
  const STORAGE_KEY = "teseoSaleOfferClosed";
  const [show, setShow] = useState(
    typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) !== "1" : true
  );

  const targetISO = "2025-09-30T23:59:59Z"; // UTC ISO
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!show) return;
    const end = new Date(targetISO).getTime();

    const tick = () => {
      const now = Date.now();
      const distance = end - now;
      if (distance <= 0) {
        setShow(false);
        localStorage.setItem(STORAGE_KEY, "1");
        return;
      }
      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, [show, targetISO]);

  const close = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!show) return null;

  return (
    <>
      <div className={show ? `sale-offer` : `d-none`}>
        <div className="container container-full">
          <div className="sale-offer__content flx-between position-relative">
            <div className="sale-offer__countdown">
              <div className="countdown">
                <div className="day">
                  <span className="num">{timeLeft.days}</span>
                  <span className="word"><b>Days:</b> </span>
                </div>
                <div className="hour">
                  <span className="num">{timeLeft.hours}</span>
                  <span className="word"><b>Hours:</b> </span>
                </div>
                <div className="min">
                  <span className="num">{timeLeft.minutes}</span>
                  <span className="word"><b>Min:</b> </span>
                </div>
                <div className="sec">
                  <span className="num">{timeLeft.seconds}</span>
                  <span className="word"><b>Sec:</b> </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje + CTA */}
          <div className="sale-offer__discount flx-align gap-2">
            <span className="sale-offer__text text-heading">
              Precio de lanzamiento 2025 · Compra segura con Stripe · Descarga inmediata
            </span>
            <Link to="/productos" className="btn btn-sm btn-white pill fw-500" aria-label="Ver reportes">
              Ver reportes
            </Link>
          </div>

          {/* Cerrar */}
          <div className="sale-offer__button">
            <button
              type="button"
              className="sale-offer__close text-heading"
              onClick={close}
              aria-label="Cerrar aviso"
            >
              <i className="las la-times" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleOffer;
