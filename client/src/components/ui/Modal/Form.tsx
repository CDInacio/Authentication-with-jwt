import { useState } from "react";
import { useMutation } from "react-query";

import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";

import { ITask } from "../../../@types";
import { privateRequest } from "../../../services/api";
import SelectItem from "../Select/SelectItem";

interface Props {
  isEditMode?: boolean;
}

interface Task {
  title: string;
  description: string;
  status: string;
}

async function addTask(task: Task): Promise<void> {
  const data = privateRequest.post("/task/add", task);
}

const Form = ({ isEditMode }: Props) => {
  const [task, setTask] = useState<ITask>({
    title: "",
    description: "",
    status: "",
  });

  // if (!isEditMode) {
  //   console.log("n é");
  //   //TODO
  // }

  const { mutate, isLoading } = useMutation(addTask);

  const handleAddTask = () => {
    if (!task.title || !task.description || !task.status) return;
    console.log("na funcao");
    mutate(task);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span className="bg-primary-500 cursor-pointer hover:bg-primary-600 duration-300 h-[35px] px-[16px] rounded-md flex items-center justify-center">
          <FontAwesomeIcon icon={faPlus} />
          <button className="ml-[5px]">Adicionar</button>
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-dark p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="m-0 mb-[20px] text-xl font-medium text-white">
            Adicionar tarefa
          </Dialog.Title>
          {/* <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description> */}
          <fieldset className="mb-[20px] flex flex-col ">
            <label
              className="mb-[10px] text-white w-[90px]  text-[15px]"
              htmlFor="title"
            >
              Título
            </label>
            <input
              onChange={(e) =>
                setTask((prev) => ({ ...prev, title: e.target.value }))
              }
              className="duration-300 border-[1px] rounded-md bg-dark border-neutral-600 focus:border-primary-500 p-[10px] text-neutral-400 text-sm font-thin"
              id="title"
              defaultValue=""
            />
          </fieldset>
          <fieldset className="mb-[20px] flex flex-col  ">
            <label
              className=" mb-[10px] text-white w-[90px]   text-[15px]"
              htmlFor="description"
            >
              Descrição
            </label>
            <textarea
              onChange={(e) =>
                setTask((prev) => ({ ...prev, description: e.target.value }))
              }
              rows={10}
              className="duration-300 border-[1px] rounded-md bg-dark border-neutral-600 focus:border-primary-500 p-[10px] text-neutral-400 text-sm font-thin"
              id="description"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div className="flex flex-col">
            <label htmlFor="status" className="mb-[10px] text-white">
              Status
            </label>
            <Select.Root
              onValueChange={(value) =>
                setTask((prev) => ({ ...prev, status: value }))
              }
            >
              <Select.Trigger
                className="border-[1px] text-neutral-300 font-thin border-neutral-600 rounded-md p-[10px] "
                aria-label="status"
              >
                <div className="flex justify-between">
                  <Select.Value
                    placeholder={task.status}
                    className="bg-red-400 "
                  />
                  <Select.Icon className="text-violet11">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Select.Icon>
                </div>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="overflow-hidden bg-neutral-700 rounded-md mt-[20px]">
                  <Select.Viewport className="p-[5px]">
                    <Select.Group id="status">
                      <SelectItem value="Fazer">Fazer</SelectItem>
                      <SelectItem value="Fazendo">Fazendo</SelectItem>
                      <SelectItem value="Feito">Feito</SelectItem>
                    </Select.Group>
                    <Select.Separator className="h-[1px] bg-violet6 m-[5px]" />
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                onClick={handleAddTask}
                type="submit"
                className="bg-primary-500 text-white hover:bg-primary-600 duration-300 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Salvar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Form;
