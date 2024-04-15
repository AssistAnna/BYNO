<template>
  <header>
    <div class="Navbar">
      <div v-show="displayNavbarDesktop" class=" navbar-desktop">
        <!-- navbar desktop and tablet paysage -->
      <nuxt-link class="logo" to="/"><div class="logo-img"></div></nuxt-link>
  
  <div class="liste-onglets">
    <nuxt-link  v-for="(item,key) in menu" :key="key" :to="{name: item.url}"><h2 class="onglet">{{item.name}}</h2></nuxt-link>
  </div>
  <div class="liste-socials">
    <nuxt-link to="/"><img src="~assets/icon/icon-instagram.png" alt="logo instagram"></nuxt-link>
    <nuxt-link to="/"><img src="~assets/icon/icon-linkedin.png" alt="logo linkedin"></nuxt-link>
    <nuxt-link to="/"><img src="~assets/icon/icon-youtube.png" alt="logo youtube"></nuxt-link>
  </div>
      </div>
    

    <!-- navbar mobile -->
    <div class="navbar-mobile" v-show="!displayNavbarDesktop">
      <nuxt-link class="logo" to="/"><div class="logo-img-mobile"></div></nuxt-link>
    </div>
</div>
  </header>

</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return{
       previousPosition: 0,
       displayNavbarDesktop: true,
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
  },
methods: {
  hideDesktopNavbar() {
    let currentWidth = window.screen.width;
    if (currentWidth < 880){
      this.displayNavbarDesktop = !this.displayNavbarDesktop
    }
    // console.log('current width : ' + currentWidth)
    },
},
mounted() {
  this.hideDesktopNavbar();
}

}
</script>


<style scoped>

.Navbar {
  z-index: 100;
  position: fixed;
  width: 100%;

}
.navbar-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(39, 38, 38);
}


.logo {
  flex: 2;

}

.logo-img {
  background-image: url('assets/img/logo-byno.png');
  height: 5rem;
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
  font-size: 1rem;
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
  margin-right: 1.2rem;
  height: 2rem;
}

/*version mobile*/
.logo-img-mobile {
  background-image: url('assets/img/logo-byno.png');
  height: 6rem;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  background-color: rgb(39, 38, 38);
}


</style>
