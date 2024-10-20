import { BrowserRouter, Routes, Route } from "react-router-dom";

import FloatHub from "./Components/FloatHub";
import Events from "./Components/Events";
import MessageBoard from "./Components/MessageBoard";

import "./Styles/App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FloatHub/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/MessageBoard" element={<MessageBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
