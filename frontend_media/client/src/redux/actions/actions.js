import axios from 'axios'; 
import {GET_PRODUCTO, INCREMENTO} from "../action-types/action-types" 

export const incremento = () =>{
    return{
        type: INCREMENTO
    }
} 
export const getProducto = () => {
    return async (dispatch) => {
        const response = await axios(`http://localhost:3001/producto`) 
        return dispatch({
            type:GET_PRODUCTO,
            payload:response
        })
    }
}