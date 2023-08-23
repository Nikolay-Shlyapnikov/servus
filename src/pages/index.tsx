import React, { lazy } from "react";
import { Route, Routes, Navigate  } from "react-router-dom";

const SignupPage = lazy(() => import("./signup"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<SignupPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};