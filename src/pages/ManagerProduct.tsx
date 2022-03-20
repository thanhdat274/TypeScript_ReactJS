import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from '../types/product'

type ManagerProduct = {
  data: ProductType[]
}

const ManagerProduct = (props: ManagerProduct) => {
  return (
    <div>
      <NavLink to="/admin/product/add">ADD</NavLink>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                {/* <button onClick={() => removeItem(item.id)}>Remove</button> */}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct