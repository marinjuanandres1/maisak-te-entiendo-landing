import Hero from "./components/Hero";
import WaitingListForm from "./components/WaitingListForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black-deep">
      <Hero />
      <WaitingListForm />
      <Footer />
    </div>
  );
}
