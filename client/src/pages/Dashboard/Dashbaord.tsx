import {  useEffect, useState } from "react";
import {  FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from '@mui/material/Button';
import FlowChart from "../../flowchart";
import { useCircuitContext } from "../../context/circuitContext";
import { useAppSelector } from "../../redux/hooks/store";




const getDropdownData = (nodes) => {
  const dropdownData = {};
  
  nodes.forEach((node) => {
    const { type, data } = node;
    if (!dropdownData[type]) {
      dropdownData[type] = new Set();
    }
    dropdownData[type].add(data.label);
  });
  
  return dropdownData;
};


const ComponentDropdowns = () => {
    const [selectedValues, setSelectedValues] = useState({});
    const [dropdownData, setDropdownData] = useState({}); 
    const {circuitData} =useCircuitContext();
    
    useEffect(() => {
        if (circuitData?.nodes) {
          setDropdownData(getDropdownData(circuitData.nodes));
        }
      }, [circuitData]);
  
  const handleChange = (type) => (event) => {
    setSelectedValues({ ...selectedValues, [type]: event.target.value });
  };

  return (
    <div>
      {Object.keys(dropdownData).map((type) => (
        <FormControl fullWidth key={type} style={{ marginBottom: "1rem" }}>
          <InputLabel>{type.charAt(0).toUpperCase() + type.slice(1)}</InputLabel>
          <Select value={selectedValues[type] || ""} onChange={handleChange(type)}>
            {[...dropdownData[type]].map((label) => (
              <MenuItem key={label} value={label}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </div>
  );
};

const Dashbaord = () => {
  const nodes = useAppSelector((state) => state?.circuit?.node)
  console.log("nodes",nodes)

  return (
    <div className="w-full h-screen flex flex-grow flex-col overflow-hidden">
      <nav className="text-white bg-gray-800 p-2">
        <div className="flex justify-between items-center p-4 bg-[#2e2e2e] dark:bg-gray-800">
          <span className="font-bold text-white">My Projects</span>
          <div className="flex items-center gap-3">
            <button className="rounded-2xl bg-white text-black py-2 px-4">Share</button>
            <button className="rounded-full bg-white text-black p-4">P</button>
          </div>
        </div>
      </nav>
      <div className="flex flex-grow h-[90%]">
        <div id="left" className="w-[80%] h-full flex items-start justify-center m-0">
          <FlowChart />
        </div>
        <div className="w-1 bg-black "></div>
        <div id="right" className="w-[20%] h-full">
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="font-bold mb-2">Component Dropdowns</h3>
            <ComponentDropdowns />
          </div>
        <div className="flex justify-center mt-4 gap-4 mr-48">
        <Button variant="contained" className=" bg-blue-500 hover:bg-blue-600 text-lg ">
            Save
            </Button>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
