import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const View = () => {
  const [todos, setTodos] = useState("");

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/todo");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteById = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/todo/${id}`);
      getAll();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-5 container p-5 shadow-lg border">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                  <Link to={`/update/${todo._id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <Button
                    variant="danger"
                    className="mx-3"
                    onClick={() => deleteById(todo._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default View;
