<template>
    <div class="classform">
        <h1>Thêm Lớp</h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Class Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.className"
            placeholder="Enter name"
            required
          >
          <span v-if="this.id">{{ this.getClass(this.id)}}</span>
        </b-form-input>
        </b-form-group>
        <b-form-group label="Grade:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.grade"
            :options="this.getGrade()"
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
            className: '',
            grade: null,
          },
          classes: JSON.parse(localStorage.getItem("classes")),
          show: true,
          id:  this.$route.params.id,
          
        }
      }, methods: { onSubmit(event) {
          event.preventDefault()
        if(this.id){
            this.classes = this.classes.map(e => e.id == this.classes.id ? this.classes : e)
        } else {
          this.classes.push(this.form)
        }
        localStorage.setItem("classes",JSON.stringify(this.classes))
        this.$router.push({ path: "/classes" });
        },
        onReset(event) {
          event.preventDefault()
          // Reset our form values
          this.form.className = '',
          this.form.grade = ''
        },
        getGrade(){
            return this.classes.filter(e => e.grade == null)
        },
        getClass(id){
          if(id == this.id){
            var classEdit = this.classes.find(s => s.id == id)
          this.form = classEdit
          return this.form
          }
        }
      }
    }
  </script>

<style>
.classform{
    width: 40%;
    margin: auto;
}
</style>