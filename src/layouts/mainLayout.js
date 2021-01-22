import React from "react";
import Navbar from "./navBar";

const DashboardLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <React.Fragment>

            <Navbar/>
          
            <ViewComponent />
   
        </React.Fragment>
      );
    }
  };
};
export default DashboardLayout;