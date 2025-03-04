import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, TextField, Button } from "@mui/material";
import { X } from "lucide-react";
import { saveProject } from "../apiService/api";
import { useAppSelector } from "../redux/hooks/store";
import { useCircuitContext } from "../context/circuitContext";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

interface ProjectDialogProps {
  open: boolean;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ open, onClose }) => {
  const [projectName, setProjectName] = useState("");
  const prompt = useAppSelector((state) => state?.circuit?.prompt);
  const userId = useAppSelector((state)=> state?.auth?.user?.id);
  const circuit = useCircuitContext();
  
  const handleSave = async() => {
    try {
      const payload = {circuit: circuit?.circuitData, projectName, prompt, userId}
      const response = await saveProject(payload) as {data: {message: string, data: object}};
      // toast.success(`${response?.data?.message}`, {duration: 5000})
      alert(`${response?.data?.message}`)
      onClose();
    } catch (error) {
      toast.error(`${error}`, {duration: 5000});
      console.log("error", error)
    }
  }

  return (
    <Dialog open={open} onClose={() => {}} PaperProps={{ className: "text-white p-6 rounded-lg" }}>
      <div className="flex justify-between items-center p-2 border-b border-gray-700">
        <DialogTitle className="text-lg font-semibold text-white">Enter Project Name</DialogTitle>
        <IconButton onClick={onClose} className="text-white">
          <X size={20} />
        </IconButton>
      </div>
      <DialogContent>
        <TextField
          fullWidth
          variant="outlined"
          label="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="mt-4 text-white"
          InputLabelProps={{ className: "text-gray-400" }}
          InputProps={{ className: "text-white" }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className="mt-4 bg-blue-600 hover:bg-blue-700"
          onClick={handleSave}
        >
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
