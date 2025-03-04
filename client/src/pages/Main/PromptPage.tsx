import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaMicrophone } from "react-icons/fa";
import { setCircuit } from "../../redux/features/circuitSlice";
import { createCiruit } from "../../apiService/api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/store";
import { Spinner } from "../../Spinner";
import { LiaHamburgerSolid } from "react-icons/lia";
import { enhancePrompt } from "../../apiService/api";
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
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

export default function PromptPage() {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = "en-US";

      rec.onresult = (event: SpeechRecognitionEvent) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        console.log(transcript);

        setPrompt(transcript);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      setRecognition(rec);
    } else {
      console.error("Speech Recognition API is not supported in this browser.");
    }
  }, []);

  const toggleListening = () => {
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  const [prompt, setPrompt] = useState("");
  const [isloading, setisloading] = useState<boolean>(false);
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
      setisloading(true);
      const payload = { prompt };

      const response = (await createCiruit(payload)) as {
        data: CircuitResponse;
      };

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
        navigate("/dashboard");
      } else {
        toast.error("Failed to parse circuit data");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "API error occurred");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setisloading(false);
    }
  };

  const handleEnhancePrompt = async () => {
    setisloading(true);
    try {
      const payload = {
        prompt,
      };
      const response = await enhancePrompt(payload) as {data: {data: string}};
      setPrompt(response?.data?.data);
    } catch (error) {
      toast.error(`${error}`, { duration: 5000 });
    } finally {
      setisloading(false)
    }
  };

  return (
    <div>
      {isloading && <Spinner />}
      <nav id="header" className="fixed w-full z-50 bg-[#191919]">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center ">
          <div className="flex items-center text-bold text-xl text-[#899598] -ml-10">
            <a href="/myprojects" className="text-bold">My Projects  </a>
            {/* <RxHamburgerMenu /> */}
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-[#191919] text-white flex flex-col items-center justify-center p-4  overflow-hidden">
        {/* Buttons */}
        <div className="flex items-center">
          <a className="text-white font-bold text-6xl">
            <span className="text-[#6E56CF]">Circuit</span>Builder
            <span className="text-[#6E56CF]">AI</span>
          </a>
        </div>
        <div className="gap-2 p-5 justify-center items-center mt-30">
          <div className="grid grid-cols-2 md:grid-cols-3 w-300 gap-5">
            {[
              "Create a circuit with 10 LEDs and a battery",
              "create a circuit in which a buzzer is connected with battery",
              "Basic motor driver",
              "Light sensor with buzzer",
              "create a circuit consit of inductor ,cpacitor and batetry",
              "some project with some output",
            ].map((text, index) => (
              <div
                key={index}
                onClick={addToPrompt}
                className="bg-[#262626] text-white p-2 rounded-lg cursor-pointer hover:bg-[#252526]"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Input Box */}
        <div className="p-6 pb-3 mt-16 w-300 mx-auto bg-[#242424] rounded-xl">
          <div className="flex items-center">
            <textarea
              value={prompt}
              onChange={handleChange}
              placeholder="Enter your circuit prompt..."
              className="w-full p-2 bg-[#242424] text-white border-none focus:outline-none rounded-md resize-none overflow-hidden scrollbar-hide"
            ></textarea>

            {/* Microphone Button */}
            <button
              onClick={toggleListening}
              className={`ml-3 p-3 text-white rounded-full ${
                isListening ? "bg-red-500" : "bg-blue-500"
              }`}
              title={isListening ? "Stop Listening" : "Start Listening"}
            >
              <FaMicrophone className="text-xl" />
            </button>
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="h-10 w-auto px-2 bg-white text-black text-sm rounded-md cursor-pointer"
              onClick={() => handleEnhancePrompt()}
            >
              Enhance Prompt
            </button>
            <button
              className="h-10 w-24 bg-white text-black rounded-md cursor-pointer"
              onClick={() => handleApi()}
              disabled={isloading}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
