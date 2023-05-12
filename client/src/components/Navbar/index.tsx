import { useContext, useState } from "react";

import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Popover from "@radix-ui/react-popover";

import { AuthContext } from "../../context/AuthContext";
import Button from "../ui/Button/Button";
import Container from "../ui/Layout/Container";
import CreateAndEditModal from "../ui/Modals/CreateAndEditModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { logout } = useContext(AuthContext);

  return (
    <nav className="w-screen h-[60px] text-white bg-dark shadow-md flex items-center justify-center">
      <Container className="flex justify-between">
        <p>Quadro Kanban</p>
        <div className="flex items-center">
          <CreateAndEditModal onShow={setShowModal} isOpen={showModal} />
          <Button icon={faPlus} onClick={() => setShowModal((prev) => !prev)}>
            Adicionar
          </Button>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button
                className=" items-center justify-center hover:bg-neutral-700 duration-300 w-[35px] h-[35px] rounded-full cursor-pointer ml-[10px] text-neutral-300"
                aria-label="Update dimensions"
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                className="rounded text-sm w-[80px] bg-dark text-white  shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                sideOffset={5}
              >
                <div className="flex flex-col gap-2.5 ">
                  <ul>
                    <li
                      onClick={logout}
                      className=" w-full px-[5px] py-[10px] hover:bg-neutral-700 hover:text-white duration-300 text-center cursor-pointer"
                    >
                      Sair
                    </li>
                    <li className=" w-full px-[5px] py-[10px] hover:bg-neutral-700 hover:text-white duration-300 text-center cursor-pointer">
                      Sair
                    </li>
                  </ul>
                </div>
                {/* <Popover.Close
                  className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
                  aria-label="Close"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </Popover.Close> */}
                <Popover.Arrow className="fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
