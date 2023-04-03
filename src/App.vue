<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from "@/components/Header"
import students from "./data/student";
import classes from "./data/class";
export default {
  components: {
    Header
  },
  name: "App",
  methods:{
    runApp(){
      if(JSON.parse(localStorage.getItem("students"))==null && JSON.parse(localStorage.getItem("classes"))==null){
        localStorage.setItem("classes",JSON.stringify(classes))
        localStorage.setItem("students",JSON.stringify(students))
      }
    }
  },
  beforeMount() {
   this.runApp()
},
}
</script>
