<template>
  <div class="page-index">
    <AccueilSection1/>
    <p class="text-presentation" data-aos="fade-up">Je suis passionné par mon métier et je m'engage à vous offrir des services de qualité aussi bien dans le sound design que la vidéo pour représenter au mieux votre entreprise ou vos événements.</p>
    <h2 class="title-h2 special" data-aos="fade-up">Productions</h2>
    <AllProjects data-aos="fade-up"/>
    <h2 class="title-h2" data-aos="fade-up">Services</h2>
    <AllServices />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Studio-Byno'
})
</script>


<style>
@font-face {
  font-family: 'mplusblack';
  src: url('/fonts/MPLUS1p-Black.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusbold';
  src: url('/fonts/MPLUS1p-Bold.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusextra';
  src: url('/fonts/MPLUS1p-ExtraBold.ttf') format('opentype'),
}

@font-face {
  font-family: 'mpluslight';
  src: url('/fonts/MPLUS1p-Light.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusmedium';
  src: url('/fonts/MPLUS1p-Medium.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusregular';
  src: url('/fonts/MPLUS1p-Regular.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusthin';
  src: url('/fonts/MPLUS1p-Thin.ttf') format('opentype'),
}
.hidden-title {
  color: black;
  margin: 0;
}
.box-shadow {
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 31px 11px rgba(255,255,254,0.09); 
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 31px 11px rgba(255,255,254,0.09);
}

.blue-shadow {
  -webkit-box-shadow: 1px 1px 42px -14px rgba(0,159,227,0.89); 
box-shadow: 1px 1px 42px -14px rgba(0,159,227,0.89);
}

.page-index {
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.text-presentation {
  margin: 5rem 10rem;
  font-size: 1.8rem;
  font-family: mplusbold;
  text-align: center;
}

.title-h2 {
    font-size: 3rem;
    font-family: mplusmedium;
    text-align: center;
    padding-bottom: 2rem;
    margin-bottom: 5rem;
    text-decoration: underline;
    text-underline-offset: 1.6rem;
    text-decoration-color: #009FE3;
}
.special {
    margin-top: 0;
  }
.btn-retour {
  color: #009FE3;
  font-family: 'mplusextra';
  text-decoration: underline;
  text-underline-offset: 0.8rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  
}

/* version mobile */
@media screen and (max-width: 900px) {
  .text-presentation {
    margin: 4rem 2rem;
    font-size: 1.1rem;
  }
  .title-h2 {
    padding-bottom: 1rem;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-underline-offset: 1.1rem;
    line-height: 3.7rem;
  }
  
}

/*

*/
</style>