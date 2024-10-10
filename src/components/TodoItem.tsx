import React from 'react'
import { TodoType } from '../types/todoType';
import { ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText, IconButton, Divider } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

type TodoItemProps = {
    item: TodoType;
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}

export const TodoItem = ({ item, todos, setTodos }: TodoItemProps) => {
    const handleMarkAsComplete = (item: TodoType) => {
        let todoIndex = todos.findIndex((el: TodoType) => el.id === item.id)
        if (todoIndex >= 0) {
            const newTodos = todos.map((el: TodoType) => {
                if (el.id === item.id) {
                    el.isCompleted = !item.isCompleted
                }
                return el
            })
            setTodos(newTodos)
        } else {
            setTodos((prevTodos: TodoType[]) => {
                return prevTodos.filter(x => x.id !== item.id)
            })
        }
    }
    const handleDelete = (item: TodoType) => {
        const todoIndex = todos.findIndex((el: TodoType) => el.id === item.id)
        if (todoIndex >= 0) {
            setTodos((prevTodos: TodoType[]) => {
                return prevTodos.filter(x => x.id !== item.id)
            })
        }
    }
    return (
        <>
            <ListItem sx={{ backgroundColor: '#a2c3df' }}>
                <ListItemButton sx={{ backgroundColor: '#f0f8ff' }}>
                    <ListItemIcon>
                        <Checkbox onClick={() => handleMarkAsComplete(item)}
                            checked={item.isCompleted}
                            edge={'start'}
                        />
                    </ListItemIcon>
                    <ListItemText
                        className={item.isCompleted ? 'striked' : ''}>
                        {item.todo}
                    </ListItemText>
                    <IconButton
                        onClick={() => handleDelete(item)}
                        edge={'end'}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    )
}
