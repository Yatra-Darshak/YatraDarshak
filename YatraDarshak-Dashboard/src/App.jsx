import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AuthPage from "./Components/AuthCredentials/AuthPage";
import TravelBookingPage from "./Pages/TravelBookingPage/TravelBookingPage";
import YDPartnerHome from "./Pages/YDPartnerHomePage/YDPartnerHomePage";
import YatradarshakAdminAuth from "./Components/AdminCredential/YatradarshakAdminAuth";
import TravelDiarySection from "./Pages/TravelDairy/TravelDiarySection";
import BusBookingPage from "./Pages/TravelBookingPage/Pages/BusBookingPage";

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

          {/* Travel Dairy */}
          <Route path="/travel-dairy" element={<TravelDiarySection />} />

          {/* Auth Pages */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/authAdmin" element={<YatradarshakAdminAuth />} />

          {/* Travel Forms and pages */}
          <Route path="/bus-booking-page" element={<BusBookingPage/>} />
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
