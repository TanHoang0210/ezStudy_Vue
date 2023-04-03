<template>
  <div class="content">
  <div>
    <div class="search-label">
        <h2 class="label">Danh Sách {{label}} </h2>
        <div class="seach">
          <b-navbar type="light">
          <b-form-input v-model="search" class="mr-sm-2 input-search" placeholder="Search" ></b-form-input>
          </b-navbar>
    </div>
    </div>
    <b-button :to="'/addStudent'" class="btn-add" variant="outline-info">
            Thêm Sinh Viên
        </b-button>
    <b-table id="my-table"
      :per-page="perPage"
      :current-page="currentPage"
      small class="table" :items="resultQuery" :fields="fields" :tbody-tr-class="rowClass">
      <template v-slot:cell(#)="{index}">
      <span >
          {{index+1}}
    </span>
    </template>
      <template v-slot:cell(className)="{ item }">
      <span v-if="getClass(item.class)">
          {{ getClass(item.class).className}}
    </span>
    </template>
      <template v-slot:cell(age)="{ item }">
      <span>
          {{ getAge(item.dateOfBirth)}}
    </span>
    </template>
        <template v-slot:cell(action)="{ item }">
      <span>

        <b-button :to="'/editStudent/'+item.id">
            Sửa
        </b-button>
        <b-button variant="danger" @click="deleteItem(item.id)">
         Xóa
        </b-button>
    </span>
    </template>
    </b-table>
  </div>
  <b-pagination class="panigation-content"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
  </template>
<script>
export default {

  data () {
    return {
      perPage: 5,
        currentPage: 1,
      label:"Sinh Viên",
      fields: ['#', 'studentName', 'className', 'age', 'action'],
      items: JSON.parse(localStorage.getItem("students")),
      classlist: JSON.parse(localStorage.getItem("classes")),
      search:null
    }
  },
  methods: {
    rowClass (item, type) {
      if(!item || type !== 'row') return
    },
    deleteItem (id) {
      this.items = this.items.filter(element => element.id !== id)
      localStorage.setItem("students",JSON.stringify(this.items))
    },
    
    getClass (classId) {
      var x = this.classlist.find(function(e){
        if(e.id == classId){
          return e.className
        }
      })
      return x
    },
    getAge (birthday) {
      var ageDifMs = Date.now() - Date.parse(birthday)
      var ageDate = new Date(ageDifMs) // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
  },
  computed: {
      rows() {
        return this.items.length
      },
      resultQuery(){
      if(this.search){
      return this.items.filter((item)=>{
        return this.search.toLowerCase().split(' ').every(v => item.studentName.toLowerCase().includes(v))
      })
      }else{
        return this.items;
      }
    }
    }
}
</script>
  <style>
  #header{
    margin: 0 40px;
  }
  .table{
    width: 90%;
    margin: auto;
  }
  .search-label{
    list-style: none;
    margin: 30px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .search{
    display: flex;
    flex-direction: column;
  }
    .seach-add{
        display: flex;
    }
    .btn-add{
        margin: 0 80px;
        height: 50px;
    }
    .search-form{
        display: flex;
        flex-direction: row;
    }
    .input-search{
        display: block;
    }
    .btn-search{
        float: right;
    }
    .content{
          display: flex;
          flex-direction: column;
      }
    .panigation-content{
        margin:auto;
      }
  </style>