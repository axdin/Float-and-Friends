import { BrowserRouter, Routes, Route } from "react-router-dom";

import FloatHub from "./Components/FloatHub";
import MessageBoard from "./Components/MessageBoard";

import "./Styles/App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FloatHub/>}/>
          <Route path="/MessageBoard" element={<MessageBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
