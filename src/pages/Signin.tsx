import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/use';
import { authenticate } from "../utils/localStorage";

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signin = () => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const {data: user } = await signin(data);
        authenticate(user, () => navigate('/'))
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email', { required: true})}/>
            <input type="password" {...register('password')}/>
            <button>Đăng nhập</button>
        </form>
    </div>
  )
}

export default Signin