import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../Redux/AllAccess";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { IsAuth } from "./isAuth";
import { lazy } from "react";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import Reports from "../pages/Performance/Reports/Reports";
import Trade from "../pages/TradeLog/Trade/Trade";

import "./App.css";
import DailyStats from "../pages/DailyStatus/DailyStats/DailyStats";
import TradingViewWidget from "../pages/TradingViewChart/tradingViewChart";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import JournalRoutes from "./journalRoutes";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const DailyStatus = lazy(() => import("../pages/DailyStatus/DailyStatus"));
const UserCsv = lazy(() => import("../pages/UserCSV/UserCsv"));
const Performance = lazy(() => import("../pages/Performance/Performance"));
const Journal = lazy(() => import("../pages/Journal/Journal"));
const News = lazy(() => import("../pages/News/News"));
const TradeLog = lazy(() => import("../pages/TradeLog/TradeLog"));
const Setting = lazy(() => import("../pages/JournalSetting/JournalComponent"));

// performance nested routes
const Drawdown = lazy(() => import("../pages/Performance/DrawDown/Drawdown"));
const OverView = lazy(() => import("../pages/Performance/Overview/OverView"));
const Detail = lazy(() => import("../pages/Performance/Details/Detail"));
const TagBreakDown = lazy(() =>
  import("../pages/Performance/TagBreakDown/TagBreakDown")
);
const Compare = lazy(() => import("../pages/Performance/Compare/Compare"));
const WinLossExpectation = lazy(() =>
  import("../pages/Performance/WinVSLossDays/WinVSLossDays")
);
// performance'sf detail nested routes
const DaysAndTimesD = lazy(() =>
  import("../pages/Performance/Details/DaysAndTimes/DaysAndTimes")
);
const AggregatePlD = lazy(() =>
  import("../pages/Performance/Details/AggredatePL/AggregatePL")
);
const PerTradeAverageD = lazy(() =>
  import("../pages/Performance/Details/PerTradeAverage/PerTradeAverage")
);
const InstrumentD = lazy(() =>
  import("../pages/Performance/Details/Instrument/Instrument")
);
const LiquidityD = lazy(() =>
  import("../pages/Performance/Details/Liquidity/Liquidity")
);
const MarketBehaviourD = lazy(() =>
  import("../pages/Performance/Details/Marketbehaviour/MarketBehaviour")
);
const PriceVolumeD = lazy(() =>
  import("../pages/Performance/Details/PriceVolume/PriceVolume")
);
const WinLossExpectationD = lazy(() =>
  import("../pages/Performance/Details/WinLossExpectation/WinLossExpectation")
);

// performance's winloss nested routes
const DaysAndTimesWLD = lazy(() =>
  import("../pages/Performance/WinVSLossDays/DaysAndTimes/DaysAndTimes")
);
const InstrumentWLD = lazy(() =>
  import("../pages/Performance/WinVSLossDays/Instrument/Instrument")
);
const LiquidityWLD = lazy(() =>
  import("../pages/Performance/WinVSLossDays/Liquidity/Liquidity")
);
const MarketBehaviourWLD = lazy(() =>
  import("../pages/Performance/WinVSLossDays/Marketbehaviour/MarketBehaviour")
);
const PriceVolumeWLD = lazy(() =>
  import("../pages/Performance/WinVSLossDays/PriceVolume/PriceVolume")
);
const PerTradeAverageWLD = lazy(() =>
  import("../pages/Performance/WinVSLossDays/PerTradeAverage/PerTradeAverage")
);
const AggregatePlWLD = lazy(() =>
  import("../pages/Performance/WinVSLossDays/AggregatePL/WinLossAggregatePL")
);
const WinLossExpectationWLD = lazy(() =>
  import(
    "../pages/Performance/WinVSLossDays/WinLossExpectation/WinLossExpectation"
  )
);

// performance's compare nested routes
const DaysAndTimesC = lazy(() =>
  import("../pages/Performance/Compare/DaysAndTimes/DaysAndTimes")
);
const InstrumentC = lazy(() =>
  import("../pages/Performance/Compare/Instrument/Instrument")
);
const LiquidityC = lazy(() =>
  import("../pages/Performance/Compare/Liquidity/Liquidity")
);
const MarketBehaviourC = lazy(() =>
  import("../pages/Performance/Compare/Marketbehaviour/MarketBehaviour")
);
const PriceVolumeC = lazy(() =>
  import("../pages/Performance/Compare/PriceVolume/PriceVolume")
);
const WinLossExpectationC = lazy(() =>
  import("../pages/Performance/Compare/WinLossExpectation/WinLossExpectation")
);
const PerTradeAverageC = lazy(() =>
  import("../pages/Performance/Compare/PerTradeAverage/PerTradeAverage")
);
const AggregatePlC = lazy(() =>
  import("../pages/Performance/Compare/AggregatePL/CompareAggregate")
);

// journalSetting nested routes
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

const App = () => {
  const dispatch = useDispatch();
  const { authenticateRoute } = bindActionCreators(actionCreator, dispatch);
  const authenticateUser = useSelector((state) => state.authenticateUser);

  useEffect(() => {
    const Token = localStorage.getItem("AuthToken");
    if (Token) {
      authenticateRoute(true);
    } else {
      authenticateRoute(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<IsAuth />}>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dailyStatus" element={<DailyStatus />} />
            <Route path="/usercsv" element={<UserCsv />} />
            <Route path="/performance" element={<Performance />}>
              <Route index element={<OverView />} />
              <Route path="overview" element={<OverView />} />
              <Route path="detail" element={<Detail />}>
                <Route index element={<AggregatePlD />} />
                <Route path="aggregate-pl" element={<AggregatePlD />} />
                <Route
                  path="per-trade-average"
                  element={<PerTradeAverageD />}
                />
                <Route path="days-times" element={<DaysAndTimesD />} />
                <Route path="price-volume" element={<PriceVolumeD />} />
                <Route path="instrument" element={<InstrumentD />} />
                <Route path="market-behaviour" element={<MarketBehaviourD />} />
                <Route
                  path="winloss-expectation"
                  element={<WinLossExpectationD />}
                />
                <Route path="liquidity" element={<LiquidityD />} />
              </Route>
              <Route path="winVsloss" element={<WinLossExpectation />}>
                <Route index element={<AggregatePlWLD />} />
                <Route path="aggregate-pl" element={<AggregatePlWLD />} />
                <Route
                  path="per-trade-average"
                  element={<PerTradeAverageWLD />}
                />
                <Route path="days-times" element={<DaysAndTimesWLD />} />
                <Route path="price-volume" element={<PriceVolumeWLD />} />
                <Route path="instrument" element={<InstrumentWLD />} />
                <Route
                  path="market-behaviour"
                  element={<MarketBehaviourWLD />}
                />
                <Route
                  path="winloss-expectation"
                  element={<WinLossExpectationWLD />}
                />
                <Route path="liquidity" element={<LiquidityWLD />} />
              </Route>
              <Route path="compare" element={<Compare />}>
                <Route index element={<AggregatePlC />} />
                <Route path="aggregate-pl" element={<AggregatePlC />} />
                <Route
                  path="per-trade-average"
                  element={<PerTradeAverageC />}
                />
                <Route path="days-times" element={<DaysAndTimesC />} />
                <Route path="price-volume" element={<PriceVolumeC />} />
                <Route path="instrument" element={<InstrumentC />} />
                <Route path="market-behaviour" element={<MarketBehaviourC />} />
                <Route
                  path="winloss-expectation"
                  element={<WinLossExpectationC />}
                />
                <Route path="liquidity" element={<LiquidityC />} />
              </Route>
              <Route path="drawdown" element={<Drawdown />} />
              <Route path="tag-breakdown" element={<TagBreakDown />} />
            </Route>
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
              <Route
                path="market-replay-setting"
                element={<MarketReplySetting />}
              />
            </Route>

            {/* <JournalRoutes /> */}
            <Route path="/news" element={<News />} />
            <Route path="/tradelog" element={<TradeLog />} />
            <Route path="/setting" element={<Setting />}>
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
              <Route
                path="market-replay-setting"
                element={<MarketReplySetting />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
