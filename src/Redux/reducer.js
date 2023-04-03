import * as types from "./actionTypes";

const initial_state={
    loading:false, 
    error:false,
    auth:false
}

const reducer=( state=initial_state, action)=>{

    switch(action.type){
       
        case types.GET_AUTH:
        return {
            ...state , auth:true 
        }
        
         
        default : return state
    }
}

export {reducer}