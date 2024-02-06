import Sidebar from './components/sidebar/Sidebar'
import './App.css';
import {Routes,Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login';
// import Req from './components/warehouse/Req'
import Charts  from './components/graph/BarGraph/Charts';
import Req from './components/req/Req'
import Warhouse from './components/warehouse/Warhouse';
import Client from './components/client/Client';
import SidebarClient from './components/client/SidebarClient'
import Trial from './components/warehouse/Trial';
import Signup from './components/login/Signup';


function App() {
  const router=createBrowserRouter([

    {
      path:"/",
      element:<Login/>,
    },

    {
      path:"/Dashboard",
      element:<Dashboard/>,
    },

    {
      path:"/Order",
      element:<Req/>,
    },

    {
      path:"/Warehouse",
      element:<Trial/>,
    },

    {
      path:"/Sidebar",
      element:<Sidebar/>,
    },

    {
      path:"/Cli",
      element:<Client/>
    },

    {
      path:"/Signup",
      element:<Signup/>
    }


  ])
  return (
    <><RouterProvider router={router} /><>
      {/* <Routes>
       <Route path='/Sidebar'element={<Sidebar/>}/>
       <Route path='Req'element={<Req/>}/>
       <Route path='/'element={<Dashboard/>}/>
       <Route path='Login'element={<Login/>}>
       
       <Route path='Graph'element={<Charts/>}/>
       </Route>
 </Routes> */}


    </></>
  );
}

export default App;
