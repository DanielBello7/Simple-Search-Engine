


import React, { useState, useContext } from "react";

type AlertDataType = {
  msg: string,
  type: boolean
}

type UserDataType = {
  firstname: string,
  lastname: string,
  email: string
}

type DataContextType = {
  data: any[] | null,
  setData: React.Dispatch<React.SetStateAction<any[] | null>>,

  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,

  isAlertOpen: boolean,
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>,

  alertData: {msg: string, type: boolean},
  setAlertData: React.Dispatch<React.SetStateAction<AlertDataType>>,

  isDarkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,

  user: UserDataType | null,
  setUser: React.Dispatch<React.SetStateAction<UserDataType | null>>,

  searchActive: boolean,
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>,

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

  const [isLoading, setLoading] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);

  const [isAlertOpen, setAlertOpen] = useState(false);

  const [data, setData] = useState<any[] | null>(null);

  const [searchActive, setSearchActive] = useState(false);

  const [user, setUser] = useState<UserDataType | null>(null);

  const [alertData, setAlertData] = useState({} as AlertDataType);

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

    isDarkMode,
    setDarkMode,

    user,
    setUser,

    searchActive,
    setSearchActive,

    ShowAlert
  }}>
    {children}
  </DataContext.Provider>
  );
}

const DataContextConsumer = DataContext.Consumer;

export { DataContext, DataContextProvider, DataContextConsumer, useData }