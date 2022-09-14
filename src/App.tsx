import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<IndexPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
