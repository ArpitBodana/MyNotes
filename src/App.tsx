import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-light">
        <h1 className="text-center display-1 text-danger pt-3">MyNotes</h1>
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
