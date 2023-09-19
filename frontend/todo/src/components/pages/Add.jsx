import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const initialState = { title: "", description: "" };

  const [todo, setTodo] = useState(initialState);
  const [errorTodo, setErrorTodo] = useState({});
  const nav = useNavigate();

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!todo.title.trim()) {
      errors.title = "Title required !!!";
    }
    if (!todo.description.trim()) {
      errors.description = "Description required !!!";
    }
    setErrorTodo(errors);
    if (Object.keys(errors).length === 0) {
      const response = await axios.post("http://localhost:8080/api/todo", todo);
      setTodo(response.data);
      setTodo({ title: "", description: "" });
      nav("/");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    nav("/");
  };

  return (
    <div className="my-5 container border shadow-lg p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title here.."
            name="title"
            onChange={handleChange}
            value={todo.title}
          />
          {errorTodo.title && (
            <p className="alert alert-danger">{errorTodo.title}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description here..."
            name="description"
            onChange={handleChange}
            value={todo.description}
          />
          {errorTodo.description && (
            <p className="alert alert-danger">{errorTodo.description}</p>
          )}
        </Form.Group>
        <div className="text-center">
          <Button variant="warning" type="submit">
            Submit
          </Button>
          <Button variant="danger" className="mx-3" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Add;
