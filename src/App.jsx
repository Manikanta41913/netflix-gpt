import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </ErrorBoundary>
  );
}
export default App;
