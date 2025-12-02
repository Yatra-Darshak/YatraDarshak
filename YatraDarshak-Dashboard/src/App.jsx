import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AuthPage from "./Components/AuthCredentials/AuthPage";
import TravelBookingPage from "./Pages/TravelBookingPage/TravelBookingPage";
import YDPartnerHome from "./Pages/YDPartnerHomePage/YDPartnerHomePage";
import YatradarshakAdminAuth from "./Components/AdminCredential/YatradarshakAdminAuth";
import TravelDiarySection from "./Pages/TravelDairy/TravelDiarySection";
import BusBookingPage from "./Pages/TravelBookingPage/Pages/BusBookingPage";
import CabBookingPage from "./Pages/TravelBookingPage/Pages/CabBookingPage";
import TrainBookingPage from "./Pages/TravelBookingPage/Pages/TrainBookingPage";
import InsuranceBookingPage from "./Pages/TravelBookingPage/Pages/InsuranceBookingPage";
import HotelBookingPage from "./Pages/TravelBookingPage/Pages/HotelBookingPage";
import HolidayBookingPage from "./Pages/TravelBookingPage/Pages/HolidayBookingPage";
import FlightBookingPage from "./Pages/TravelBookingPage/Pages/FlightBookingPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactSection from "./Pages/ContactSection/ContactSection";
import MyAccount from "./Components/UserAccountSection/MyAccount/MyAccount";
import MyBookings from "./Components/UserAccountSection/MyBooking/MyBooking";
import SavedPlaces from "./Components/UserAccountSection/SavedPlaces/SavedPlaces";
import PaymentMode from "./Components/UserAccountSection/PaymentMode/PaymentMode";
import NotificationsSection from "./Components/UserAccountSection/NotificationsSection/NotificationsSection";
import SettingsSection from "./Components/UserAccountSection/SettingsSection/SettingsSection";
import HelpSupportSection from "./Components/UserAccountSection/HelpSupportSection/HelpSupportSection";
import PartnerDashboard from "./Pages/PartnerDashboard/PartnerDashboard";
import PartnerBenefits from "./Pages/PartnerBenefits/PartnerBenefits";
import PartnerSettings from "./Pages/PartnerSettings/PartnerSettings";
import PartnerHelpSupport from "./Pages/PartnerHelpSupport/PartnerHelpSupport";

// ✅ Wrapper component to detect the route
const AppContent = () => {
  const location = useLocation();

  // Hide Header & Footer on these routes
  const hideLayout =
    location.pathname === "/auth" || location.pathname === "/authAdmin";

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Show Header only when not on Auth pages */}
      {!hideLayout && <Header />}

      <div className="flex-grow">
        <Routes>
          {/* Default Home Page */}
          <Route path="/" element={<TravelBookingPage />} />

          {/* YD Partner Home Page */}
          <Route path="/yd-partner" element={<YDPartnerHome />} />

          {/* Features */}
          <Route path="/travel-dairy" element={<TravelDiarySection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactSection />} />

          {/* Auth Pages */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/authAdmin" element={<YatradarshakAdminAuth />} />

          {/* Travel Forms and pages */}
          <Route path="/bus-booking-page" element={<BusBookingPage />} />
          <Route path="/cab-booking-page" element={<CabBookingPage />} />
          <Route path="/train-booking-page" element={<TrainBookingPage />} />
          <Route
            path="/insurance-booking-page"
            element={<InsuranceBookingPage />}
          />
          <Route path="/hotel-booking-page" element={<HotelBookingPage />} />
          <Route
            path="/holiday-booking-page"
            element={<HolidayBookingPage />}
          />
          <Route path="/flight-booking-page" element={<FlightBookingPage />} />

          {/* User settings */}
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/myBookings" element={<MyBookings />} />
          <Route path="/savedPlaces" element={<SavedPlaces />} />
          <Route path="/paymentMode" element={<PaymentMode />} />
          <Route path="/notifications" element={<NotificationsSection />} />
          <Route path="/settings" element={<SettingsSection />} />
          <Route path="/help-and-support" element={<HelpSupportSection />} />

          {/* Partner page */}
          <Route path="/partner-dashboard" element={<PartnerDashboard />} />
          <Route path="/partner-benefits" element={<PartnerBenefits />} />

          {/* Partner settings */}
          <Route path="/partner-settings" element={<PartnerSettings />} />
          <Route path="/partner-help-support" element={<PartnerHelpSupport />} />
         </Routes>
      </div>

      {/* Show Footer only when not on Auth pages */}
      {!hideLayout && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

// import React from 'react'
// import AuthPage from './Components/AuthCredentials/AuthPage';
// import HeroSection from './Pages/HeroSection/HeroSection';
// import OffersSection from './Pages/OffersSection/OffersSection';
// import PartnerAdvantageSection from './Pages/PartnerAdvantageSection/PartnerAdvantageSection';
// import JoinUsSection from './Pages/JoinUsSection/JoinUsSection';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
// import TravelBookingPage from './Pages/TravelBookingPage/TravelBookingPage';
// import Extra from './Components/Header/extra';

// const App = () => {
//   return (
//     <>
//       {/* <AuthPage /> */}

//       <div className="w-full">

//         {/* <Extra /> */}
//         <Header />
//         <TravelBookingPage />
//         <Footer />
//         {/* Full-width Hero Section */}
//         {/* <div className="w-full">
//           <HeroSection />
//         </div> */}

//         {/* Full-width Offers Section */}
//         {/* <div className="w-full">
//           <OffersSection />
//         </div>
//         <div className="w-full">
//           <PartnerAdvantageSection />
//         </div>
//         <div className="w-full">
//           <JoinUsSection />
//         </div>
//         <div className="w-full">
//           <Footer />
//         </div> */}
//       </div>
//     </>
//   )
// }

// export default App
