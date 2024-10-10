import React from 'react'
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { TodoType } from '../types/todoType';
import { Stack, List, Typography } from '@mui/material'

type TodoListProps = {
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}

export const TodoList = ({ todos, setTodos }: TodoListProps) => {
    return (
        <>
            <Stack spacing={2} direction={'column'} className='todo-list-wrapper'>
                <TodoInput setTodos={setTodos} />
                <List className='todo-list-item-wrapper'>
                    {
                        todos?.length ? todos.map((item: TodoType) => (
                            <TodoItem item={item} todos={todos} setTodos={setTodos} key={item.id} />
                        ))
                            :
                            (<Typography variant='body1'
                                className='no-todos'>No data to list</Typography>)
                    }
                </List>
            </Stack>
        </>
    )
}
