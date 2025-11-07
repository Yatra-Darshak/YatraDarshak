import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import OffersSection from "../OffersSection/OffersSection";
import PartnerAdvantageSection from "../PartnerAdvantageSection/PartnerAdvantageSection";
import JoinUsSection from "../JoinUsSection/JoinUsSection";
import Footer from "../../Components/Footer/Footer";

const YDPartnerHomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Offers Section */}
      <div className="w-full">
        <OffersSection />
      </div>

      {/* Partner Advantage Section */}
      <div className="w-full">
        <PartnerAdvantageSection />
      </div>

      {/* Join Us Section */}
      <div className="w-full">
        <JoinUsSection />
      </div>
    </div>
  );
};

export default YDPartnerHomePage;
