<template>
  <div class="footer">
    <nuxt-link class="logo" to="/"><NuxtImg class="logo-img" src="/img/logo-byno.png" /></nuxt-link>
    <div class="bloc">
      <p class="text">Je suis passionné par mon métier et je m'engage à vous offrir des services de qualité aussi bien dans le sound design que la vidéo pour représenter au mieux votre entreprise ou vos événements. </p>
      <div class="liste-pages">
        <nuxt-link  class="" v-for="(item,key) in menu" :key="key" :to="{name: item.url}"><h2>{{item.name}}</h2></nuxt-link>
      </div>
      <div class="bloc-contact">
        <nuxt-link class="btn-contact" to="/Contact">Me contacter</nuxt-link>
        <div class="liste-socials">
          <nuxt-link to="https://www.instagram.com/studio_byno?igsh=eHQ2c3VvcXdlaW00&utm_source=qr"><img src="/icon/icon-instagram.png" alt="logo instagram"></nuxt-link>
          <nuxt-link to="https://www.linkedin.com/in/no%C3%A9-chardon-0b2032237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src="/icon/icon-linkedin.png" alt="logo linkedin"></nuxt-link>
         <!--
          en attente de création page yotube
          <nuxt-link to="/"><img src="/icon/icon-youtube.png" alt="logo youtube"></nuxt-link>
         -->
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
        url: "mentions-legales",
        name: "Mentions légales"
       },
       {
        url: "politique-confidentialite",
        name: "Politique de confidentialité"
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
  height: 6rem;
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

.btn-contact {
  font-family: "mplusmedium";
  font-size: 1.2rem;
  border: 1.5px solid #009FE3;
  border-radius: 6px;
  padding: 0.5rem 1.5rem;
  transition: all 0.2s ease-in-out;

}

.btn-contact:hover {
  color: #009FE3;
  font-weight: bold;
}

.liste-socials {
  margin-top: 1.5rem;
}

.liste-socials a {
  padding-right: 1rem;
  
}


img {
  height: 2rem;
  transition: all 0.2s ease-in-out;

}

img:hover {
  transform: scale(1.05);
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

