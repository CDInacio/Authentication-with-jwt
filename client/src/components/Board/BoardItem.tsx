interface Props {
  title: string;
  author: string;
}

const BoardItem = ({ title, author }: Props) => {
  return (
    <div className=" p-[10px] rounded-md bg-dark text-neutral-200 hover:text-primary-500 duration-300 cursor-pointer my-[10px] shadow-md">
      <h4 className="font-medium">{title}</h4>
      <p className="font-medium text-neutral-500">{author}</p>
    </div>
  );
};

export default BoardItem;
