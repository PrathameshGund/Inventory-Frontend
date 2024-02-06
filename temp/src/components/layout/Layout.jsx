import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"
import Searchbar from '../searchbar/Searchbar' 

export default function Layout() {
    return (
        <>
            <Sidebar/>
            <main>                
                <Outlet />
            </main>
            <Searchbar />
        </>
    )
}