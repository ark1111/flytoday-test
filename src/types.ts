export interface CheckboxItemType {
  id: number;
  text1: string;
  text2: string | null;
  value: number;
}

export interface FliterListItemType {
  id: number;
  title: string;
  type: string;
  items: null | CheckboxItemType[];
  min: null | number;
  max: null | number;
}

export interface sortItem {
  id: number;
  title: string;
  value: string;
}
