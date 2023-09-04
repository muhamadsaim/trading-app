import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Journal = lazy(() => import("../pages/Journal/Journal"));
const Commission = lazy(() =>
  import("../pages/JournalSetting/Commision/Commission")
);
const PrivacyAndPublicProfile = lazy(() =>
  import(
    "../pages/JournalSetting/PrivacyAndPublicProfile/PrivacyAndPublicProfile"
  )
);
const Portfolio = lazy(() =>
  import("../pages/JournalSetting/Portfolio/Portfolio")
);
const TradeSetting = lazy(() =>
  import("../pages/JournalSetting/TradeSetting/TradeSetting")
);
const Theme = lazy(() => import("../pages/JournalSetting/Theme/Theme"));
const Fee = lazy(() => import("../pages/JournalSetting/Fees/Fee"));
const CustomSpread = lazy(() =>
  import("../pages/JournalSetting/customSpread/CustomSpread")
);
const ChartSetting = lazy(() =>
  import("../pages/JournalSetting/chartSetting/ChartSetting")
);
const MarketReplySetting = lazy(() =>
  import("../pages/JournalSetting/MarketReplySetting/index")
);
const TradeWidgets = lazy(() =>
  import("../pages/JournalSetting/tradeWidgets/tradeWidgets")
);

const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/journal" element={<Journal />}>
        <Route index element={<TradeSetting />} />
        <Route path="trade-setting" element={<TradeSetting />} />
        <Route path="commission" element={<Commission />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="fee" element={<Fee />} />
        <Route path="chart-setting" element={<ChartSetting />} />
        <Route path="trade-widgets" element={<TradeWidgets />} />
        <Route path="theme" element={<Theme />} />
        <Route path="custom-spread" element={<CustomSpread />} />
        <Route
          path="privacy-public-profile"
          element={<PrivacyAndPublicProfile />}
        />
        <Route path="market-replay-setting" element={<MarketReplySetting />} />
      </Route>
    </Routes>
  );
};

export default JournalRoutes;
