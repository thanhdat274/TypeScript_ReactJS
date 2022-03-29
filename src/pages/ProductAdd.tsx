import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from '../types/product';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FromValues = {
    name: string,
    price: number
};

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FromValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FromValues> = data => {
        props.onAdd(data);
        navigate('/admin/product')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name', {required: true, minLength: 5})} /> <br />
                {errors.name && errors.name.type === 'required' && <span>Bắt buộc</span>}
                {errors.name && errors.name.type === 'minLength' && <span>5 kí tự</span>}
                <input type="number" {...register('price', {required: true, minLength: 5})} /> <br />
                <button>ADD</button>
            </form>
        </div>
    )
}

export default ProductAdd