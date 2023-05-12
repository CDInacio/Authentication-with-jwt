import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  length: number | undefined;
  color: string;
  status: string;
}

const Header = ({ length, color, status }: Props) => {
  return (
    <div className="flex items-center my-[20px]">
      <FontAwesomeIcon icon={faCircle} className={color} />
      <p className="ml-[10px] text-neutral-500 font-medium">
        {status} ({length})
      </p>
    </div>
  );
};

export default Header;
