import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import { CORE_CONCEPTS } from './data';

function Main() {
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