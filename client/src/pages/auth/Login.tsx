import { Button, TextField, Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../../redux/hooks/store';
import { userLogin } from '../../apiService/api';
import { setToken } from "../../redux/features/authSlice.js";
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spinner } from '../../Spinner';
import { Link } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

interface LoginRes {
  user: null;
  message: string;
  token: string;
}

// Validation Schema using Yup
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isloading, setisloading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setisloading(true)
    try {
      const response = await userLogin(data) as { data: LoginRes };
      if (response?.data?.token) {
        dispatch(setToken(response?.data));
        toast.success(`${response?.data?.message}`);
        navigate("/home")
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data?.message}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setisloading(false);
    }
  };

  useEffect(() => {
 
    const token =localStorage.getItem("token");
    
    if(token){
      navigate("/home")
    }
  
  }, [])
  
  return (
    <>
    {isloading && <Spinner />}
     <Box className="flex min-h-screen w-full bg-white text-black overflow-hidden">
      {/* Left Side - Login Form */}
      <Box className="flex flex-col justify-center items-center p-10 gap-3 w-full md:w-1/2">
        <Typography variant="h3" className="font-bold mb-6 text-black text-center">
          Welcome to <span className="text-blue-500">CircuitBuilder</span>
          <span className="text-green-400"> AI</span>
        </Typography>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <TextField
            {...register('email')}
            variant="outlined"
            placeholder="Email"
            className="w-full mb-3 bg-gray-200 text-black rounded-lg" // added mb-3 to add gap
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Password Field */}
          <TextField
            {...register('password')}
            type="password"
            variant="outlined"
            placeholder="Password"
            className="w-full mb-3 bg-gray-200 text-black rounded-lg" // added mb-3 to add gap
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            className="w-full bg-blue-500 hover:bg-blue-600 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <Typography className="text-gray-400 mt-4 text-center">
          Don't have an account? <span className="text-blue-400 cursor-pointer">Sign Up</span>
        </Typography>
      </Box>

      {/* Right Side - Video Section */}
      <Box className="hidden md:flex justify-center items-center bg-gray-900 p-10 relative w-full md:w-1/2">
        <Box className="text-center">
          <Typography variant="h4" className="font-bold">
            Idea to <span className="text-blue-400">Slideshow</span> video
          </Typography>
          <Typography className="text-gray-400 mt-2">
            With Invideo AI, you can turn any content or idea into video, instantly 🚀
          </Typography>
          <Box className="relative mt-6">
            <img
              src="/astronaut.jpg" // Replace with actual image source
              alt="Astronaut"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </Box>
          <Button variant="contained"  disabled={isloading} className="mt-4 bg-purple-500 hover:bg-purple-600 text-lg">
            Generate
          </Button>
        </Box>
      </Box>
    </Box>
    <Box className="flex min-h-screen w-full bg-white text-black overflow-hidden">
      {/* Left Side - Login Form */}
      <Box className="flex flex-col justify-center items-center p-10 gap-3 w-full md:w-1/2">
        <Typography variant="h3" className="font-bold mb-6 text-black text-center">
          Welcome to <span className="text-blue-500">CircuitBuilder</span>
          <span className="text-green-400"> AI</span>
        </Typography>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <TextField
            {...register('email')}
            variant="outlined"
            placeholder="Email"
            className="w-full mb-3 bg-gray-200 text-black rounded-lg" // added mb-3 to add gap
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Password Field */}
          <TextField
            {...register('password')}
            type="password"
            variant="outlined"
            placeholder="Password"
            className="w-full mb-3 bg-gray-200 text-black rounded-lg" // added mb-3 to add gap
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            className="w-full bg-blue-500 hover:bg-blue-600 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <Typography className="text-gray-400 mt-4 text-center">
  Don't have an account?{" "}
  <Link to="/signup" className="text-blue-400 cursor-pointer">
    Sign Up
  </Link>
</Typography>

      </Box>

      {/* Right Side - Video Section */}
      <Box className="hidden md:flex justify-center items-center bg-gray-900 p-10 relative w-full md:w-1/2">
        <Box className="text-center">
          <Typography variant="h4" className="font-bold">
            Idea to <span className="text-blue-400">Slideshow</span> video
          </Typography>
          <Typography className="text-gray-400 mt-2">
            With Invideo AI, you can turn any content or idea into video, instantly 🚀
          </Typography>
          <Box className="relative mt-6">
            <img
              src="/astronaut.jpg" // Replace with actual image source
              alt="Astronaut"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </Box>
          <Button variant="contained"  disabled={isloading} className="mt-4 bg-purple-500 hover:bg-purple-600 text-lg">
            Generate
          </Button>
        </Box>
      </Box>
    </Box>
    </>

  );
}
