import { useState } from "react";
import { Provider } from "react-redux";
import { Text, ChakraProvider } from "@chakra-ui/react";
import ComponentRoutes from "./routes/componentRoutes";
import store from "./store/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <Provider store={store}>
        <ComponentRoutes />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
