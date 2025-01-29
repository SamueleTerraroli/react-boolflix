import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout setSearchTerm={setSearchTerm} />}>
            <Route index element={<MainPage searchTerm={searchTerm} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
