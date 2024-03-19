import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
      </Route>
      </>
    )
  );

  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
