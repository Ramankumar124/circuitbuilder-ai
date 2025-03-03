import { useState } from "react";
import { createCiruit } from "../../apiService/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useAppDispatch } from "../../redux/hooks/store";
import { setCircuit } from "../../redux/features/circuitSlice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../Spinner";

interface CircuitResponse {
  message: string;
  data: {
    circuit_name: string;
    nodes: any[];
    edges: any[];
    explanation: string;
    suggestions: string[];
  };
}

export default function OLdpromptpage() {
  const [prompt, setPrompt] = useState("");
  const [isloading, setisloading] = useState<boolean>(false)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addToPrompt = (event: any) => {
    setPrompt(event.currentTarget.textContent);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleApi = async () => {
    if (!prompt.trim()) {
      toast.error("Prompt cannot be empty!");
      return;
    }
  
    try {
      setisloading(true)
      const payload = { prompt };
  
      const response = await createCiruit(payload) as { data: CircuitResponse };
  
      let rawData = response?.data?.data;
    
    
      // Ensure rawData is a string before calling replace()
      if (typeof rawData !== "string") {
        console.error("API returned unexpected format:", rawData);
        toast.error("Invalid API response format");
        return;
      }
  
      // **Fix Regex to Remove Markdown Artifacts**
      const cleanedResponse = rawData.replace(/```json|```/g, "").trim();
  
      // **Parse the cleaned JSON string**
      const parsedData = JSON.parse(cleanedResponse);
  
      if (parsedData) {
        dispatch(
          setCircuit({
            prompt: prompt,
            node: parsedData?.nodes || null,
            edge: parsedData?.edges || null,
            explanation: parsedData.explanation || null,
            suggestions: parsedData.suggestions || null,
            circuitName: parsedData.circuit_name || "", // Extract circuit name
          })
        );
        navigate("/dashboard")
        } else {
        toast.error("Failed to parse circuit data");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "API error occurred");
      } else {
        toast.error("An unexpected error occurred");
      }
    }finally {
      setisloading(false)
    }
  };
  
  

  return (
  <>
  {isloading && <Spinner />}
   <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-[#1e1e1e]">
        <span className="font-bold text-white">My Projects</span>
      </div>

      {/* Grid Section */}
      <div className="gap-2 p-5 ml-138 items-center mt-30">
        <div className="grid grid-cols-2 md:grid-cols-3 w-300 gap-5">
          {["Create a circuit with 10 LEDs and a battery", "create a circuit in which a buzzer is connected with battery", "Basic motor driver", "Light sensor with buzzer","create a circuit consit of inductor ,cpacitor and batetry"].map(
            (text, index) => (
              <div
                key={index}
                onClick={addToPrompt}
                className="bg-[#007bff] text-white p-2 rounded-md cursor-pointer hover:bg-[#0056b3]"
              >
                {text}
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-6 pb-3 mt-20  w-200 mx-auto bg-[#2e2e2e] rounded-md">
        <textarea
          value={prompt}
          onChange={handleChange}
          placeholder="Enter your circuit prompt..."
          className="w-full p-2 bg-gray-700 text-white border border-gray-500 rounded-md"
        ></textarea>
        <div className="flex justify-between mt-4">
          <button
            className="h-10 w-24 bg-white text-black rounded-md cursor-pointer"
            onClick={() => handleApi()}
            disabled = {isloading}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  </>
   
  );
}
