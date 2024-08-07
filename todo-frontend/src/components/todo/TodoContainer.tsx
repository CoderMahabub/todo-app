// import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  //local State
  // const { todos } = useAppSelector((state) => state.todos);

  //from server
  const { data: todos, isLoading } = useGetTodosQuery(priority, {
    pollingInterval: 30000,
  });
  console.log(todos);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-5 text-white">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl  font-semibold">
          <p>There is No Task</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item} key={item?._id}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
