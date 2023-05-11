import * as Select from "@radix-ui/react-select";

interface Props {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const SelectItem = ({ children, value, className, ...props }: Props) => {
  return (
    <Select.Item
      value={value}
      {...props}
      className={`text-[13px] leading-none text-neutral-300 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-neutral-600 cursor-pointer data-[highlighted]:text-violet1 ${className}`}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};

export default SelectItem;
