import { Link, Outlet } from "react-router-dom"

export const Layout = () => {


    return <>
        <nav className="header">
            <Link to=''>Home</Link>
            <Link to='add'>add</Link>
        </nav>
        <div className="content">
            <Outlet />
        </div>
    </>
}