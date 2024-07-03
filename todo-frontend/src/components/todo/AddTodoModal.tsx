import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch } from "@/redux/hooks";
import { addTodo } from "@/redux/features/todoSlice";
import { Textarea } from "../ui/textarea";
import { useAddTodosMutation } from "@/redux/api/api";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  //! for local state management
  // const dispatch = useAppDispatch();

  //* for server
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodosMutation();
  console.log({ data, isLoading, isSuccess, isError });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      title: task,
      description: description,
      priority: priority,
    };
    console.log(taskDetails);

    //! for local state management
    // dispatch(addTodo(taskDetails));

    addTodo(taskDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Input
                onBlur={(e) => setPriority(e.target.value)}
                id="priority"
                className="col-span-3"
              />
            </div>
            <div className="flex justify-end">
              <Button
                className="bg-gray-950 text-white cursor-pointer"
                variant="secondary"
                type="submit"
              >
                Save changes
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
