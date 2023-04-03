<template>
    <div class="content">
        <div>
      <div class="search-label">
          <h2 class="label">Danh Sách {{label}} </h2>
          <div class="seach">
            <b-navbar type="light">
            <b-form-input v-model="search" class="mr-sm-2 input-search" placeholder="Search"></b-form-input>
            </b-navbar>
      </div>
      </div>
      <b-button :to="'/addClass'" class="btn-add" variant="outline-info">
              Thêm Lớp
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
          <template v-slot:cell(action)="{ item }">
        <span>
  
          <b-button :to="'/editClass/'+item.id">
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
        label:"Lớp",
        fields: ['#', 'className','action'],
        items: JSON.parse(localStorage.getItem("classes")),
        search:null
      }
    },
    methods: {
      rowClass (item, type) {
        if(!item || type !== 'row') return
      },
      deleteItem (id) {
        this.items = this.items.filter(element => element.id !== id)
        this.items = this.items.filter(e => e.grade !== id)
        localStorage.setItem("classes",JSON.stringify(this.items))
      }
    },
    computed: {
      rows() {
        return this.items.length
      },
      resultQuery(){
      if(this.search){
      return this.items.filter((item)=>{
        return this.search.toLowerCase().split(' ').every(v => item.className.toLowerCase().includes(v))
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
      width: 80%;
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
        color: #198754;
      }
    </style>