import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/use';

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signup = () => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async(data) => {
        await signup(data);
        navigate("/signin");
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', { required: true, minLength: 5})}/>
            {errors.name && errors.name.type === "required" && <span>Required</span>}
            {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
            <input type="email" {...register('email', { required: true})}/>
            <input type="password" {...register('password')}/>
            <button>Đăng kí</button>
        </form>
    </div>
  )
}

export default Signup