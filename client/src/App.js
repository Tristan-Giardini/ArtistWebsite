import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Painting from "./Painting";
import Photography from "./Photography";
import Writing from "./Writing";
import WritingExample from "./WritingExample";
import Photos from "./Photos";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/photography" element={<Photos />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:piece" element={<WritingExample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
