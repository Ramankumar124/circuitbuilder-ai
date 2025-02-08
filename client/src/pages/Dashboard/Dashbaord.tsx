import FlowChart from "../../flowchart";

const Dashbaord = () => {
    return (
      <div className="w-full h-screen flex flex-grow flex-col overflow-hidden">
        <nav className="text-white bg-gray-800 p-2">This is my Navbar</nav>
        <div className="flex flex-grow h-[90%]">
          <div id="left" className="w-[80%] h-full flex items-start justify-center m-0">
            <FlowChart />
          </div>
          <div id="right" className="bg-red-600 w-[20%] h-full">
            This is the sidebar
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashbaord;
  