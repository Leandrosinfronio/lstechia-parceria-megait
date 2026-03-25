import "@/App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Partnership } from "./components/Partnership";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <div className="bg-[#050B18] min-h-screen overflow-x-hidden" data-testid="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Partnership />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
