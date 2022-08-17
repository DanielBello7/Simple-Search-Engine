


import React, { useState, useContext } from "react";

type DataContextType = {
  data: any,
  setData: React.Dispatch<any>
}

type DataContextProps = {
  children: React.ReactNode
}

const DataContext = React.createContext({} as DataContextType);

function useData() {
  return useContext(DataContext);
}

function DataContextProvider({children}: DataContextProps) {
  const [data, setData] = useState<any>();

  return (
  <DataContext.Provider value={{
    data,
    setData
  }}>
    {children}
  </DataContext.Provider>
  );
}

const DataContextConsumer = DataContext.Consumer;

export { DataContext, DataContextProvider, DataContextConsumer, useData }