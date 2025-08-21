import React from "react";
import Preloader from "../helper/Preloader";
import SaleOffer from "../components/SaleOffer";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import PerformanceAuthor from "../components/PerformanceAuthor";
import FeaturedOne from "../components/FeaturedOne";
import SellingOne from "../components/SellingOne";
import FeaturedAuthor from "../components/FeaturedAuthor";
import BecomeSellerOne from "../components/BecomeSellerOne";
import ServiceOne from "../components/ServiceOne"
import BrandSectionOne from "../components/BrandSectionOne";
import FooterOne from "../components/FooterOne";

const HomePage = () => {
  
  return (
    <section className="change-gradient">
    {/* Preloader */}
    <Preloader />

    {/* SaleOffer */}
    <SaleOffer />

    {/* HeaderOne */}
    <HeaderOne />

    {/* BannerOne */}
    <BannerOne />

    {/* PerformanceAuthor */}
    <PerformanceAuthor />

    {/* SellingOne */}
    <SellingOne />

    {/* FeaturedOne */}
    <FeaturedOne />


    {/* FeaturedAuthor */}
    <FeaturedAuthor />


    {/* BecomeSellerOne */}
    <BecomeSellerOne />

    {/* ServiceOne */}
    <ServiceOne />


    {/* BrandSectionOne */}
    <BrandSectionOne />

    {/* FooterOne */}
    <FooterOne />
  </section>
  );
};

export default HomePage;
