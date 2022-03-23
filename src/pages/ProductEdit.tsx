import React from 'react'
import { useForm ,SubmitHandler } from 'react-hook-form';
import { ProductType } from '../types/product';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { read } from '../api/product';

type ProductEdit = {
    onUpdate: (product: ProductType) => void
}

type formInput ={
    name: string,
    price: number
}

const ProductEdit = (props: ProductEdit) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: {errors}, reset} = useForm<formInput>();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async ()=>{
            const { data } = await read(id)
            reset(data);
        }
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<formInput> = data =>{
        props.onUpdate(data);
        navigate('/admin/product')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Tên sản phẩm' {...register('name')}/>
        <input type="price" placeholder='Giá sản phẩm' {...register('price')}/>
        <button>Update</button>
    </form>
  )
}

export default ProductEdit