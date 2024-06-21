<template>
  <div class="all-site">
      <Navbar/>
      <NuxtPage/>
      <Footer/>
     <!--
        useSeoMeta({
    title: 'studio-byno',
    ogTitle: 'studio Byno',
    description: 'Agence de sound design et communication audiovisuelle',
    ogDescription: 'Agence de sound design et communication audiovisuelle',
    ogImage: 'https://www.studio-byno.fr/img/logo-fond-noir.png',
    twitterCard: 'summary_large_image',
  })
     -->
  </div>
</template>
<script setup>

</script>

<style>

body {
  margin: 0px;
  height: 30rem;
  background-color: black;
  overflow-x: hidden;


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