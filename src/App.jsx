import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import MainLayout from "./components/MainLayout/MainLayout";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import GraphicDesign from "./components/Work/GraphicDesign/GraphicDesign";
import Apps from "./components/Work/Apps/Apps";
import Software from "./components/Work/Software/Software";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "skills", element: <Skills /> },
        { path: "experience", element: <Experience /> },
        {
          path: "work",
          element: <Work />,
          children: [
            { index: true, element: <GraphicDesign /> },
            { path: "graphic-design", element: <GraphicDesign /> },
            { path: "apps", element: <Apps /> },
            { path: "software", element: <Software /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
