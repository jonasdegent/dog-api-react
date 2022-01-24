import "./css/styles.css"
import Dogs from "./Dogs"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dog from "./Dog"
import Favorites from "./Favorites";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dogs />} />
          <Route path="/dog/:name" element={<Dog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
