import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../Redux/AllAccess";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import NotFound from "../pages/NotFound";
import { Suspense } from "react";
import Loading from "../components/common/Loading";

const protectedRoutes = [
  "/dashboard",
  "/performance",
  "/journal",
  "/dailyStatus",
  "/setting",
  "/tradelog",
  "/news",
  "/userscv",
];
export const IsAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { authenticateRoute } = bindActionCreators(actionCreator, dispatch);
  const authenticateUser = useSelector((state) => state.authenticateUser);
  const fileCheck = useSelector((state) => state.fileCheck);
  const Token = localStorage.getItem("AuthToken");
  useEffect(() => {
    if (Token) {
      authenticateRoute(true);
    } else {
      authenticateRoute(false);
    }
  }, [authenticateUser]);

  if (authenticateUser && !fileCheck) {
    if (location.pathname !== "/usercsv") {
      //   return <NotFound />;
      return <Navigate to='/usercsv'/>
      }
  }

  if (!authenticateUser && !Token) {
    // user is not authenticated
    // if (location.pathname === "/") {
    //   return <NotFound />;
    // }
    // if (protectedRoutes.includes(location.pathname)) {
    //   return <Navigate to="/login" />;
    // }
    return <Navigate to="/login" />;
  }
  //   return children ? children : null;
  return (
    <Suspense fallback={<Loading/>}>
      <Outlet />
    </Suspense>
  );
};
