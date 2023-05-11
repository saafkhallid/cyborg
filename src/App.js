import "./App.css";
import { Container } from "./components/index";
import { Header, Footer, Hero } from "./Section/index";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
