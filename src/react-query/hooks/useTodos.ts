import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constant";
import ApiClient from "../services/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const apiClient = new ApiClient<Todo>("/todos");

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, //10s
  });
};

export default useTodos;
