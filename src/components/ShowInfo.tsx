import React from 'react';
import type { ProductType } from '../types/product';

type ShowInfoProps  = {
  info: ProductType
}

const ShowInfo = (props: ShowInfoProps) => {
  return (
    <div>
     <h2> Tên: { props.info.name}</h2>
     <h2> Tuổi: { props.info.age}</h2>
     
    </div>
  )
}

export default ShowInfo;