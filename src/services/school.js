import { createLogic } from "redux-logic";

import {fetchJson,fetchJsonSuccess,fetchJsonFail} from "./../actions/studentActions";
import axios from "axios";

import {StudentFetchData} from './../actions/actionConstants';
const getAllEvents = createLogic({
  type: StudentFetchData.FETCH_DATA,
  latest: true,
  debounce: 1000,

  process({MockHTTPClient}, dispatch, done) {
    // debugger
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);

      dispatch(fetchJsonSuccess(response.data));
      
    }).then(
        ()=>done()
    );
  },

});

export default [getAllEvents];
