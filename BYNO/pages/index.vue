<template>
  <div class="page-index">
    <h1>Site en construction</h1>
    <div class="logo-byno"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@font-face {
  font-family: 'mplusblack';
  src: url('~assets/fonts/MPLUS1p-Black.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusbold';
  src: url('~/assets/fonts/MPLUS1p-Bold.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusextra';
  src: url('~assets/fonts/MPLUS1p-ExtraBold.ttf') format('opentype'),
}

@font-face {
  font-family: 'mpluslight';
  src: url('~assets/fonts/MPLUS1p-Light.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusmedium';
  src: url('~assets/fonts/MPLUS1p-Medium.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusregular';
  src: url('~assets/fonts/MPLUS1p-Regular.ttf') format('opentype'),
}

@font-face {
  font-family: 'mplusthin';
  src: url('~assets/fonts/MPLUS1p-Thin.ttf') format('opentype'),
}

.page-index {
  padding-top: 8rem;
  height: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
h1 {
  width: 100%;
  text-align: center;
}
.logo-byno {
  background-image: url('assets/img/logo-byno.png');
  width: 40rem;
  height: 40rem;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>