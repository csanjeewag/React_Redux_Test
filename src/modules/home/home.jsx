import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {fetchJson} from './../../actions/studentActions';

export class Home extends Component {
  static propTypes = {};


  getdata(){
    var student = this.props.studentAction.fetch();

    console.log(student);
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.getdata()}>click</button>
       <h1>home</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

  function mapDispatchToProps(dispatch) {
    return {

      studentAction : bindActionCreators({fetch:fetchJson,fetch2:fetchJson},dispatch)
    }
  };

export default connect(null, mapDispatchToProps)(Home);
