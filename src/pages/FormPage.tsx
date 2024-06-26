import { Select, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form'
import { useAtom } from 'jotai';
import { v4 as uuid } from 'uuid';
import { appStore } from '../store';
import { Todo } from '../types';

export function FormPage() {
  const [store, setStore] = useAtom(appStore)

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      todo: '',
      user: null,
    },
    validate: {
      todo: (value) => value.length > 0 ? null : 'Cannot be empty',
      user: (value) => value !== null ? null : 'Must choose a user'
    },
  });

  const users = Object.entries(store.users)
    .map(([userId, user]) => ({
      value: userId,
      label: user.name,
    }))

  return (
    <>
      <h2>Form Page</h2>

      <form onSubmit={form.onSubmit((values) => {
        const userId = values.user!
        const newTodo: Todo = {
          id: uuid(),
          title: values.todo,
          completed: false,
          userId,
        }

        const userTodos = {
          ...store.userTodos,
          [userId]: [
            ...store.userTodos[userId],
            newTodo.id
          ]
        }
        
        const todos = {
          ...store.todos,
          [newTodo.id]: newTodo
        }

        setStore({
          ...store,
          userTodos,
          todos,
        })

        form.reset();
      })}>
        <Select
          label="Select User"
          placeholder="Select a user"
          data={users}
          key={form.key('user')}
          {...form.getInputProps('user')}
        />

        <TextInput
          label="Todo"
          placeholder="Enter your todo"
          key={form.key('todo')}
          {...form.getInputProps('todo')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </>
  );
}