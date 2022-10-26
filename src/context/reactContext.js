import { createContext, useState } from "react";
import { AREAS, N1, SEDES } from "../enums/enums";
import { createFile } from "../helpers/createFile";
import { getOptions } from "../helpers/getOptions";

const Context = createContext();

const ContextProvider = (props) => {

    const [state, setState] = useState({
        title:'',
        area:'',
        sede:'',
        n1:'',
        n2:'',
        n3:'',
        year:'',
        expiration:'',
        observation:'',
    })
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        createFile(state);
    }
    
      function handleInputChange(e) {
        setState({
          ...state,
          [e.target.name]: e.target.value 
        })
    }


    return(
        <Context.Provider value={{
            state,
            handleInputChange,
            handleSubmit,
            AREAS,
            N1,
            SEDES,
            getOptions,
        }}
        
        >
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }