import * as AlertDialog from "@radix-ui/react-alert-dialog";

import Button from "../Button/Button";

interface Props {
  title: string;
  description: string;
  isOpen: boolean;
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alert = ({ title, description, isOpen, onShow, onConfirm }: Props) => {
  // feche o modal principal e o de confirmação
  // já que o
  const handleOnShow = () => {
    onConfirm(false);
    onShow((prev) => !prev);
  };

  return (
    <AlertDialog.Root open={isOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 " />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-dark p-[25px]">
          <AlertDialog.Title className="text-white m-0 text-[17px] font-medium">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="text-neutral-300 mt-4 mb-5 text-[15px] leading-normal">
            {description}
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <Button
              onClick={() => onConfirm(false)}
              className="font-medium text-white bg-red-400 hover:bg-red-500"
            >
              Cancelar
            </Button>
            <Button onClick={handleOnShow} className="font-medium text-white">
              Continuar
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Alert;
