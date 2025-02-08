
import Avatar from '@mui/material/Avatar';
export default function PromptPage() {


  return (
    <div className={ "bg-black text-white min-h-screen"}>
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-[#2e2e2e] dark:bg-gray-800">
        <span className="font-bold text-white">My Projects</span>
        <button 
          className="w-6 h-6 rounded-full bg-black dark:bg-white"  />
                      <Avatar sx={{ width: 32, height: 32 }}>D</Avatar>
      </div>
      
      {/* Grid Section */}
      <div className=" gap-2 p-5 ml-0 mt-46">
     <div className="flex ml-2 gap-5">
  <div className="ml-2 bg-[#A3F7BF] text-[#1e1e1e] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
  <div className="ml-2 bg-[#A3F7BF] text-[#1e1e1e] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
  <div className="ml-2 bg-[#A3F7BF] text-[#1e1e1e] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
  <div className="ml-2 bg-[#A3F7BF] text-[#1e1e1e] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
     </div>
     <div className="flex ml-30 mt-9 gap-5 text-center items-center">
  <div className="ml-2 bg-[#A3F7BF] text-[#1e1e1e] dark:bg-gray-600 h-15  rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
  <div className="ml-2 bg-[#A3F7BF] text-[#1e1e1e] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
  <div className="ml-2 bg-[#A3F7BF] text-[#1e1e1e] dark:bg-gray-600 h-15 rounded-md p-2">Create a circuit which consit of 10 led  and a battery</div>
     </div>
  
      </div>

      {/* Footer Section */}
      <div className="p-6 pb-3 ml-20 mt-4 w-350 text-center bg-[#2e2e2e] dark:bg-gray-900  justify-between items-center rounded-md mx-8">
  <textarea name="" id="" className="w-325 border-none border-0 h-10"></textarea>
         <div className="flex justify-between mt-4  ">
      
         <button className="h-9 text-7px ml-5   w-24 bg-white dark:bg-gray-600 rounded-md text-black">Enhance </button>
         <button className="h-9 mr-5  w-24 bg-white dark:bg-gray-600 rounded-md text-black">Genrate</button>
         </div>
     
      </div>
    </div>
  );
}

