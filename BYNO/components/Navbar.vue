<template>
<div class="Navbar">
  <nuxt-link class="logo" to="/"><div class="logo-img"></div></nuxt-link>
  
  <div class="liste-onglets">
    <nuxt-link to="/"><h2 class="onglet">Accueil</h2></nuxt-link>
    <nuxt-link to="/Services"><h2 class="onglet">Services</h2></nuxt-link>
    <nuxt-link to="/Projets"><h2 class="onglet">Production</h2></nuxt-link>
    <nuxt-link to="/Apropos"><h2 class="onglet">A propos</h2></nuxt-link>
    <nuxt-link to="/Contact"><h2 class="onglet">Contact</h2></nuxt-link>
    
    
    
  </div>
  <div class="liste-socials">
    <nuxt-link to="/"><img src="~assets/icon/icon-instagram.png" alt="logo instagram"></nuxt-link>
    <nuxt-link to="/"><img src="~assets/icon/icon-linkedin.png" alt="logo linkedin"></nuxt-link>
    <nuxt-link to="/"><img src="~assets/icon/icon-youtube.png" alt="logo youtube"></nuxt-link>
    
    
   
  </div>
 
</div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return{
       previousPosition: 0,
    }
  },
methods: {
},
mounted() {
  let self = this;
    window.addEventListener("scroll", function(event) {
      let top = this.scrollY;

      if ( top > self.previousPosition) {
          self.$el.classList.add('scrolled')
      }else {
          self.$el.classList.remove('scrolled')
      }
      self.previousPosition = top;
    });
}

}
</script>


<style scoped>


.Navbar {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: rgb(39, 38, 38);
  transition: opacity 0.6s ease-in-out;
  
}

.scrolled {
  opacity: 0.6;
  transition: opacity 0.6s ease-in-out;

}

.logo {
  flex: 2;

}

.logo-img {
  background-image: url('assets/img/logo-byno.png');
  height: 7rem;
  background-size: contain;
  background-repeat: no-repeat;
}

.liste-onglets {
  flex: 5;
 display: flex;
 justify-content: space-around;

}


h2 {
  font-family: 'mplusbold';
  font-size: 1.5rem;
}
.liste-onglets .router-link-exact-active {
  text-decoration: underline !important;
}

.liste-socials {
  flex: 2;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
}

.liste-socials img {
  margin-right: 1rem;
  height: 2.5rem;
}


</style>
