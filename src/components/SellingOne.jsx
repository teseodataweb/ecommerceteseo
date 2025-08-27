import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchPublicProducts } from "../lib/productsApi"; // <-- ajusta la ruta si tu carpeta difiere

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" });

const SellingOne = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchPublicProducts(); // lee Firestore (tier=public, active=true)
        setItems(data);
      } catch (e) {
        console.error(e);
        setErr("No pudimos cargar los productos.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <i className="las la-arrow-right" />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <i className="las la-arrow-left" />
      </button>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 992,  settings: { slidesToShow: 3, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 768,  settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 576,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="selling-product padding-y-120 position-relative z-index-1 overflow-hidden">
      <img src="assets/images/gradients/selling-gradient.png" alt="" className="bg--gradient" />
      <img src="assets/images/shapes/element2.png" alt="" className="element one" />
      <img src="assets/images/shapes/element1.png" alt="" className="element two" />
      <img src="assets/images/shapes/curve-pattern1.png" alt="" className="position-absolute start-0 top-0 z-index--1" />
      <img src="assets/images/shapes/curve-pattern2.png" alt="" className="position-absolute end-0 top-0 z-index--1" />

      <div className="container container-two">
        <div className="section-heading style-left style-white flx-between max-w-unset gap-4">
          <div>
            <h3 className="section-heading__title">Reportes destacados</h3>
            <p className="section-heading__desc font-18">
              Compra segura con Stripe y descarga inmediata.
            </p>
          </div>
          <Link to="/productos" className="btn btn-main btn-lg pill fw-300">
  Ver todos
</Link>
        </div>

        <div className="selling-product-slider">
  {/* estados */}
  {loading && <div className="text-center py-5">Cargando…</div>}
  {!!err && <div className="text-center text-danger py-5">{err}</div>}
  {!loading && !err && items.length === 0 && (
    <div className="text-center py-5">No hay productos activos.</div>
  )}

  {!loading && !err && items.length > 0 && (
    <Slider {...settings}>
      {items.map((p) => {
        const title =
          p.nombre || p.productName || p.name || "Reporte de mercado";
        const priceCents =
          p.price_cents ?? p.amount ?? 0; // normaliza
        const price = money.format(priceCents / 100);
        const slug = p.slug || "";
        const cover =
          p.cover_url ||
          p.coverUrl ||
          "assets/images/thumbs/product-img-placeholder.png";
        const priceId = p.price_id || p.priceId; // para Stripe si lo tienes

        return (
          <div key={p.id} className="product-item shadow-sm overlay-none">
            <div className="product-item__thumb d-flex max-h-unset">
              <Link
                to={slug ? `/producto/${slug}` : "/productos"}
                className="link w-100"
                aria-label={`Ver detalles de ${title}`}
              >
                <img
                  src={cover}
                  alt={`Portada del reporte ${title}`}
                  className="cover-img"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="product-item__content">
              <h6 className="product-item__title">
                <Link
                  to={slug ? `/producto/${slug}` : "/productos"}
                  className="link"
                >
                  {title}
                </Link>
              </h6>

              <div className="product-item__info flx-between gap-2">
                <span className="product-item__author">Teseo Data Lab</span>
                <div className="flx-align gap-2">
                  <h6 className="product-item__price mb-0">{price}</h6>
                </div>
              </div>

              <div className="product-item__bottom flx-between gap-2">
                <div>
                  {Array.isArray(p.tags) && p.tags.length > 0 && (
                    <div className="d-flex gap-2 flex-wrap">
                      {p.tags.map((t) => (
                        <span key={t} className="badge text-bg-light border">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flx-align gap-2">
                  {/* Conectar al checkout cuando tengas el endpoint */}
                  <button
                    className="btn btn-outline-light pill"
                    onClick={() => {
                      // TODO: reemplaza por tu flujo real de Stripe
                      // fetch('/api/checkout/session', { method:'POST', body: JSON.stringify({ price_id: priceId }) })
                      //   .then(r => r.json())
                      //   .then(({ url }) => window.location.href = url);
                      if (!priceId) {
                        alert("Este producto aún no tiene price_id configurado.");
                        return;
                      }
                      console.log("Ir a checkout con", priceId);
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  )}
</div>
      </div>
    </section>
  );
};

export default SellingOne;
