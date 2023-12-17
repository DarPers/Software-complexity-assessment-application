import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProject from "./pages/CreateProject";
import MFPAssesment from "./pages/MFPAssesment";
import CocomoAssesment from "./pages/CocomoAssesment"
import Result from "./pages/Results";
import Account from "./pages/Account";
import PrivateRoute from "./components/accountComponents/PrivateRoute";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/createproject" Component={PrivateRoute}>
          <Route path="" Component={CreateProject}/>
        </Route>
        <Route path="/assesment" Component={PrivateRoute}>
          <Route path="" Component={MFPAssesment}/>
        </Route>
        <Route path="/assesment2" Component={PrivateRoute}>
          <Route path="" Component={CocomoAssesment}/>
        </Route>
        <Route path="/result" Component={PrivateRoute}>
          <Route path="" Component={Result}/>
        </Route>
        <Route path="/account" Component={PrivateRoute}>
          <Route path="" Component={Account}/>
        </Route>
        <Route path="/detail" Component={PrivateRoute}>
          <Route path="" Component={DetailPage}/>
        </Route>
        <Route path="*" element={<div>404... not found </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
