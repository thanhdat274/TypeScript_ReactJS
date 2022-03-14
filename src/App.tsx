import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios';
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';


function App() {
  // const [count, setCount] = useState<number>(0)

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(()=> {
    const getProducts = async () =>{
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const removeItem = async (id: number) => {
    const { data } = await remove(id);
    data && setProducts(products.filter(item => item.id !== data.id));
  }

  return (
    <div className="App">
       <table>
          <thead>
            <th>#</th>
            <th>Name</th>
            <th></th>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                      </td>
                    </tr>
            })}
          </tbody>
        </table>
    </div>
  )
}

export default App;