<template>
  <div class="footer">
    <nuxt-link class="logo" to="/"><div class="logo-img"></div></nuxt-link>
    <div class="bloc">
      <p class="text">Je suis passionné par mon métier et je m'engage à vous offrir des services de qualité aussi bien dans le sound design que la vidéo pour représenter au mieux votre entreprise ou vos événements. </p>
      <div class="liste-pages">
        <nuxt-link  class="" v-for="(item,key) in menu" :key="key" :to="{name: item.url}"><h2>{{item.name}}</h2></nuxt-link>
      </div>
      <div class="bloc-contact">
        <nuxt-link to="/">Me contacter</nuxt-link>
        <div class="liste-socials">
          <nuxt-link to="/"><img src="/icon/icon-instagram.png" alt="logo instagram"></nuxt-link>
          <nuxt-link to="/"><img src="/icon/icon-linkedin.png" alt="logo linkedin"></nuxt-link>
          <nuxt-link to="/"><img src="/icon/icon-youtube.png" alt="logo youtube"></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
       {
         url: "Services",
         name: "Services"
       },
       {
         url: "Productions",
         name: "Productions"
       },
       {
         url: "Retouches",
         name: "Retouches"
       },
       {
         url: "Apropos",
         name: "A propos"
       },
       {
         url: "Contact",
         name: "Contact"
       }
     ]
    }
  }

}
</script>

<style scoped>
.footer {
  padding-left: 2rem;
  background-color: rgb(39, 38, 38);

}

.logo-img {
  background-image: url('/img/logo-byno.png');
  height: 6rem;
  background-size: contain;
  background-repeat: no-repeat;
}

.bloc {
  display: flex;
  padding-bottom: 3rem;
  

}

.text {
  width: 40%;
  font-family: "mpluslight";
  font-weight: bold;
  font-size: 0.8rem;
  padding-right: 6rem;
}

.liste-pages {
  width: 18%;
  display: flex;
  flex-direction: column;
  
}

.liste-pages h2 {
  font-family: "mplusthin";
  font-size: 0.7rem;
  margin: 0.3rem 0;
}

.bloc-contact a {
  font-family: "mplusmedium";
  font-size: 1.2rem;
}

.liste-socials {
  margin-top: 1.5rem;
}

.liste-socials a {
  padding-right: 1rem;
  
}

.liste-socials a:hover {
  color: blue;
}

img {
  height: 2rem;
}

/* version mobile */
@media screen and (max-width: 900px) {
  .footer {
    padding: 0 1rem;
  }
  .bloc {
    flex-direction: column;
    align-items: center;
  }
  .logo-img {
    background-position: center;
  }
  .liste-pages {
    width: 100%;
    align-items: center;
    padding-bottom: 1rem;

  }
  
  .text {
    padding-right: 0;
    width: 100%;
    text-align: center;
  }

  .bloc-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}
}

</style>

