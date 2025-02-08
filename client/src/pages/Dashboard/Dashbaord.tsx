import { useCallback, useRef, useState } from "react";
import {  FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from '@mui/material/Button';
import FlowChart from "../../flowchart";
import {toPng,toSvg,toJpeg} from "html-to-image"
import { useAppDispatch } from "../../redux/hooks/store";
import { setFlowRef } from "../../redux/features/flowRefSlice";
import * as htmlToImage from 'html-to-image'
import jsPDF from "jspdf"
const initialNodes = [
  { id: "Battery1", type: "battery", data: { label: "Battery (9V)" } },
  { id: "Resistor1", type: "resistor", data: { label: "Resistor (1kΩ)" } },
  { id: "Resistor2", type: "resistor", data: { label: "Resistor (470Ω)" } },
  { id: "Transistor1", type: "transistor", data: { label: "NPN Transistor" } },
  { id: "LED1", type: "led", data: { label: "LED (Red)" } },
  { id: "LED2", type: "led", data: { label: "LED (Green)" } },
  { id: "Buzzer1", type: "buzzer", data: { label: "Buzzer (5V)" } },
  { id: "Capacitor1", type: "capacitor", data: { label: "Capacitor (10µF)" } }
  
  
  
];

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
  const dropdownData = getDropdownData(initialNodes);
  const [selectedValues, setSelectedValues] = useState({});

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
//   const [option, setOption] = useState("");
//   const dispatch = useAppDispatch();
// const [exportMethod, setExportMethod] = useState("");



// const flowRef = useRef(null);
//   const reactFlowInstance = useRef(null);
//   const onInit = (instance) => {
//     reactFlowInstance.current = instance;
//   };


//   const downloadImage = useCallback(async (format) => {
//     if (!flowRef.current) return;
  
//     reactFlowInstance.current?.fitView();
    
//     const options = {
//       quality: 0.7,
//       pixelRatio: 1,
//       backgroundColor: '#ffffff',
//       filter: (node) => !node?.classList?.contains('react-flow__controls'),
//     };
  
//     try {
//       let dataUrl;
      
//       // For PDF, we'll first capture as PNG
//       if (format === 'pdf') {
//         dataUrl = await toPng(flowRef.current, options);
//       } else {
//         switch (format) {
//           case 'png':
//             dataUrl = await toPng(flowRef.current, options);
//             break;
//           case 'jpeg':
//             dataUrl = await toJpeg(flowRef.current, options);
//             break;
//           case 'svg':
//             dataUrl = await toSvg(flowRef.current, options);
//             break;
//           default:
//             return;
//         }
//       }
  
//       if (format === 'pdf') {
//         // PDF Generation
//         const pdf = new jsPDF({
//           orientation: 'landscape', // or 'portrait' based on your needs
//           unit: 'mm',
//           format: 'a4'
//         });
  
//         const imgProps = pdf.getImageProperties(dataUrl);
//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
//         pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
//         pdf.save('diagram.pdf');
//       } else {
//         // Existing image download logic
//         const link = document.createElement('a');
//         link.download = `diagram.${format}`;
//         link.href = dataUrl;
//         link.click();
//       }
//     } catch (error) {
//       console.error('Error exporting:', error);
//     }
//   }, []);



 

//   const handleExportFileSave = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setExportMethod(event.target.value as string);
//   };
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
