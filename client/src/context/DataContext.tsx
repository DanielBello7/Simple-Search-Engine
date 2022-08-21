


import React, { useState, useContext, useEffect } from "react";
import Axios, { AxiosInstance } from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

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

  data: any[] | null,
  setData: React.Dispatch<React.SetStateAction<any[] | null>>,

  recent: any[],
  setRecent: React.Dispatch<React.SetStateAction<any[]>>,

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
  const axios = Axios.create({baseURL: baseURL});

  const [isLoading, setLoading] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);

  const [isAlertOpen, setAlertOpen] = useState(false);

  const [hasData, setHasData] = useLocalStorage('hasData', false);

  const [data, setData] = useLocalStorage<any[] | null>('data', null);

  const [recent, setRecent] = useLocalStorage<any[]>('recent', []);

  const [searchActive, setSearchActive] = useState(false);

  const [user, setUser] = useLocalStorage<UserDataType | null>('user', null);

  const [alertData, setAlertData] = useState({} as AlertDataType);

  const ShowAlert = (msg: string, type: boolean) => {
    setAlertData({msg: msg, type: type});
    return setAlertOpen(true);
  }

  useEffect(() => {
    return () => localStorage.clear();
  }, []);

  return (
  <DataContext.Provider value={{
    hasData,
    setHasData,

    data,
    setData,

    recent,
    setRecent,

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