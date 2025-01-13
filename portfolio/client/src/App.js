import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro_s";
import Main from "./pages/Main_s";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Feedback from "./pages/Feedback";
import Ppop from "./pages/Ppop";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/sohee-portfolio" element={<Intro />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/pop" element={<Ppop />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/feedback" element={<Feedback />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
