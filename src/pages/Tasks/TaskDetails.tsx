import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { Task } from "../../types/TasksResponse";

interface TaskDetailsProps {
  task: Task;
  onDescriptionChange: (description: string) => void;
  onGetSuggestions: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onDescriptionChange, onGetSuggestions }) => {
  return (
    <Box p={2}>
      <Typography variant="h4">{task.title}</Typography>
      <TextField
        fullWidth
        label="Description"
        value={task.description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onGetSuggestions}
        fullWidth
      >
        Get Suggestions
      </Button>
    </Box>
  );
};

export default TaskDetails;
