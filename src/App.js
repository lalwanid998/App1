import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Coffee from "./Coffee";
import Contact from "./Contact";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}
export default App;