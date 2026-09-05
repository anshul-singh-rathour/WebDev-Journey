import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Sections from "./Sections.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  let [currvalue, setvalue] = useState();

  function handleClick(selectedButton) {
    setvalue(selectedButton);
  }

  let Tabcontent = <p>Please select a topic</p>;
  if (currvalue) {
    Tabcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[currvalue].title}</h3>
        <p>{EXAMPLES[currvalue].description}</p>
        <pre>
          <code>{EXAMPLES[currvalue].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Sections title="Examples" id="examples">
      <Tabs
        buttonsContainer = "menu"
        buttons={
          <>
            <TabButton
              isSelected={currvalue === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={currvalue === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={currvalue === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={currvalue === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {Tabcontent}
      </Tabs> 
    </Sections>
  );
}
