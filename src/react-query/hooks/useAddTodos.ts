import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CACHE_KEY_TODOS } from "../constant";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,

    onMutate: (newTodo: Todo) => {
      // called before mutation execution

      // get previous data and set to context
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      // return context object
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      // update client data with data returned by server
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );

      //clear form field
      onAdd();
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      // revert back to previous data
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);

      //clear form field
      onAdd();
    },
  });
};

export default useAddTodos;
