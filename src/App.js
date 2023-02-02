import LandingPage from "./pages/landingPage";
import Contactus from "./pages/contact-us page";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/contact-us" element={<Contactus />}></Route>
      </Routes>
    </div>
  );
}

export default App;
