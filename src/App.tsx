import Footer from "./components/Footer";
import PasswordGenerator from "./components/generator/PasswordGenerator";
import Header from "./components/header/Header"
import PrivacyPolicy from "./components/PrivacyPolicy";
import Tips from "./components/Tips";

const App: React.FC = () => {
  return (
    <>
   <Header />
   <PasswordGenerator />
   <Tips />
   <PrivacyPolicy />
   <Footer />
    </>
  );
}

export default App
