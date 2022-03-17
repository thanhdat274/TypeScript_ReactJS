import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div>
            <div>
                <header>
                    <ul>
                        <li><NavLink to="/admin">Admin Page</NavLink></li>
                        <li><NavLink to="/admin/product">Product</NavLink></li>
                    </ul>
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        </div>
    )
}

export default AdminLayout