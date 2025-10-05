import { useState } from 'react';

import CoreConcept from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';

function Main() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {
            CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                img={concept.img}
              />
            ))
          }
        </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
          <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
          <TabButton onSelect={() => handleClick('state')}>State</TabButton>
        </menu>

        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>

      </section>
      <h2>Time to get started!</h2>
    </main>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;