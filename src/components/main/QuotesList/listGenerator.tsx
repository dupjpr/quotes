export const listGenerator = (data: Array<any>) => {
  let newList: any = "";

  for (let i = 0; i < 10; i++) {
    const id = Math.floor(Math.random() * 1000);
    newList = [...newList, data[id]];
  }
  return newList && newList;
};
