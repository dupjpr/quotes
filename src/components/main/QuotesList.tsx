import { useEffect } from "react";
import { useAtom } from "jotai";
import { DataAtom } from "../../state/Atoms";

const URL = "https://type.fit/api/quotes";

const QuotesList: React.FC = () => {
  const [Data, setData] = useAtom(DataAtom);

  const FetchData = async () => {
    const res = await fetch(URL);
    const resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    FetchData();
  }, []);

  console.log("-->", Data);

  return <div>heare the fetch list</div>;
};

export default QuotesList;
