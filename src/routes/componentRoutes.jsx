import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import { HOME, LISTA } from "../constants/paths";
import Home from "@components/Home/Home";
import List from "@components/List/List";

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
