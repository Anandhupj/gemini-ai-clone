import { createContext } from "react";

export const Context = createContext() ;

const  ContextProvider = (props) => {

    const onSent = async (prompt) => {
        await main(prompt)
    }
    
    onSent("what is react js")


  const contextValue = {

  }

  return(
    <Context.Provider>
      {props.childern}
     </Context.Provider>
  )

}

export default ContextProvider