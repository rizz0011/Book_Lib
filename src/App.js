import { createContext, useState } from "react";
import TopBar from "./Component/TopBar";
import RouterPage from "./Component/Router";
export const students = createContext();
function App() {
  const [data, setData] = useState([])

  
  return (
    <>
      <students.Provider value={{data, setData}}>
      <TopBar />
      <RouterPage />
      </students.Provider>
    </>
  );
}

export default App;
