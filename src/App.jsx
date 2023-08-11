import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/dashboard";

//actions
import { dashboardAction, dashboardLoader } from "./utils/actions";

//layout
import Main, { MainLoader } from "./layouts/mainLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} loader={MainLoader}>
        <Route
          index
          element={<Dashboard />}
          loader={dashboardLoader}
          action={dashboardAction}
        />

        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
