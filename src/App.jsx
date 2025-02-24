import React, { Children } from 'react'
import Wazeer from './Componants/Wazeer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error_Path from './Componants/Error_Path'
import Home from './Componants/Home_Component/Home'
import About from './Componants/About_Component/About'
import Skills from './Componants/Skills_component/Skills'
import Experiance from './Componants/Experiance_Component/Experiance'
import Work from './Componants/Work_Component/Work'



const App = () => {
  let Routting=createBrowserRouter([
 {
  path:'/',
  element:<Wazeer/>,
  errorElement:<Error_Path/>,
  children:[
    {index:true,element:<Home/>},
   {path:'Home',element:<Home/>},
   {path:'About',element:<About/>},
   {path:'Skills',element:<Skills/>},
   {path:'Experiance',element:<Experiance/>},
   {path:'work',element:<Work/>}
  ]

 }




  ]);
  
  return (
    <>
    <RouterProvider router={Routting}></RouterProvider>
    
    
    </>




  )
}

export default App