import allStudent from "../modules/Student/allStudent";

export default function(state ={student:null}, action){
   
    switch(action.type){
        case 'FETCH_DATA':
            return (
                {...state, student: action.payload}
            );
            break;
        case 'FETCH_DATA_SUCCESS':
            return (
                {...state, student: action.payload}
            );
            break;
        case 'FETCH_DATA_FAIL':
            return (
                {...state, student: action.payload}
            );
            break;
    }
    return state;
}