


// imports
// enhanced version of the local storage hook
// it accepts a particular type and saves it properly along with encrypting it
import React, { useState, useEffect } from 'react';
import CryptoJS from "crypto-js";

const PREFIX = 'aix-';

const key = process.env.REACT_APP_ENCRYPT_KEY;

function useLocalStorage<T>(key: string, initialValue?: T): [T, React.Dispatch<React.SetStateAction<T>>] {
   const prefixedKey = PREFIX + key;

   // decrypts it first before conversion
   const [value, setValue] = useState<T>(() => {
      const jsonValue = localStorage.getItem(prefixedKey);

      if (jsonValue !== null) {
         const res = CryptoJS.AES.decrypt(jsonValue, key as string).toString(CryptoJS.enc.Utf8); 
         const result = JSON.parse(res);
         return result;
      }

      if (typeof initialValue === 'function') return initialValue();
      if (initialValue) return initialValue;
      return null;
   });


   // saves the data to local storage but converts it first
   useEffect(() => {
      const changedItem = JSON.stringify(value);
      const newItem = CryptoJS.AES.encrypt(changedItem, key as string).toString();
      localStorage.setItem(prefixedKey, newItem);
   }, [value, prefixedKey]);


   return [value, setValue];
}

export default useLocalStorage;