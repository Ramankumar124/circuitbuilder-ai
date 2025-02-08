
import Avatar from '@mui/material/Avatar';

function SavedProject() {
  return (
    <div>
       <div className="flex justify-between items-center p-4 bg-[#2e2e2e] dark:bg-gray-800">
        <span className="font-bold text-white">My Projects</span>
      
                      <Avatar sx={{ width: 32, height: 32 }}>D</Avatar>
      </div>
      <div className="bg-white m-auto h-340 w-250 border-2 ml-auto mt-10 rounded-2xl">
        <div className="border-b-2  p-4 ">
            <h1 className='text-center'>My Projects</h1>
        </div>
        <div className="flex ml-8 mt-8">
            <div className="flex m-3  flex-col ">
                <div className='bg-[#007bff] border-2 rounded-2xl w-50 h-30'>

                </div>
                <div className="flex mt-2">
                    <h2>Project 1</h2>

                
                </div> <div className="flex">
                <p>8feb2025</p>
                <p className='ml-20'>4.05pm</p>
                </div>
            
            </div>
            <div className="flex m-3 flex-col ">
                <div className='bg-[#A3F7BF] border-2 rounded-2xl w-50 h-30'>

                </div>
                <div className="flex mt-2">
                    <h2>Project 1</h2>

                
                </div> <div className="flex">
                <p>8feb2025</p>
                <p className='ml-20'>4.05pm</p>
                </div>
            
            </div>
            <div className="flex m-3 flex-col ">
                <div className='bg-[#A3F7BF] border-2 rounded-2xl w-50 h-30'>

                </div>
                <div className="flex mt-2">
                    <h2>Project 1</h2>

                
                </div> <div className="flex">
                <p>8feb2025</p>
                <p className='ml-20'>4.05pm</p>
                </div>
            
            </div>


        </div>

      </div>
    </div>
  )
}

export default SavedProject
