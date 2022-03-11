import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Item from './components/Item';

function App() {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {id: 1, name: "Product A"}, // item
    {id: 2, name: "Product B"}, // item
    {id: 3, name: "Product C"} // item
  ])
  const removeItem = (id) => {
    const newsProducts = products.filter(item => item.id !== id);
    setProducts(newsProducts);
  }
  return (
    <div className="App">
        <p>count:{count} <button onClick={()=>setCount(count+1)}>click</button></p>
        {products.map((item)=><div>{item.name} <button onClick={()=> removeItem(item.id)}>remove</button></div>)}
        <ShowInfo name="Dat" age={29}/>
    </div>
  )
  
}
export default App