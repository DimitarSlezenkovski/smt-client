import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import Suggestions from "./Suggestions";
import { useSuggestions } from "../../hooks/useSuggestions";
import { Task, TaskRequest } from "../../types/TasksResponse";
import { getTasks } from "../../core/requests/getMyTasks";
import { useAppSelector } from "../../config/store.config";
import { getMyTasks } from "../../context/tasksSlice/selectors";
import { getMySuggestions } from "../../core/requests/getMySuggestions";
import { SuggesionsRequest } from "../../types/SuggestionsRequest";
import { getSuggestions } from "../../context/suggestionsSlice/selectors";

const Tasks: React.FC = () => {
  const tasks = useAppSelector(getMyTasks)

  const [selectedTask, setSelectedTask] = useState<null | Task>(null);
  const [loading, setLoading] = useState(false);
  const suggestions = useAppSelector(getSuggestions)

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      await getTasks()
    }
    fetchTasks()
  }, [])

  const handleAddTask = (title: string) => {
    const newTask: TaskRequest = {
      user_id: 0,
      title: "",
      description: "",
      due_date: new Date(),
      status: ""
    };
    // setTasks([...tasks, newTask]);
  };

  const handleDescriptionChange = (description: string) => {
    if (selectedTask) {
      setSelectedTask({ ...selectedTask, description });
    }
  };

  const handleGetSuggestions = async () => {
    if (selectedTask) {
      setLoading(true)
      const taskDetails: SuggesionsRequest = {
        input_text: selectedTask.title + " \n" + selectedTask.description,
        user_id: 1,
        tasks_id: 1,
      };
      getMySuggestions(taskDetails).then(res => {
        if (res) {
          setLoading(false)
        }
      });
    }
  };

  console.log('loading', loading)

  return (
    <Grid container style={{ background: "#f6f6f6", height: '100dvh' }} spacing={2}>
      <Grid item xs={12} sm={4}>
        <TaskList tasks={tasks} onTaskClick={handleTaskClick} onAddTask={handleAddTask} />
      </Grid>
      {selectedTask && (
        <Grid item xs={12} sm={4}>
          <TaskDetails
            task={selectedTask}
            onDescriptionChange={handleDescriptionChange}
            onGetSuggestions={handleGetSuggestions}
          />
        </Grid>
      )}
      {loading || suggestions !== undefined ? (
        <Grid item xs={12} sm={4}>
          <Suggestions suggestions={suggestions} loading={loading} />
        </Grid>
      ): <></>}
    </Grid>
  );
};

export default Tasks;
