import { useEffect, useId } from "react";
import { useAtom } from "jotai";
import { DataAtom } from "../../state/Atoms";

const URL = "https://type.fit/api/quotes";

interface listTypes {
  author: string;
  text: string;
}
const QuotesList: React.FC = () => {
  const [data, setData] = useAtom(DataAtom);

  const FetchData = async () => {
    const res = await fetch(URL);
    const resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    FetchData();
  }, []);

  console.log("-->", data);

  return (
    <div>
      {data &&
        data.map((item: listTypes, idx: number) => (
          <div key={idx}>{item.author}</div>
        ))}
    </div>
  );
};

export default QuotesList;
