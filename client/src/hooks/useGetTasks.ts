import { useQuery } from 'react-query';
import { privateRequest } from '../services/api';

interface Props {
  key: string
  status: string
}

const getTasksByStatus = async ({ status }: { status: string }) => {
  const response = await privateRequest.get("/task?status=" + status);
  return response.data;
}

export default function useGetTasks({ key, status }: Props) {
  return useQuery([key], () => getTasksByStatus({ status }))
}



