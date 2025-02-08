import React, { useEffect, useCallback, useState, useRef } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks/store";

import ResistorNode from "./components/Electric/ResisterNode";
import LEDNode from "./components/Electric/LEDNode";
import Capacitor from "./components/Electric/capacitor";
import Buzzer from "./components/Electric/Buzzer";
import Transistor from './components/Electric/BJTTransistor';
import Batery from "./components/Electric/Battery";
import Diode from "./components/Electric/Diode";
import { setFlowRef } from "./redux/features/flowRefSlice";
import { toPng, toSvg, toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"; // Fixed import

// Define custom node types
const nodeTypes = {
  battery: Batery,
  resistor: ResistorNode,
  led: LEDNode,
  capacitor: Capacitor,
  Buzzer: Buzzer,
  transistor: Transistor,
  Diode: Diode,
};

const FlowChart: React.FC = () => {
  const flowRef = useRef(null);
  const reactFlowInstance = useRef(null);
  const [exportMethod, setExportMethod] = useState(""); // Fixed missing state

  const onInit = (instance) => {
    reactFlowInstance.current = instance;
  };

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

  const initialNodes = [
    {
      id: "Battery1",
      type: "battery",
      data: { label: "Battery (9V)" },
      position: { x: 100, y: 200 },
    },
    {
      id: "Resistor1",
      type: "resistor",
      data: {
        label: "Resistor (1kΩ)",
        firstBand: "brown",
        secondBand: "black",
        thirdBand: "black",
        fourthBand: "brown",
        fifthBand: "gold",
      },
      position: { x: 250, y: 200 },
    },
    {
      id: "Transistor1",
      type: "transistor",
      data: { first: "collector", second: "base", third: "emitter" },
      position: { x: 400, y: 200 },
    },
    {
      id: "LED1",
      type: "led",
      data: { id: "LED1", label: "LED (2V)", value: "2V", color: "red" },
      position: { x: 550, y: 100 },
    },
    {
      id: "LED2",
      type: "led",
      data: { id: "LED2", label: "LED (2V)", value: "2V", color: "green" },
      position: { x: 650, y: 100 },
    },
    {
      id: "Buzzer1",
      type: "Buzzer",
      data: { label: "Buzzer (5V)" },
      position: { x: 750, y: 200 },
    },
    {
      id: "Capacitor1",
      type: "capacitor",
      data: { label: "Capacitor (10µF)" },
      position: { x: 550, y: 250 },
    },
  ];

  const initialEdges = [
    {
      id: "edge-1",
      source: "Battery1",
      sourceHandle: "positive",
      target: "Resistor1",
      targetHandle: "negative",
      type: "step",
    },
    {
      id: "edge-2",
      source: "Resistor1",
      sourceHandle: "positive",
      target: "Transistor1",
      targetHandle: "base",
      type: "step",
    },
    {
      id: "edge-3",
      source: "Battery1",
      sourceHandle: "positive",
      target: "LED1",
      targetHandle: "negative",
      type: "step",
    },
    {
      id: "edge-4",
      source: "LED1",
      sourceHandle: "positive",
      target: "LED2",
      targetHandle: "negative",
      type: "step",
    },
    {
      id: "edge-5",
      source: "LED2",
      sourceHandle: "positive",
      target: "Buzzer1",
      targetHandle: "negative",
      type: "step",
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    []
  );

  return (
    <div ref={flowRef} className="w-full h-full relative left-0">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
      <div
        className="flex react-flow__controls react-flow-container"
        style={{ position: "fixed", top: '61%', right:30, zIndex: 1000 }}
      >
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
    </div>
  );
};

export default FlowChart;
