import { useState } from "react";

import { Text, ChakraProvider } from "@chakra-ui/react";
import ComponentRoutes from "./routes/componentRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <ComponentRoutes />
    </ChakraProvider>
  );
}

export default App;
