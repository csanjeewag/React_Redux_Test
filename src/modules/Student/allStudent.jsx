import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {fetchJson} from './../../actions/studentActions';

export class Home extends Component {
  static propTypes = {};


  getdata(){
    var x = this.props.fetch();
   

  }

  componentDidMount(){
     
      // this.props.fetch();
  }

  render() {
    
    let student = this.props.state.student?this.props.state.student.data:null;
   
    return (
      <div>
        <button onClick={()=>this.getdata()}>click</button>
       <h1>student</h1>

 
         {student?student.map((x,i)=><p key={i}>{x.title} c</p>) : null}
     
      </div>
    );
  }
}

function mapStateToProps(state) {

    return {
        state: state.allStudent
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetch:fetchJson},dispatch)
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
