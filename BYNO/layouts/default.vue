<template>
  <div class="all-site">
      <Navbar/>
      <NuxtPage/>
      
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

/*pages transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>