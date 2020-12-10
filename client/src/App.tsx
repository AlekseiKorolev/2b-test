import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";
import "./App.css";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// pages
import Home from "./pages/home/home.page";
import Admin from "./pages/admin/admin.page";

//axios.defaults.baseURL = "http://localhost:5000/b-test-ccc3b/us-central1/api";
axios.defaults.baseURL =
  "https://us-central1-b-test-ccc3b.cloudfunctions.net/api";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
