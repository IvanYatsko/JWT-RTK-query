import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.hook";

const PrivateRoute = () => {
  const { isAuth } = useAppSelector((state) => state.mainReducer);

  if (isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
