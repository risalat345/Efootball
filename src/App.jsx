import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Steam from "./components/Steam";
import Profile from "./components/Profile";
import GroupA from "./components/GroupA";
// Import additional components like Navbar when ready
// import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Efootball", // Adjust base path for GitHub Pages
      element: (
        <>
          {/* Uncomment Navbar if applicable */}
          {/* <Navbar /> */}
          <Steam />
        </>
      ),
    },
    {
      path: "/Efootball/profile", // Include base path
      element: (
        <>
          {/* <Navbar /> */}
          <Profile />
        </>
      ),
    },
    {
      path: "/Efootball/groupa", // Include base path
      element: (
        <>
          {/* <Navbar /> */}
          <GroupA />
        </>
      ),
    },
    // Uncomment and add other routes as needed
    // {
    //   path: "/Efootball/home",
    //   element: (
    //     <>
    //       <Navbar />
    //       <Home />
    //     </>
    //   ),
    // },
    // {
    //   path: "/Efootball/schedule",
    //   element: (
    //     <>
    //       <Navbar />
    //       <Schedule />
    //     </>
    //   ),
    // },
    // {
    //   path: "/Efootball/pointtable",
    //   element: (
    //     <>
    //       <Navbar />
    //       <PointTable />
    //     </>
    //   ),
    // },
    // {
    //   path: "/Efootball/report",
    //   element: (
    //     <>
    //       <Navbar />
    //       <Report />
    //     </>
    //   ),
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
