import { useState, useEffect } from 'react';
import logo from './logo.svg'
import './App.css'
import { ProductType } from './types/product';
import { list, remove } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';


function App() {
  const [product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProduct(data);
    }
    getProduct();
  }, [])
  const removeItem = async (id: number) => {
    const { data } = await remove(id);
    if (data) {
      setProduct(product.filter(item => item.id !== id))
    }
  }

  return (
    <div className='App'>
      {/* <table>
       <thead>
          <th>ID</th>
          <th>Name</th>
          <th></th>
       </thead>
       <tbody>
         {product.map(item =>{
           return <tr>
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>
               <button onClick={()=> removeItem(item.id)}>Remove</button>
             </td>
           </tr>
         })}
       </tbody>
     </table> */}

      {/* <header>
       <ul>
         <li><NavLink to="/">Home Page</NavLink></li>
         <li><NavLink to="/product">Product Page</NavLink></li>
         <li><NavLink to="/admin/dashboard">Admin</NavLink></li>
       </ul>
     </header> */}
      <main>
        <Routes>
          {/* <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="product" element={<h1>Product Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} /> */}

          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<Product />} />
          </Route>

          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='product' element={<ManagerProduct />} />
          </Route>

        </Routes>
      </main>
    </div>
  )
}

export default App;