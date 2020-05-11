import React, { useContext, useReducer } from 'react' ;
//首先，在某个组件层级定义我们需要的 Context
export const AppContext:any = React.createContext(null) ;
//将 useReducer 的返回值直接传给 AppContext.Provider
interface AppProviderProps {
  reducer : any ,
  initValue : any ,
  children : any
}

export const  AppProvider = (props: AppProviderProps) => {
  return (
    <AppContext.Provider
      value={useReducer(props.reducer, props.initValue)}
      >
      {props.children}
    </AppContext.Provider>
  )
} ;
//添加一个自定义 hooks 来获取 AppContext 里的状态和方法
export const useAppState:any = () => useContext(AppContext) ;
