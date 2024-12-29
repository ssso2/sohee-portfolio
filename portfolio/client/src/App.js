import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/sohee-portfolio" element={<Intro />} />
                    {/* <Route path="/#main" element={<Main />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
