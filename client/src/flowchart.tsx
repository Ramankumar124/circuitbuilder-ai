import React, { useEffect, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  ReactFlowProvider,

} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useAppSelector } from "./redux/hooks/store";


import { useCircuitContext } from "./context/circuitContext";
// Define custom node types
import { nodeTypes } from "./properties/nodeTypes";
import CustomControls from "./components/ui/reactFlowCustomControls";

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
    <div ref={flowRef} className="w-full h-full relative rounded-4xl left-0 bg-white">
      <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap  />
        {/* <CustomControls/> */}
        <Controls />
        <Background color="#2b2a2a" variant={BackgroundVariant.Dots} />

      </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowChart;
