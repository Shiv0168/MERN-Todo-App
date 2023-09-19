const Todo = require("../model/todoModel");

const getAll = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
    console.log("Get All Todo's");
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "todo not found !!!" });
    console.log("error in get All Todo");
  }
};

const postTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(404).json({ message: "all field are required !!!" });
    } else {
      const todo = await Todo.create({ title, description });
      res.status(201).json(todo);
      console.log("Post Todo's done");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "todo not found !!!" });
    console.log("error in post Todo");
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ message: `todo not found with id : ${todo.id}` });
    } else {
      res.status(200).json(todo);
      console.log("Get Todo by id");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "todo not found !!!" });
    console.log("error in get by id Todo");
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ message: `todo not found with id : ${todo.id}` });
    } else {
      const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(updatedTodo);
      console.log("Update Todo");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "todo not found !!!" });
    console.log("error in update Todo");
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ message: `todo not found with id : ${todo.id}` });
    } else {
      const updatedTodo = await Todo.deleteOne({ _id: id });
      res.status(200).json(updatedTodo);
      console.log("Delete Todo");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "todo not found !!!" });
    console.log("error in delete Todo");
  }
};

module.exports = { getAll, getById, updateById, deleteById, postTodo };
