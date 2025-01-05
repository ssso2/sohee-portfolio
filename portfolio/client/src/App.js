import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import { Main } from "./pages/Main";
import Sample from "./pages/Sample";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/sohee-portfolio" element={<Intro />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/sample" element={<Sample />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
