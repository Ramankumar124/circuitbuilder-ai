import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to <span className="text-blue-500">invideo</span>
          <span className="text-green-400"> AI</span>
        </h1>
        <button className="flex items-center gap-2 w-full py-3 px-6 bg-gray-800 hover:bg-gray-700 rounded-lg text-lg mb-3">
          <FaGoogle /> Join with Google
        </button>
        <button className="flex items-center gap-2 w-full py-3 px-6 bg-gray-800 hover:bg-gray-700 rounded-lg text-lg mb-3">
          <FaApple /> Join with Apple
        </button>
        <div className="text-gray-400 my-4">or</div>
        <Input placeholder="Email" className="w-full mb-4 p-3 bg-gray-900 text-white rounded-lg" />
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-lg">Create account</Button>
        <p className="text-gray-400 mt-4">
          Have an account? <span className="text-blue-400 cursor-pointer">Login</span>
        </p>
      </div>

      {/* Right Side - Video Section */}
      <div className="w-1/2 flex justify-center items-center bg-gray-900 p-10 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Idea to <span className="text-blue-400">Slideshow</span> video
          </h2>
          <p className="text-gray-400 mt-2">
            With invideo AI, you can turn any content or idea into video, instantly 🚀
          </p>
          <div className="relative mt-6">
            <img
              src="/astronaut.jpg" // Replace with actual image source
              alt="Astronaut"
              className="rounded-lg shadow-lg"
            />
            <button className="absolute inset-0 flex justify-center items-center">
              <div className="bg-blue-500 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-10 h-10"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </button>
          </div>
          <Button className="mt-4 bg-purple-500 hover:bg-purple-600 text-lg">Generate</Button>
        </div>
      </div>
    </div>
  );
}
