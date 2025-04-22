import NavbarComponent from "./components/navbar/navbar";
import MainBanner from "./components/mainBanner/mainBanner";
import CountDown from "./components/countDown/countDown";
import Form from "./components/form/form"
import About from "./components/about/about"
import Milestone from "./components/milestone/milestone";
import Speakers from "./components/speakers/speaker";
import Schedule from "./components/schedule/schedule";
import SuperStudent from "./components/superStudent/superStudent";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <MainBanner />
      <CountDown />
      <Form />
      <About />
      <Milestone />
      <Speakers />
      <Schedule />
      <SuperStudent />
      <Footer />
    </>
  );
}

export default App;
