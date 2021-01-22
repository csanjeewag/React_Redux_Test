import {StudentFetchData} from './actionConstants';
export const fetchJson=()=>{

    return{
        type:StudentFetchData.FETCH_DATA,
        payload : [
            {"name":"chanaka"},
            {"name":"sanjeewa"}
        ]

    }
}

export const fetchJsonSuccess=(data)=>{

  return{
      type:StudentFetchData.FETCH_DATA_SUCCESS,
      payload : {
        "massage":"success",
        data :data
      }
      
  }
}

export const fetchJsonFail=()=>{

  return{
      type:StudentFetchData.FETCH_DATA_FAIL,
      payload : [
        {"massage":"fail"}
      ]
      
  }
}
