import React from 'react'
import { ProductType } from '../types/product'

type ManagerProduct = {
  data: ProductType[]
}

const ManagerProduct = (props: ManagerProduct) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data && props.data.map(item => {
          return <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              {/* <button onClick={() => removeItem(item.id)}>Remove</button> */}
            </td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default ManagerProduct