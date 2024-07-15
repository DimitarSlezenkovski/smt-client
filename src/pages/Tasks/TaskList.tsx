import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Task } from "../../types/TasksResponse";

interface TaskListProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onAddTask: (title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskClick, onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    onAddTask(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <Box p={2}>
      <Typography variant="h4">Tasks</Typography>
      <Box>
        {tasks.map((task) => (
          <Card
            key={task.id}
            elevation={2}
            onClick={() => onTaskClick(task)}
            style={{ marginBottom: "16px", cursor: "pointer" }}
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
      </Box>
      <Box mt={2}>
        <TextField
          fullWidth
          label="New Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          variant="outlined"
          margin="normal"
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
