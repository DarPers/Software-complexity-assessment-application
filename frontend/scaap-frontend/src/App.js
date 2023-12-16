import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProject from "./pages/CreateProject";
import MFPAssesment from "./pages/MFPAssesment";
import CocomoAssesment from "./pages/CocomoAssesment"
import Result from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/createproject" Component={CreateProject}/>
        <Route path="/assesment" Component={MFPAssesment}/>
        <Route path="/assesment2" Component={CocomoAssesment}/>
        <Route path="/result" Component={Result}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
