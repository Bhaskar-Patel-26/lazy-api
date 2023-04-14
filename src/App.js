import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const LazyMain = React.lazy(() => import("./components/Main"));
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LazyMain />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />

    </div>
  );
}

export default App;
