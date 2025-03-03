import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";

interface TransistorNodeProps {
  first: "collector" | "base" | "emitter";
  second: "collector" | "base" | "emitter";
  third: "collector" | "base" | "emitter";
}



const TransistorNode: React.FC<NodeProps<TransistorNodeProps>> = ({ data }) => {
  return (
    <div className="relative ">
         <p style={{color:"black",fontSize:"12px",position:"relative",left:"120px",top:"90px"}}>{data.label}</p>
      {/* Transistor SVG */}
      {/* <div className="text-3xl text-bold">{data.first +data.second +data.third}</div> */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 792 792"
        style={{ width: "100%", height: "100%",scale:"50%" }}
      >
        <style type="text/css">
          {`
            .st0 { fill: #58595B; stroke: #000000; stroke-miterlimit: 10; }
            .st1 { fill: none; stroke: #000000; stroke-miterlimit: 10; }
            .st2 { fill: #A7A9AC; stroke: #000000; stroke-miterlimit: 10; }
          `}
        </style>
        <g>
          <g>
            <path className="st0" d="M471.83,258.04v131.75c0,12.03-33.95,21.78-75.83,21.78c-41.88,0-75.83-9.75-75.83-21.78V258.04 c0,8.46,33.95,15.32,75.83,15.32C437.88,273.36,471.83,266.5,471.83,258.04z" />
            <path className="st1" d="M471.83,258.04c0,8.46-33.95,15.32-75.83,15.32c-41.88,0-75.83-6.86-75.83-15.32H471.83z" />
            <path className="st2" d="M471.83,258.04c0,8.46-33.95,15.32-75.83,15.32c-41.88,0-75.83-6.86-75.83-15.32H471.83z" />
          </g>
          <line className="st1" x1="353.7" y1="407.87" x2="353.7" y2="480.47" />
          <line className="st1" x1="438.47" y1="407.87" x2="438.47" y2="480.47" />
          <line className="st1" x1="396" y1="411.57" x2="396" y2="533.96" />
        </g>
      </svg>

      {/* Handles for Collector, Base, and Emitter */}  
      <Handle
           type={data.first.type}
           position={Position.Left}
           id={data.first.pintype}
        style={{ left: "44.5%",top: "63%" }}
       
      />
      <Handle
       type={data.second.type}
      position={Position.Bottom}
      id={data.second.pintype}
        style={{ top: "67%",left:"50%"}}
      />
      <Handle
        type={data.third.type}
        position={Position.Right}
        id={data.third.pintype}
        style={{ top: "63%",right:"44.5%"}}
       
      />
    </div>
  );
};

export default TransistorNode;
