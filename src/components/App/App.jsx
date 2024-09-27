import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

export default function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
