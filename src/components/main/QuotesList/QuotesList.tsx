import { useAtom } from "jotai";
import { ListAtom } from "../../../state/Atoms";

const QuotesList: React.FC = () => {
  const [lista] = useAtom(ListAtom);

  return (
    <div>
      {lista.map((item: { [key: string]: string }, idx: number) => (
        <div key={idx}>
          <p>{item.text}</p>
          <div>{item.author}</div>
        </div>
      ))}
    </div>
  );
};

export default QuotesList;
