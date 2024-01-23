import {todoModel} from "../models/todo.model";
//
const getall =async (_,res) => {
    try {
        const response =await todoModel.findAll();

        res.json(response);
    } catch (error) {
        console.log(error)
    }
}
//mandamos a routes
export const todoController = {
    getall,
}