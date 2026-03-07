import Hero from "./Hero";
import Message from "./Message";
import WaitingListForm from "./WaitingListForm";
import Footer from "./Footer";

export default function PublicPage() {
  return (
    <div className="relative min-h-screen bg-black-deep">
      <Hero />
      <Message />
      <WaitingListForm />
      <Footer />
    </div>
  );
}
