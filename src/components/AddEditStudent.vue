<template>
    <div class="stdform">
        <h1>Thêm Sinh Viên</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.studentName"
            placeholder="Enter name"
            required
          >
          <span v-if="this.id">{{ this.getStudent(this.id)}}</span>
        </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="BirthDay:" label-for="input-2">
            <label for="datepicker-valid">dd/mm/yyyy</label>
        <b-form-datepicker v-model="form.dateOfBirth" id="datepicker-valid" :state="true"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Grade:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="grade"
            :options="this.getGrade()"
            value-field="id"
            text-field="className"
          ></b-form-select>
        </b-form-group>
        <b-form-group v-if="grade" id="input-group-4" label="Class:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="form.class"
            :options="this.getClass(grade)"
            value-field="id"
            text-field="className"
          ></b-form-select>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          form: {
            id: Math.floor(Date.now()) ,
            studentName: '',
            dateOfBirth: new Date,
            class: '',
          },
          grade: null,
          classes: JSON.parse(localStorage.getItem("classes")),
          show: true,
          students:JSON.parse(localStorage.getItem("students")),
          id:  this.$route.params.id,
          
        }
      },
      methods: {
        onSubmit(event) {
          event.preventDefault()
        if(this.id){
          this.students = this.students.map(e => e.id == this.students.id ? this.students : e)
        } else{
          this.students.push(this.form)
        }
        localStorage.setItem("students",JSON.stringify(this.students))
        this.$router.push({ path: "/student" });
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.studentName = '',
          this.form.class = '',
          this.grade=''
          console.log(this.id)
        },
        getGrade(){
            return this.classes.filter(e => e.grade == null)
        },
        getClass(gradeId){
            return this.classes.filter(e => e.grade == gradeId)
        },
        getStudent(id){
          if(id == this.id){
            var stdEdit = this.students.find(s => s.id == id)
          this.form = stdEdit
          return this.form
          }
        }
      }
    }
  </script>

<style>
.stdform{
    width: 40%;
    margin: auto;
}
</style>