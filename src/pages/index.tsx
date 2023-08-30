import React, { lazy } from "react";
import { Route, Routes, Navigate  } from "react-router-dom";

const SignupPage = lazy(() => import("./signup"));
const ParamPage = lazy(() => import("./param"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/params" element={<ParamPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};