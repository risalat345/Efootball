import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Steam from './components/Steam'
import Profile from './components/Profile'
import GroupA from './components/GroupA'
import GroupB from './components/GroupB'
import GroupC from './components/GroupC'
import GroupD from './components/GroupD'
import GroupE from './components/GroupE'
import GroupF from './components/GroupF'
import GroupG from './components/GroupG'
import GroupH from './components/GroupH'
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
    {
      path: "/groupc",
      element: <>
        <GroupC/>
      </>
    },
    {
      path: "/groupd",
      element: <>
        <GroupD/>
      </>
    },
    {
      path: "/groupe",
      element: <>
        <GroupE/>
      </>
    },
    {
      path: "/groupf",
      element: <>
        <GroupF/>
      </>
    },
    {
      path: "/groupg",
      element: <>
        <GroupG/>
      </>
    },
    {
      path: "/grouph",
      element: <>
        <GroupH/>
      </>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App