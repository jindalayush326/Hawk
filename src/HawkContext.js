// context api ka use kiya esmai
import React, { createContext, useContext, useEffect, useState  } from 'react';

const Hawk = createContext();
// createContext = propmpt ki value ko pass kr dega
const HawkContext = ({children}) => {
    const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
// useEffect render ka baad useeffect ki value ko pass kr dega
  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
    else if (currency === "EURO") setSymbol("€");
  }, [currency]);

  return (
    <Hawk.Provider value={{ currency, setCurrency, symbol }}>
        {children}
    </Hawk.Provider>
  )
}

export default HawkContext;
export const HawkState = ()=>{
    return useContext(Hawk);
}
