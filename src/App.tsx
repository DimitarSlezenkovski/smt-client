import Router from "./routes/Router";
import "./App.css";
import { Provider } from "react-redux";
import store from "./config/store.config";

function App() {
  

  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
