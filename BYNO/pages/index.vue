<template>
  <div class="page-index">
    <div class="img-accueil"></div>
    <p class="text-presentation">Je suis passionné par mon métier et je m'engage à vous offrir des services de qualité aussi bien dans le sound design que la vidéo pour représenter au mieux votre entreprise ou vos événements.</p>
    <h2 class="title-h2">Projets</h2>
    <AllProjects/>
    <h2 class="title-h2">Services</h2>
    <AllServices />
  </div>
</template>

<script>

export default {
  

}
</script>

<style>
/*
$screen-ipad-paysage: 1024px; // 1024 -> Ipad paysage
$screen-xs: 480px; // 480 à 767 -> XS
$screen-sm: 576px; // <= 576 à 767 -> SM
$screen-md: 768px; // <= 1199 -> MD -> Ipad portrait
$screen-lg: 992px; // <= 1199 -> lg
$screen-xl: 1200px; // <= -> xl
$screen-xxl: 1440px; // <= -> xxl

 @media screen and (max-width: 880px) {
  
    }

    @media screen and (max-width: 576px) {
      screen sm
    }
*/
@font-face {
  font-family: 'mplusblack';
  src: url('~/assets/fonts/MPLUS1p-Black.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusbold';
  src: url('~/assets/fonts/MPLUS1p-Bold.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusextra';
  src: url('~/assets/fonts/MPLUS1p-ExtraBold.ttf') format('opentype'),
}

@font-face {
  font-family: 'mpluslight';
  src: url('~/assets/fonts/MPLUS1p-Light.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusmedium';
  src: url('~/assets/fonts/MPLUS1p-Medium.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusregular';
  src: url('~/assets/fonts/MPLUS1p-Regular.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusthin';
  src: url('~/assets/fonts/MPLUS1p-Thin.ttf') format('opentype'),
}

.box-shadow {
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 31px 11px rgba(255,255,254,0.09); 
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 31px 11px rgba(255,255,254,0.09);
}

.page-index {
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
}
.img-accueil {
  height: 30rem;
  width: 100%;
  background-image: url('assets/img/8000x5500-ANNA.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: 3rem;

}
.text-presentation {
  margin: 0rem 10rem;
  font-size: 1.8rem;
  font-family: mplusbold;
  text-align: center;
  padding-bottom: 4rem;
  padding-top: 4rem;
}

.title-h2 {
    font-size: 3rem;
    font-family: mplusmedium;
    text-align: center;
    border-bottom: 1px solid #009FE3;
    padding-bottom: 2rem;
    margin-bottom: 5rem;
    width: 35rem;

}

</style>