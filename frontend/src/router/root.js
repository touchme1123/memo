import {lazy, Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import Loading from "../pages/Loading";

// const Main = lazy(() => import("../pages/Main"));
const StateComponent = lazy(() => import("../component/StateComponent"));

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={<Loading/>}><StateComponent /></Suspense>
    },
]);

export default root;
