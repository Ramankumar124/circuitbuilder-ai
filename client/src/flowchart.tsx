// components/Electric/FlowChart.tsx
import React, { useEffect, useCallback, useState } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ResistorNode from "./components/Electric/ResisterNode";
import LEDNode from "./components/Electric/LEDNode";
import Capacitor from "./components/Electric/capacitor";
import Buzzer from "./components/Electric/Buzzer";
import Transistor from './components/Electric/BJTTransistor';
import Batery from "./components/Electric/Battery";
import Diode from "./components/Electric/Diode";

// Define custom node types
const nodeTypes = {
  battery: Batery,
  resistor: ResistorNode,
  led: LEDNode,
  capacitor: Capacitor,
  Buzzer: Buzzer,
  transistor: Transistor,
  Diode: Diode
  

};

const FlowChart: React.FC = () => {



  const initialNodes = [
    {
      id: "Battery1",
      type: "battery",
      data: { label: "Battery (9V)" },
      position: { x: 100, y: 200 }
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
        fifthBand: "gold"
      },
      position: { x: 250, y: 200 }
    },
    {
      id: "Transistor1",
      type: "transistor",
      data: { first: "collector", second: "base", third: "emitter" },
      position: { x: 400, y: 200 }
    },
    {
      id: "LED1",
      type: "led",
      data: { id: "LED1", label: "LED (2V)", value: "2V", color: "red" },
      position: { x: 550, y: 100 }
    },
    {
      id: "LED2",
      type: "led",
      data: { id: "LED2", label: "LED (2V)", value: "2V", color: "green" },
      position: { x: 650, y: 100 }
    },
    {
      id: "Buzzer1",
      type: "Buzzer",
      data: { label: "Buzzer (5V)" },
      position: { x: 750, y: 200 }
    },
    {
      id: "Capacitor1",
      type: "capacitor",
      data: { label: "Capacitor (10µF)" },
      position: { x: 550, y: 250 }
    }
  ];

  const initialEdges = [
    { id: "edge-1", source: "Battery1", sourceHandle: "positive", target: "Resistor1", targetHandle: "negative", type: "step",label:"battery to resistor1"  },
    { id: "edge-2", source: "Resistor1", sourceHandle: "positive", target: "Transistor1", targetHandle: "base", type: "step" },
    { id: "edge-3", source: "Battery1", sourceHandle: "positive", target: "LED1", targetHandle: "negative", type: "step" },
    { id: "edge-4", source: "LED1", sourceHandle: "positive", target: "LED2", targetHandle: "negative", type: "step" },
    { id: "edge-5", source: "LED2", sourceHandle: "positive", target: "Buzzer1", targetHandle: "negative", type: "step" },
    { id: "edge-6", source: "Buzzer1", sourceHandle: "positive", target: "Transistor1", targetHandle: "collector", type: "step" },
    { id: "edge-7", source: "Transistor1", sourceHandle: "emitter", target: "Capacitor1", targetHandle: "negative", type: "step" },
    { id: "edge-8", source: "Capacitor1", sourceHandle: "positive", target: "Battery1", targetHandle: "negative", type: "step" }
  ];
  


  
  // Correct usage of hooks
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Function to handle connections
  const onConnect = useCallback(
    (params:any) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    []
  );

  return (
    <div className="w-full h-full  relative left-0 bg-blue-600">
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
    </div>
  );
};

export default FlowChart;
