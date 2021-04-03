import Footer from "components/Clients/Footer";
import Header from "components/Clients/Header";
import ReadyToBegin from "components/Clients/ReadyToBegin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Clients/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>

      <ReadyToBegin />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
