import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/createproject" Component={CreateProject}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
