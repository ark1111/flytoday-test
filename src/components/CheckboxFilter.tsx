import { FliterListItemType } from "../types";

type Props = {
  info: FliterListItemType;
  filterValueList: { id: number; values: number[] }[];
  setFilterValueList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        values: number[];
      }[]
    >
  >;
};

const CheckboxFilter = ({
  info,
  filterValueList,
  setFilterValueList,
}: Props) => {
  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newList = [...filterValueList];
    // let newObj: { [key: string]: number | number[] } = {};
    if (e.target.checked) {
      let isNew = true;
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === info.id) {
          isNew = false;
          newList[i].values.push(Number(e.target.value));
          break;
        }
      }
      if (isNew) {
        newList.push({ id: info.id, values: [Number(e.target.value)] });
      }
    } else {
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === info.id) {
          newList[i].values = newList[i].values.filter(
            (item) => item !== Number(e.target.value)
          );
          if (newList[i].values.length === 0) {
            newList = newList.filter((item) => item.id !== info.id);
          }
          break;
        }
      }
    }
    setFilterValueList(newList);
  };
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
            value={item.value}
            onChange={(e) => checkboxHandler(e)}
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
