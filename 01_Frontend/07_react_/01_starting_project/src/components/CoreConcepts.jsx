 
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
 export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      {/* jsx can automatically able to render array of items either as html or as codee and for array it is necessary to pass prop key to uniquely identify it  */}
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}