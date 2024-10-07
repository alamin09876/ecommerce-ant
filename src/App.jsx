import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
// import FornExplore from "./components/FormExplore/FornExplore";
import FornExplore from "./components/FormExplore/FornExplore";
import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <FornExplore></FornExplore>
        <PageContent></PageContent>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
