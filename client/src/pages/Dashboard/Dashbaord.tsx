import { useCallback, useEffect, useRef, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, Card, CardContent, Typography, Button } from "@mui/material";
import FlowChart from "../../flowchart";
import { useCircuitContext } from "../../context/circuitContext";
import { useAppSelector } from "../../redux/hooks/store";
import { toJpeg, toPng, toSvg } from "html-to-image";
import jsPDF from "jspdf";

const getDropdownData = (nodes:object) => {
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
  const { circuitData } = useCircuitContext();
  
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
            {[...dropdownData[type]].map((label, index) => (
              <MenuItem key={index} value={label}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </div>
  );
};

const Dashboard = () => {
   const  {flowRef}=useCircuitContext()
    const reactFlowInstance = useRef(null);
  
  const prompt = useAppSelector((state) => state?.circuit?.prompt); // Get the prompt from Redux store
const alldata=  useAppSelector((state) => state?.circuit);
const [exportMethod, setExportMethod] = useState("");
  const downloadImage = useCallback(async (format) => {
    if (!flowRef.current) return;

    reactFlowInstance.current?.fitView();

    const options = {
      quality: 0.7,
      pixelRatio: 1,
      backgroundColor: "#ffffff",
      filter: (node) => !node?.classList?.contains("react-flow__controls"),
    };

    try {
      let dataUrl;

      // For PDF, capture as PNG first
      if (format === "pdf") {
        dataUrl = await toPng(flowRef.current, options);
      } else {
        switch (format) {
          case "png":
            dataUrl = await toPng(flowRef.current, options);
            break;
          case "jpeg":
            dataUrl = await toJpeg(flowRef.current, options);
            break;
          case "svg":
            dataUrl = await toSvg(flowRef.current, options);
            break;
          default:
            return;
        }
      }

      if (format === "pdf") {
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "mm",
          format: "a4",
        });

        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("diagram.pdf");
      } else {
        const link = document.createElement("a");
        link.download = `diagram.${format}`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error("Error exporting:", error);
    }
  }, []);

console.log("new circuit data",alldata);

  return (
    <div className="w-full h-screen flex flex-grow flex-col overflow-hidden">
      <nav className="text-white bg-gray-800 p-2">
        <div className="flex justify-between items-center p-4 bg-[#2e2e2e] dark:bg-gray-800">
          <span className="font-bold text-white">My Projects</span>
          <div className="flex items-center gap-3">
            <button className="rounded-2xl bg-white text-black py-2 px-4">Share</button>
          </div>
        </div>
      </nav>

      <div className="flex flex-grow h-[90%]">
        <div id="left" className="w-[80%] h-full flex items-start justify-center m-0">
          <FlowChart />
        </div>

        <div className="w-1 bg-black "></div>

        <div id="right" className="w-[20%] h-full p-4">
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="font-bold mb-2">Component Dropdowns</h3>
            <ComponentDropdowns />
          </div>

          <div className="flex justify-center mt-4 gap-4">
            <Button variant="contained" className="bg-blue-500 hover:bg-blue-600 text-lg">
              Save
            </Button>
                   <FormControl fullWidth style={{ width: "150px" }}>
                      <InputLabel id="dropdown-label">Export As</InputLabel>
                      <Select
                        labelId="dropdown-label"
                        value={exportMethod}
                        onChange={(event) => {
                          const format = event.target.value;
                          setExportMethod(format);
                          if (format) {
                            downloadImage(format);
                          }
                        }}
                      >
                        <MenuItem value="png">PNG</MenuItem>
                        <MenuItem value="jpeg">JPEG</MenuItem>
                        <MenuItem value="pdf">PDF</MenuItem>
                        <MenuItem value="svg">SVG</MenuItem>
                      </Select>
                    </FormControl>
          </div>

          {/* Card Component to Display Prompt */}
          <Card className="mt-4 p-4">
            <CardContent>
              <Typography variant="h6" className="font-bold">Prompt:</Typography>
              <Typography variant="body1" className="text-gray-700">{prompt || "No prompt available"}</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
