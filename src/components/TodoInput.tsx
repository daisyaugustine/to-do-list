import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { TodoType } from '../types/todoType'


type TodoInputProps = {
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}

export const TodoInput = ({ setTodos }: TodoInputProps) => {
    const [value, setValue] = useState<string>('')
    const handleClick = (newValue: string) => {
        setTodos((prevTodos: TodoType[]) => [...prevTodos,
        {
            id: Math.random(),
            todo: newValue,
            isCompleted: false
        }
        ])
        setValue('')
    }
    return (
        <>
            <Stack spacing={3} >
                <TextField
                    variant='outlined'
                    onChange={(event) => setValue(event?.target.value)}
                    value={value}
                ></TextField>
                <Button
                    variant='contained'
                    color='primary'
                    className='todo-input-button'
                    onClick={() => handleClick(value)}
                    disabled={!value}
                    autoFocus
                >
                    <Typography fontSize={16} variant={'h4'} >ADD</Typography>
                </Button>
            </Stack>
        </>
    )
}
