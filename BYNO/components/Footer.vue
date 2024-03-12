<template>
  <div class="footer">
      <h2>BYNO</h2>
      <div class="bloc">
        <p class="text">Je suis passionné par mon métier et je m'engage à vous offrir des services de qualité aussi bien dans le sound design que la vidéo pour représenter au mieux votre entreprise ou vos événements. </p>
        <div class="liste-pages">
          <nuxt-link to="/">Acceuil</nuxt-link>
          <nuxt-link to="/">Services</nuxt-link>
          <nuxt-link to="/">Production</nuxt-link>
          <nuxt-link to="/">A propos</nuxt-link>
        </div>
        <div class="bloc-contact">
          <nuxt-link to="/">Me contacter</nuxt-link>
          <div class="liste-socials">
            <nuxt-link to="/"><img src="~assets/icon/icon-instagram.png" alt="logo instagram"></nuxt-link>
            <nuxt-link to="/"><img src="~assets/icon/icon-linkedin.png" alt="logo linkedin"></nuxt-link>
            <nuxt-link to="/"><img src="~assets/icon/icon-youtube.png" alt="logo youtube"></nuxt-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  padding-left: 2rem;
  background-color: rgb(39, 38, 38);
  padding-top: 2rem;

}

h2 {
  font-family: "mplusmedium";
  font-size: 2.6rem;
}
.bloc {
  display: flex;
  padding-bottom: 5rem;
  

}

.text {
  width: 36%;
  font-family: "mpluslight";
  font-weight: bold;
  font-size: 1.3rem;
  padding-right: 6rem;
}

.liste-pages {
  width: 33%;
  display: flex;
  flex-direction: column;
  font-family: "mplusmedium";
  font-size: 1.5rem;
}

.bloc-contact a {
  font-family: "mplusmedium";
  font-size: 2.5rem;
  

  
}

.liste-socials {
  margin-top: 1.5rem;
}

.liste-socials a {
  padding-right: 2rem;
  
}

img {
  height: 3.5rem;
}
</style>