<template>
  <div class="apropos">
    <h2 class="title-h2">A propos</h2>
    <div class="bloc-img1">
      <div class="img1"></div>
    </div>
    <div class="bloc-text">
      <h3>Noé Chardon</h3>
      <h4>entrepreneur passionné</h4>
      <p>Passionné par la musique et la vidéo, mon objectif est de vous guider dans la conception de votre identité visuelle et dans le déploiement de votre communication sur les réseaux sociaux. Chaque projet que je réalise est conçu pour vous satisfaire et vous accompagner dans votre  développement.</p>
    </div>
    <!--
 
   <div class="img2"></div>
    -->
   

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.apropos {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

.bloc-img1 {
  width: 100%;
  display: flex;
  justify-content: center;
}

.img1 {
    height: 33rem;
    width: 60%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('assets/img/retouches-img1.png');
  }
.img2 {
    height: 24rem;
    width: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('assets/img/exemples/sponsors.png');
    margin-bottom: 5rem;
  }
  

  .bloc-text {
    font-family: mplusmedium;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 0;

  }
  h4 {
    text-align: center;
    font-size: 1.7rem;
  }

  p {
    text-align: center;
    font-family: mpluslight;
    font-weight: bold;
    font-size: 1.5rem;
    width: 70%;
  }
  @media (min-width: 901px) and (max-width: 1350px) {
    
  }

  @media screen and (max-width: 900px) {
    .img1 {
      width: 100%;
      height: 50vh;
    }
    .bloc-text h3 {
      font-size: 2.5rem;
    }
    .bloc-text h4 {
      font-size: 1.5rem;
    }
    .bloc-text p {
      width: 85%;
      font-size: 1.4rem;
      margin-bottom: 4rem;
    }
  }
  
</style>