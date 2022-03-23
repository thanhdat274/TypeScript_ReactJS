import { useState, useEffect } from 'react';
import logo from './logo.svg'
import './App.css'
import { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import "bootstrap/dist/css/bootstrap.min.css"
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';


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

  const onHandleAdd = async (products: ProductType) => {
    const { data } = await add(products);
    setProduct([...product, data])
  }

  const onHandleUpdate = async (products: ProductType) =>{
    const {data} = await update(products)
  }

  return (
    <div className='App'>
      <main>
        <Routes>

          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<Product />} />
          </Route>

          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="product">
              <Route index element={<ManagerProduct data={product} onRemove={removeItem} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
            </Route>
          </Route>

        </Routes>
      </main>
    </div>
  )
}

export default App;