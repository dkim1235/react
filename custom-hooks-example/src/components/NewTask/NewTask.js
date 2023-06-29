import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

 

  const enterTaskHandler = async (taskText) => {
		const addTask = (data) => {
			const generatedId = data.name; // firebase-specific => "name" contains generated id
			const createdTask = { id: generatedId, text: taskText };
			props.onAddTask(createdTask);
		};
    sendTaskRequest(
      {
        url: 'https://react-http-e52a9-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { text: taskText },
      },
      addTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
