import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import TestStart from "./pages/TestStart";
// import TestPage from "./pages/TestPage";
// import ResultsPage from "./pages/ResultsPage";
// import ReviewSources from "./pages/ReviewSources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/start-test" element={<TestStart />} />
        <Route path="/test/:testId" element={<TestPage />} />
        <Route path="/results/:testId" element={<ResultsPage />} />
        <Route path="/review/:questionId" element={<ReviewSources />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
