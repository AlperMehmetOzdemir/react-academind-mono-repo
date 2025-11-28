import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton/TabButton';

function App() {
  let [selectedContent, setSelectedContent] = useState();

  function handleMenuSelect(selectedButton) {
    console.log(`${selectedButton} selected!`);
    setSelectedContent(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedContent].title}</h3>
        <p>{EXAMPLES[selectedContent].description}</p>
        <pre>
          <code>{EXAMPLES[selectedContent].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={index}
                {...CORE_CONCEPTS[index]}
              />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((key) => (
              <TabButton
                key={key}
                isSelected={selectedContent == key}
                onClick={() => handleMenuSelect(key)}>
                {EXAMPLES[key].title}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
