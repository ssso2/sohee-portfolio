import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro_new";
import Main from "./pages/Main_s";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/sohee-portfolio" element={<Intro />} />
                    <Route path="/sohee-portfolio/main" element={<Main />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
