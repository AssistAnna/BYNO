<template>
  <div class="apropos">
    <h2 class="title-h2" data-aos="fade-up">A propos</h2>
    <div class="bloc-img1" data-aos="fade-up" data-aos-delay="300">
        <NuxtImg class="img1 blue-shadow " src="/img/apropos-img1.jpg" />
    </div>
    <div class="bloc-text" data-aos="fade-up">
      <h3>Noé Chardon</h3>
      <h4>entrepreneur passionné</h4>
      <p>Passionné par la musique et la vidéo, mon objectif est de vous guider dans la conception de votre identité visuelle et dans le déploiement de votre communication sur les réseaux sociaux. Chaque projet que je réalise est conçu pour vous satisfaire et vous accompagner dans votre  développement.</p>
    </div>

    <!--
    <p>Ils me font confiance : </p>
    <div class="bloc-logos">
      <div class="logo"  v-for="(logo,key) in logos" :key="key">
          <div class="logo-img" :style="' background-image: url(' + logo.imgUrl + ')'" alt="logo partenaire"></div>
        </div>
    </div>




    <div class="bloc-img1" data-aos="zoom-in">
      <div class="img1"></div>
    </div>
    -->
    
    </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {
          imgUrl:"/img/partenaires/logo-mazda.png"
        },
        {
          imgUrl:"/img/partenaires/logo-menton.png"
        },
        {
          imgUrl:"/img/partenaires/logo-R.png"
        },
        {
          imgUrl: "/img/partenaires/logo-chateau.png"
        }
      ]
    }
  }
}
</script>

<style scoped>
.apropos {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;

  }

.bloc-img1 {
  display: flex;
  justify-content: center;
}

.img1 {
    height: 80vh;
    border: 0.8px solid black;
    border-radius: 6px;
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

  .bloc-logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 5rem 3rem;
    box-sizing: border-box;
  }

  .logo{
    height: 30vh;
    width: 12vw;
    padding: 0.5rem;
  }

  .logo:nth-child(1) {
    width: 10vw;
  }
  .logo-img {
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-size: 100%;
  }
  @media (min-width: 801px) and (max-width: 1050px) {
    .img1 {
      width: 100%;
      height: 50vh;
    }
    .logo {
      height: 10vh;
    }
  }

  @media screen and (max-width: 800px) {
    .img1 {
      width: 100%;
      min-height: 55vh;
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
    .bloc-logos {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0 0 0;
    }
    .logo {
      height: 22vh;
      width: 50vw;
      padding-bottom: 2rem;
    }
    .logo:nth-child(1) {
      width: 45vw;
      height: 25vh;
    }
    .logo:nth-child(4) {
      width: 45vw;
      height: 20vh;
    }
  }
  
</style>