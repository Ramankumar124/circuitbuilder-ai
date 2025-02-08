import { Button, TextField, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userSignup } from "../../apiService/api";
import { useAppDispatch } from "../../redux/hooks/store";
import { setToken } from "../../redux/features/authSlice";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface authRes {
  token: string;
  user: null;
  message: null;
}

// Validation Schema using Yup
const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Register() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const response = (await userSignup(data)) as { data: authRes };
      if (response?.data?.token) {
        dispatch(setToken(response?.data));
        toast.success(`${response?.data?.message}`);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data?.message}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <Box className="flex min-h-screen w-full bg-white text-black overflow-hidden">
      {/* Left Side - Register Form */}
      <Box className="flex flex-col justify-center items-center p-10 gap-3 w-full md:w-1/2">
        <Typography
          variant="h3"
          className="font-bold mb-6 text-black text-center"
        >
          Welcome to <span className="text-blue-500">CircuitBuilder</span>
          <span className="text-green-400"> AI</span>
        </Typography>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name Field */}
          <TextField
            {...register("firstName")}
            variant="outlined"
            placeholder="First Name"
            className="w-full mb-2 bg-gray-200 text-black rounded-lg"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />

          {/* Last Name Field */}
          <TextField
            {...register("lastName")}
            variant="outlined"
            placeholder="Last Name"
            className="w-full mb-2 bg-gray-200 text-black rounded-lg"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />

          {/* Email Field */}
          <TextField
            {...register("email")}
            variant="outlined"
            placeholder="Email"
            className="w-full mb-2 bg-gray-200 text-black rounded-lg"
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Password Field */}
          <TextField
            {...register("password")}
            type="password"
            variant="outlined"
            placeholder="Password"
            className="w-full mb-2 bg-gray-200 text-black rounded-lg"
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
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>

        <Typography className="text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer">Login</span>
        </Typography>
      </Box>

      {/* Right Side - Video Section */}
      <Box className="hidden md:flex justify-center items-center bg-gray-900 p-10 relative w-full md:w-1/2">
        <Box className="text-center">
          <Typography variant="h4" className="font-bold">
            Idea to <span className="text-blue-400">Slideshow</span> video
          </Typography>
          <Typography className="text-gray-400 mt-2">
            With Invideo AI, you can turn any content or idea into video,
            instantly 🚀
          </Typography>
          <Box className="relative mt-6">
            <img
              src="/astronaut.jpg" // Replace with actual image source
              alt="Astronaut"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </Box>
          <Button
            variant="contained"
            className="mt-4 bg-purple-500 hover:bg-purple-600 text-lg"
          >
            Generate
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
