import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectRoute = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
