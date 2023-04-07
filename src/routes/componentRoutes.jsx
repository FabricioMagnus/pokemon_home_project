import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../components/Home";
import List from "../components/List";
import { HOME, LISTA } from "../constants/paths";

function ComponentRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LISTA} element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ComponentRoutes;
