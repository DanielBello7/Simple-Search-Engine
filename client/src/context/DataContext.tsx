


import React, { useState, useContext } from "react";
import Axios, { AxiosInstance } from 'axios';

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
  hasData: boolean,
  setHasData: React.Dispatch<React.SetStateAction<boolean>>,

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

  ShowAlert: (msg: string, type: boolean) => void,
  axios: AxiosInstance
}

type DataContextProps = {
  children: React.ReactNode
}

const baseURL = "http://127.0.0.1:2022/api";

const DataContext = React.createContext({} as DataContextType);

function useData() {
  return useContext(DataContext);
}

function DataContextProvider({children}: DataContextProps) {
  const axios = Axios.create({baseURL: baseURL, withCredentials: true});

  const [isLoading, setLoading] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);

  const [isAlertOpen, setAlertOpen] = useState(false);

  const [hasData, setHasData] = useState(false);

  const [searchActive, setSearchActive] = useState(false);

  const [user, setUser] = useState<UserDataType | null>(null);

  const [alertData, setAlertData] = useState({} as AlertDataType);

  const ShowAlert = (msg: string, type: boolean) => {
    setAlertData({msg: msg, type: type});
    return setAlertOpen(true);
  }

  return (
  <DataContext.Provider value={{
    hasData,
    setHasData,

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

    ShowAlert,
    axios
  }}>
    {children}
  </DataContext.Provider>
  );
}

const DataContextConsumer = DataContext.Consumer;

export { DataContext, DataContextProvider, DataContextConsumer, useData }