import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import IndexPage from "./pages/index-page";

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
