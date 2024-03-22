import { Card, Message, Button, Input, Label } from "../../UI";
import { useAuth } from "../../../context/authContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../schemas/auth";
import logo from '../../../assets/Img/Logo.png';
import { Link, useNavigate } from "react-router-dom";


function FormRegister (){
    const { signup, errors: registerErrors } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });


  const onSubmit = async (value) => {
    await signup(value);
  };

  
    return(
        <>
        <div className="h-[calc(100vh-100px)] flex items-center justify-center text-white">
        <Card >
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}

         <div className="flex items-center justify-center">
              <img className="h-16 rounded-lg" src={logo} alt="Your Company"/>
         </div>

        <h1 className="text-3xl font-bold text-white  ">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}

          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            placeholder="email@gmail.com"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}
          <div className="text-white">
         <Button  >Register</Button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-50">
                Ya tienes una cuenta?{' '}
                <Link to='/' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Iniciar Sesion!!
                </Link>
          </p>
          
        </form>
       
      </Card>
        </div>
      
        </>
    )
}

export default FormRegister