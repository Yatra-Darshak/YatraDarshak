import React, { useState } from "react";
import Header from "./Header";
import DestinationSelector from "./DestinationSelector";
import ActivitySelector from "./ActivitySelector";
import PackagesSection from "./PackagesSection";
import WondersSection from "./WondersSection";

const TravelDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [currentWonderIndex, setCurrentWonderIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <Header
          title="Popular Destinations"
          subtitle="Discover your next adventure with our curated selection"
        />

        <DestinationSelector
          selectedDestination={selectedDestination}
          setSelectedDestination={setSelectedDestination}
        />

        <ActivitySelector />

        <PackagesSection
          currentPackageIndex={currentPackageIndex}
          setCurrentPackageIndex={setCurrentPackageIndex}
        />

        <WondersSection
          currentWonderIndex={currentWonderIndex}
          setCurrentWonderIndex={setCurrentWonderIndex}
        />
      </div>
    </div>
  );
};

export default TravelDestinations;