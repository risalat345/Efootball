import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Steam from './components/Steam'
import Profile from './components/Profile'
import GroupA from './components/GroupA'
import GroupB from './components/GroupB'
function App() {
  const router = createBrowserRouter([
    {
      path: "/Efootball",
      element: <>
        {/* <Navbar />
        <Login /> */}
        {/* <Tournament/> */}
        <Steam/>
      </>
    },
    {
      path: "/profile",
      element: <>
        {/* <Navbar />
        <Login /> */}
        {/* <Tournament/> */}
        <Profile/>
      </>
    },
    {
      path: "/groupa",
      element: <>
        {/* <Navbar /> */}
        <GroupA />
      </>
    },
    {
      path: "/groupb",
      element: <>
        <GroupB/>
      </>
    },
    // {
    //   path: "/home",
    //   element: <>
    //     <Navbar />
    //     <Home />
    //   </>
    // },
    // {
    //   path: "/schedule",
    //   element: <>
    //     <Navbar />
    //     <Schedule />
    //   </>
    // },
    // {
    //   path:"/pointtable",
    //   element:<>
    // <Navbar /><PointTable/>
    // </>
    // },
    // {
    //   path:"/report",
    //   element:<>
    // <Navbar /><Report/>
    // </>
    // },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App