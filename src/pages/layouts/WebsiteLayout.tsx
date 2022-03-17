import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <header>
                <ul>
                    <li><NavLink to="/">Home Page</NavLink></li>
                    <li><NavLink to="/product">Product Page</NavLink></li>
                    <li><NavLink to="/admin/dashboard">Admin</NavLink></li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default WebsiteLayout