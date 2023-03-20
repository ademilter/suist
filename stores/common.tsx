import { createContext, ReactNode, useEffect, useState } from "react";
import { IData } from "@/lib/types";

interface ICommonStore {
  appLoading: boolean;
  data: undefined | IData;
}

export const CommonStoreContext = createContext<ICommonStore>({
  appLoading: false,
  data: undefined,
});

export function CommonStoreProvider({ children }: { children: ReactNode }) {
  const [appLoading, setAppLoading] = useState(true);
  const [data, setData] = useState();

  async function fetchData() {
    try {
      setAppLoading(true);
      const url = `/api`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.error(e);
    } finally {
      setAppLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CommonStoreContext.Provider
      value={{
        appLoading,
        data,
      }}
    >
      {children}
    </CommonStoreContext.Provider>
  );
}
