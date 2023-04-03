<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand   id="header" href="#/"><h2>{{title}}</h2></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'/Student'"><h3>Student</h3></b-nav-item>
        <b-nav-item :to="'/Classes'"><h3>Class</h3></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: "ezStudent"
    }
  }
}
</script>
<style>
#header{
  margin: 0 40px;
}
</style>