import { atom } from "jotai";

export const DataAtom = atom(async () => {
  const URL: string = "https://type.fit/api/quotes";
  const res = await fetch(URL);
  const resJson = await res.json();
  return resJson;
});

export const ListAtom = atom((get) => {
  let newList: Array<{ [key: string]: string }> = [];

  for (let i = 0; i < 10; i++) {
    const id = Math.floor(Math.random() * 1000);
    newList = [...newList, get(DataAtom)[id]];
  }
  return newList;
});

export const flagTabsAtom = atom(true);
