import { Navigate, Outlet} from "react-router-dom";
import auth_service from "../../API/auth_service";
// import { observer } from "mobx-react-lite";

const PrivateRoute = (props) => {
    console.log(auth_service.isAuth);
  if (localStorage.getItem("isAuth")) {
    return <Outlet/>
  } 
  else {
    return <Navigate to="/login"/>;
  }
};
  
export default PrivateRoute;