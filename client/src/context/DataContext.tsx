


import React, { useState, useContext } from "react";

type DataContextType = {
  data: any[] | null,
  setData: React.Dispatch<React.SetStateAction<any[] | null>>,

  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,

  isAlertOpen: boolean,
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>,

  alertData: {msg: string, type: boolean},
  setAlertData: React.Dispatch<React.SetStateAction<{msg: string, type: boolean}>>,

  ShowAlert: (msg: string, type: boolean) => void
}

type DataContextProps = {
  children: React.ReactNode
}

const DataContext = React.createContext({} as DataContextType);

function useData() {
  return useContext(DataContext);
}

function DataContextProvider({children}: DataContextProps) {
  const [data, setData] = useState<any[] | null>(null);

  const [isLoading, setLoading] = useState(false);

  const [isAlertOpen, setAlertOpen] = useState(false);

  const [alertData, setAlertData] = useState({msg: "", type: false});

  const ShowAlert = (msg: string, type: boolean) => {
    setAlertData({msg: msg, type: type});
    return setAlertOpen(true);
  }

  return (
  <DataContext.Provider value={{
    data,
    setData,

    isLoading,
    setLoading,

    isAlertOpen,
    setAlertOpen,

    alertData,
    setAlertData,

    ShowAlert
  }}>
    {children}
  </DataContext.Provider>
  );
}

const DataContextConsumer = DataContext.Consumer;

export { DataContext, DataContextProvider, DataContextConsumer, useData }