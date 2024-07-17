import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Box, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Task } from "../../types/TasksResponse";

interface TaskListProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onAddTask: (title: string, description: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskClick, onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAddTask = () => {

    if (newTaskTitle === "" && newTaskDescription === "") {
      setHasError(true)
      setErrorMessage("Input fields are required")
    }

    onAddTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle("");
    setNewTaskDescription("")
  };

  return (
    <Box p={2} sx={{ height: '90dvh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4">Tasks</Typography>
      <Box sx={{ flex: 1, overflow: 'auto', marginTop: '16px' }}>
        <Grid container direction="column">
          {tasks?.map((task) => (
            <Card
              key={task.id}
              elevation={2}
              onClick={() => onTaskClick(task)}
              sx={{ marginBottom: "16px", cursor: "pointer" }}
            >
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {task.description}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Created by: {"default"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Box>
      <Box mt={2}>
        <TextField
          fullWidth
          required
          label="New Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="New Task Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          variant="outlined"
          margin="normal"
          error={hasError}
          helperText={hasError && errorMessage}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          startIcon={<SendIcon />}
          fullWidth
        >
          Add Task
        </Button>
      </Box>
    </Box>
  );
};

export default TaskList;
