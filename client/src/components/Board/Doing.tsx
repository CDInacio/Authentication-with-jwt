import { ITaskResponse } from "../../@types";
import useGetTasks from "../../hooks/useGetTasks";
import BoardItem from "./BoardItem";
import Header from "./Header";

const Doing = () => {
  const { data } = useGetTasks({ key: "doing-tasks", status: "Fazendo" });

  return (
    <div className="flex flex-col  p-[10px]">
      <Header status="FAZENDO" length={data?.length} color="text-purple-500" />
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

export default Doing;
