import { FliterListItemType } from "../types";

type Props = {
  info: FliterListItemType;
};

const CheckboxFilter = ({ info }: Props) => {
  return (
    <div className="w-full mt-[14px] inline-block">
      {info.items?.map((item) => (
        <div
          key={item.id}
          className="w-full flex items-center gap-x-[15px] mt-[18px]"
        >
          <input
            type="checkbox"
            className="w-[18px] h-[18px] accent-[#1773dc]"
          />
          <div className="w-full flex items-center justify-between">
            <div className="text-[14px] text-[#161616]">{item.text1}</div>
            {item.text2 && (
              <div className="text-[14px] text-[#6f6f6f] ltr">{item.text2}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckboxFilter;
