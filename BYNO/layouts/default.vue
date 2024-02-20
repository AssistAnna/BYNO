<template>
  <div class="all-site">
      <Navbar/>
      <slot/>
  </div>
</template>


<style>

body {
  margin: 0px;
  height: 30rem;
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