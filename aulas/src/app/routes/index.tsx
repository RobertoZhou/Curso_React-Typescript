import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Routes>
        </BrowserRouter>
    );
};
