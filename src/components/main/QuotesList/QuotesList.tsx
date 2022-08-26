import { useEffect } from "react";
import { useAtom } from "jotai";
import { DataAtom, QuotesListAtom } from "../../../state/Atoms";
import { listGenerator } from "./listGenerator";

const URL: string = "https://type.fit/api/quotes";

const QuotesList: React.FC = () => {
  const [data, setData] = useAtom(DataAtom);
  const [list, setList] = useAtom(QuotesListAtom);

  const FetchData = async () => {
    const res = await fetch(URL);
    const resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    FetchData();
    listGenerator(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newList = listGenerator(data);
    setList(newList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  console.log("-->", data);

  return (
    <div>
      {list &&
        list.map((item: { [key: string]: string }, idx: number) => (
          <div key={idx}>
            <p>{item.text}</p>
            <div>{item.author}</div>
          </div>
        ))}
    </div>
  );
};

export default QuotesList;
