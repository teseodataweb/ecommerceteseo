// pages/ProductDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import HeaderOne from "../components/HeaderOne";
import BreadcrumbTwo from "../components/BreadcrumbTwo";
import ProductDetails from "../components/ProductDetails";
import ServiceOne from "../components/ServiceOne";    
import ServiceTwo from "../components/ServiceTwo";
import BrandSectionOne from "../components/BrandSectionOne";
import FooterOne from "../components/FooterOne";
import Preloader from "../helper/Preloader";
import { fetchProductBySlug } from "../lib/productsApi";


const ProductDetailsPage = () => {
  const { slug } = useParams();            // <-- usa el slug de la URL
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ready | notfound | error

  useEffect(() => {
    (async () => {
      try {
        console.log("[Details] slug:", slug);
        const data = await fetchProductBySlug(slug);
        if (!data) {
          setStatus("notfound");
          return;
        }
        console.log("[Details] product:", data);
        setProduct(data);
        setStatus("ready");
      } catch (e) {
        console.error("[Details] error:", e);
        setStatus("error");
      }
    })();
  }, [slug]);

  if (status === "loading") return <Preloader />;
  if (status === "notfound") return <Navigate to="/productos" replace />;
  if (status === "error") return <div className="container py-5 text-white">Error cargando el reporte.</div>;

  return (
    <>
      <HeaderOne />

      <BreadcrumbTwo
        title={product?.nombre || "Detalle de reporte"}
        path={[
          { label: "Inicio", href: "/" },
          { label: "Reportes", href: "/productos" },
        ]}
        showTabs={true}
        chips={["Compra segura con Stripe", "Descarga inmediata", "PDF"]}
      />

      {/* Pasa el producto al componente de detalle */}
      <ProductDetails product={product} />

      {/* Mostrar ServiceOne o ServiceTwo según el nombre del producto */}
      {product?.nombre === "Mercado del Acero en México: Proyecciones de Precios y Tendencias Esperadas" && (
        <ServiceOne />
      )}
      {product?.nombre === "Perspectivas del Mercado del Concreto en México — 2025" && (
        <ServiceTwo />
      )}

      <BrandSectionOne />
      <FooterOne />
    </>
  );
};

export default ProductDetailsPage;
