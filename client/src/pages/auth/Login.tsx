import { Button, TextField, Box, Typography } from "@mui/material";


export default function Login() {
  return (
    <Box className="flex h-screen w-screen bg-white text-white">
      {/* Left Side - Login Form */}
      <Box className="w-1/2 flex flex-col justify-center items-center p-10 gap-3">
        <Typography variant="h3" className="font-bold mb-6 text-black" >
          Welcome to <span className="text-blue-500">CicuitBuilder</span>
          <span className="text-green-400"> AI</span>
        </Typography>

        <TextField
          variant="outlined"  
          placeholder="username"
          className="w-full mb-2 g bg-gray-200 text-red-500 rounded-lg"
         
        />
        <TextField
          variant="outlined"  
          placeholder="Email"
          className="w-full mb-2 bg-gray-200 text-red-500 rounded-lg"
         
        />
            <TextField
          variant="outlined"  
          placeholder="Password"
          className="w-full mb-2 bg-gray-200 text-red-500 rounded-lg"
         
        />  
        <Button variant="contained" className="w-full bg-blue-500 hover:bg-blue-600 text-lg">
          Create account
        </Button>
        <Typography className="text-gray-400 mt-4">
          Have an account? <span className="text-blue-400 cursor-pointer">Login</span>
        </Typography>
      </Box>

      {/* Right Side - Video Section */}
      <Box className="w-1/2 flex justify-center items-center bg-gray-900 p-10 relative">
        <Box className="text-center">
          <Typography variant="h4" className="font-bold">
            Idea to <span className="text-blue-400">Slideshow</span> video
          </Typography>
          <Typography className="text-gray-400 mt-2">
            With invideo AI, you can turn any content or idea into video, instantly 🚀
          </Typography>
          <Box className="relative mt-6">
            <img
              src="/astronaut.jpg" // Replace with actual image source
              alt="Astronaut"
              className="rounded-lg shadow-lg"
            />
     
          </Box>
          <Button variant="contained" className="mt-4 bg-purple-500 hover:bg-purple-600 text-lg">
            Generate
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
