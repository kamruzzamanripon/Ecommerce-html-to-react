import { useState } from "react";
import { HashRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";
console.log("s")


function App() {
  const [bundleStyle, setBundleStyle] = useState(false)
  
  return (
    
    <>
      <HashRouter>
        <AppRoute/>
      </HashRouter>
    </>
  );
}

export default App;
