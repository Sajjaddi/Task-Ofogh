import React from "react";
import { Route } from "react-router-dom";
import { Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import EstateList from "./pages/EstateList";
import Notification from "./components/Notification";
import NewEstate from "./pages/NewEstate";
import Estate from "./pages/Estate";

const Login = React.lazy(() => import("./pages/Login"));
const SignIn = React.lazy(() => import("./pages/SignIn"));

function App() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <>
      <Loader />
      <Notification />
      <Routes>
        <Route
          path={"/"}
          element={
            <React.Suspense fallback={<Loader />}>
              {isLoggedIn ? <EstateList /> : <Navigate to={"/Signin"} />}
            </React.Suspense>
          }
        />
        <Route
          path="/new-estate"
          element={
            <React.Suspense fallback={<Loader />}>
              {isLoggedIn ? <NewEstate /> : <Navigate to={"/Signin"} />}
            </React.Suspense>
          }
        />
        <Route
          path="/estate/:id"
          element={
            <React.Suspense fallback={<Loader />}>
              {isLoggedIn ? <Estate /> : <Navigate to={"/Signin"} />}
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<Loader />}>
              {!isLoggedIn ? <Login /> : <Navigate to={"/"} />}
            </React.Suspense>
          }
        />

        <Route
          path={"/signin"}
          element={
            <React.Suspense fallback={<Loader />}>
              {!isLoggedIn ? <SignIn /> : <Navigate to={"/"} />}
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
