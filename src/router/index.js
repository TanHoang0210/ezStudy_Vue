import Vue from "vue"
import Router from "vue-router"
import Index from "@/components/Index"
import Student from "@/components/Student"
import AddEditStudent from "@/components/AddEditStudent"
import AddEditClass from "@/components/AddEditClass"
import Classes from "@/components/Classes"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Student",
      component: Student
    }, {
      path: "/Student",
      name: "Student",
      component: Student
    }, {
      path: "/addStudent",
      name: "AddEditStudent",
      component: AddEditStudent
    }, {
      path: "/editStudent/:id",
      name: "AddEditStudent",
      component: AddEditStudent
    }, {
      path: "/Classes",
      name: "Classes",
      component: Classes
    }, {
      path: "/addClass",
      name: "AddEditClass",
      component: AddEditClass
    }, {
      path: "/editClass/:id",
      name: "AddEditClass",
      component: AddEditClass
    }
  ]
})
