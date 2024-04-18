<template>
  <div class="all-site">
      <Navbar/>
      <slot/>
      
      <Footer/>
     
  </div>
</template>
<script>

export default {
  

}
</script>

<style>

body {
  margin: 0px;
  height: 30rem;
  background-color: black;

}
.all-site {
  background-color: black;
  color: white;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: white;
}
</style>