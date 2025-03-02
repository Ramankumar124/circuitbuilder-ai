import React, { useEffect, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useAppSelector } from "./redux/hooks/store";


import { useCircuitContext } from "./context/circuitContext";
// Define custom node types
import { nodeTypes } from "./properties/nodeTypes";

const FlowChart: React.FC = () => {
 const  {circuitData,setCircuitData,flowRef}=useCircuitContext()
  const node = useAppSelector((state) => state?.circuit?.node);
  const edge = useAppSelector((state) => state?.circuit?.edge);

  useEffect(() => {
    setCircuitData({nodes:node,edges:edge})
    console.log("circuitData",circuitData);
  }, [edge,node])
  

  const [nodes,, onNodesChange] = useNodesState(node);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edge);

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
    
    </div>
  );
};

export default FlowChart;
