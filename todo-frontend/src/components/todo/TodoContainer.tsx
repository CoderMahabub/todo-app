import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-5 text-white">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl  font-semibold">
          <p>There is No Task</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((item) => (
            <TodoCard {...item} key={item.id}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
