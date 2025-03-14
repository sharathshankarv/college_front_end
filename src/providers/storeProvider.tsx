'use client';
import { Provider } from "react-redux";
import { store } from "@/store";
import { ReactNode, FC, use } from "react";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
