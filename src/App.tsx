import React, { useEffect, useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import axios from 'axios';
import { TodoType } from './types/todoType';
import { SnackbarMsg } from './components/SnackbarMsg';
import { Typography } from '@mui/material';
import './components/TodoApp.css'

function App() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [open, setOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = () => {
    resetData()
    return axios.get<any>('./todoListData.json')
      .then((res) => {
        if (res.statusText === 'OK') {
          setTodos(res.data)
        } else {
          setOpen(true)
          setErrorMsg('Error occured, please try again!')
        }
      })
      .catch((err) => {
        setOpen(true)
        setErrorMsg('Error occured, please try again!')
      })
  }

  const resetData = () => {
    setOpen(false)
    setErrorMsg(null)
    setTodos([])
  }

  return (
    <div className="App">
      <Typography variant='h4' className='todo-header' >To do List</Typography>
      <SnackbarMsg setOpen={setOpen} errorMsg={errorMsg} open={open} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
