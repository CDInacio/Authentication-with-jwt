import { ITaskResponse } from "../../@types";
import useGetTasks from "../../hooks/useGetTasks";
import BoardItem from "./BoardItem";
import Header from "./Header";

const Todo = () => {
  const { data } = useGetTasks({ key: "todo-tasks", status: "Fazer" });

  return (
    <div className="flex flex-col  p-[10px]">
      <Header status="FAZER" length={data?.length} color="text-sky-500" />
      {data?.map((item: ITaskResponse, i: number) => (
        <BoardItem
          key={item.description + i}
          title={item.title}
          author={item.author.fullname}
        />
      ))}
    </div>
  );
};

export default Todo;
