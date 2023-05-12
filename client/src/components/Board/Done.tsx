import Header from "./Header";

const Done = () => {
  return (
    <div className="flex flex-col  p-[10px]">
      <Header status="FEITO" length={0} color="text-green-500" />
      {/* {data?.map((item) => (
    <BoardItem title={item.title} author={item.author.fullname} />
  ))} */}
    </div>
  );
};

export default Done;
