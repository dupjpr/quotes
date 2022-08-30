import { useAtom } from "jotai";
import { flagTabsAtom } from "../../state/Atoms";
import QuotesList from "../main/QuotesList/QuotesList";
import QuoteForm from "../main/QuoteForm";

const Tabs: React.FC = () => {
  const [flag, setFlag] = useAtom(flagTabsAtom);

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    target.name === "tabList" ? setFlag(true) : setFlag(false);
  };

  return (
    <div>
      <button name="tabList" onClick={(e) => handleClick(e)}>
        Quotes list
      </button>
      <button name="tabForm" onClick={(e) => handleClick(e)}>
        New Quote
      </button>
      {flag ? <QuotesList /> : <QuoteForm />}
    </div>
  );
};

export default Tabs;
