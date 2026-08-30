import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import Header from "./components/Header.jsx";
import { EXAMPLES } from "./data.js";

function App() {
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
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* jsx can automatically able to render array of items either as html or as codee and for array it is necessary to pass prop key to uniquely identify it  */}
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
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
          </menu>
          {Tabcontent}
        </section>
      </main>
    </div>
  );
}

export default App;
