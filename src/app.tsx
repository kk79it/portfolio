import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/index-page";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  );
}

export default App;
