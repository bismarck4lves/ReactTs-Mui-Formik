import { createContext, PropsWithChildren, useContext, useState } from "react";

interface State {}

interface Dispatch {}

type ContextProps = [State, Dispatch];
const Context = createContext({} as ContextProps);

export function MyProvider(props: PropsWithChildren) {

  const [state, setState] = useState();


  return <Context.Provider value={[{}, {}]}>{props.children}</Context.Provider>;
}

export function useMyContext() {
  return useContext(Context);
}
