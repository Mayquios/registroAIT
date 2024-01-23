import {todoBusqueda, todoModel} from "../models/todo.model";

const getall =async (_,res) => {
    try {
        const response =await todoModel.todoBusqueda();
        res.json(response);
    } catch (error) {
        console.log('error')
    }
}

export const todoController = {
    getall,
}