'use client';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, FormLabel, Button } from 'react-bootstrap';

const initialState = {
  taskName: '',
};

export default function TodoForm() {
  const [formInput, setFormInput] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const addTask = (task) => {
      formInput(task);
      setFormInput(...task);
    };
    return addTask;
  };
  const handleChange = (e) => {
    console.warn(e.target);
    const { name, value } = e.target;
    console.warn(name, value);
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormLabel> Add a Task here!</FormLabel>
        <input type="text" placeholder="Task Name" name="taskName" value={formInput.taskName} onChange={handleChange} />
        <Button variant="warning" type="submit">
          {' '}
          Add that TODO!!!!!!
        </Button>
      </Form>
    </div>
  );
}

TodoForm.propType = {
  taskName: PropTypes.string.isRequired,
};
