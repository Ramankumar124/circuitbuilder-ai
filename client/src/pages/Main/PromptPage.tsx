
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
export default function PromptPage() {
  const [Propmt,setPrompt]=useState("")

const addTOPrompt=(event)=>{
 
  setPrompt(event.currentTarget.textContent)
}
const handleChange=(e)=>{
setPrompt(e.target.value)
console.log(e.target.value)
}
  return (
    <div className={ "bg-black text-white min-h-screen"}>
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-[#1e1e1e] dark:bg-gray-800">
        <span className="font-bold text-white">My Projects</span>
    
        <div className="space-x-4">
          <button className="bg-orange-500 text-black px-4 py-2 rounded-md">Sign up</button>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-md">Sign in</button>
        </div>
      </div>
      
      {/* Grid Section */}
      <div className=" gap-2 p-5 ml-0 mt-40" >     <div className="flex ml-2 gap-5">
  <div  onClick={addTOPrompt} className="ml-2 bg-[#007bff]   text-[#fff] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consist of 10 led  and a battery</div>
  <div onClick={addTOPrompt} className="ml-2 bg-[#007bff]  text-[#fff] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consist of 10 led  and a battery</div>
  <div onClick={addTOPrompt} className="ml-2 bg-[#007bff]  text-[#fff] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consist of 10 led  and a battery</div>
  <div onClick={addTOPrompt} className="ml-2 bg-[#007bff] text-[#fff] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consist of 10 led  and a battery</div>
     </div>
     <div className="flex ml-30 mt-9 gap-5 text-center items-center">
  <div onClick={addTOPrompt} className="ml-2 bg-[#007bff] text-[#fff] dark:bg-gray-600 h-15  rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
  <div onClick={addTOPrompt} className="ml-2 bg-[#007bff] text-[#fff] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
  <div onClick={addTOPrompt} className="ml-2 bg-[#007bff]  text-[#fff] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
     </div>
  
      </div>

      {/* Footer Section */}
      <div className="p-6 pb-3 ml-20 mt-4 w-350 text-center bg-[#2e2e2e] dark:bg-gray-900  justify-between items-center rounded-md mx-8">
  <textarea name=""  value={Propmt} onChange={handleChange} id="" className="w-325 border-none border-0 h-10"></textarea>
         <div className="flex justify-between mt-4  ">
      
         <button className="h-9 text-7px ml-5   w-24 bg-white dark:bg-gray-600 rounded-md text-black">Enhance </button>
         <button className="h-9 mr-5  w-24 bg-white dark:bg-gray-600 rounded-md text-black">Genrate</button>
         </div>
     
      </div>
    </div>
  );
}

