import Section from "./components/body/Section";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebare";

export const App = () => {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <Section/>
    <Footer/>
    </div>
  )
}
export default App;