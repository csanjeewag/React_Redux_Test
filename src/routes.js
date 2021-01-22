import MainLayout from "./layouts/mainLayout";
import View from "./modules/home/home";
import Student from "./modules/Student/allStudent";

const routes = [
    {
      path: "/home",
      layout: MainLayout,
      exact: true,
      component: View,
    }
    ,{
      path: "/students",
      layout: MainLayout,
      exact: true,
      component: Student,
    }

]

export default routes;