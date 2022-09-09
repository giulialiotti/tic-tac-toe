// External Components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "./pages/home";
import { BoardPage } from "./pages/boardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/board" exact element={<BoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
