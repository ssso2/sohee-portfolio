import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import { Main } from "./pages/Main";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Feedback from "./pages/Feedback";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/sohee-portfolio" element={<Intro />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/feedback" element={<Feedback />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
