<template>
  <nav class="navBar">
   <nuxt-link class="logo" to="/"><div class="logo-img"></div></nuxt-link>
   <div class="liste-onglets" :class="{ 'active2': showMobileMenu }">
       <img src="~assets/img/logo-byno-avececrit.png" alt="logo design byno">
       <nuxt-link v-for="(item,key) in menu" :key="key" :to="{name: item.url}"><h2>{{item.name}}</h2></nuxt-link></div>
   <div class="liste-socials">
       
       <nuxt-link to="/"><img src="~assets/icon/icon-instagram.png" alt="logo instagram"></nuxt-link>
       <nuxt-link to="/"><img src="~assets/icon/icon-linkedin.png" alt="logo linkedin"></nuxt-link>
       <nuxt-link to="/"><img src="~assets/icon/icon-youtube.png" alt="logo youtube"></nuxt-link>
   </div>
   <img v-show="!showMobileMenu" @click="toggleMenu" class="menu-burger" src="~assets/icon/menu-burger.png" alt="open menu">
   <img v-show="showMobileMenu" @click="toggleMenu" class="cross menu-burger" src="~assets/icon/cross-menu-burger.png" alt="close menu">
  </nav>
</template>
 
<script>
export default {
watch: {
   '$route' () {
       this.showMobileMenu = false;
   }
},
data() {
   return {
       showMobileMenu: false,
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
       toggleMenu() {
           this.showMobileMenu = !this.showMobileMenu;
           console.log('isToggled : ' + this.showMobileMenu)
       }
       
   }
}
</script>

<style scoped>
* {
   margin: 0;
   padding: 0;
   text-decoration: none;
   list-style: none;
   
}

.navBar {
   font-family: mplusbold;
   position: absolute;
   top: 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100vw;
   box-sizing: border-box;
   background-color: rgb(39, 38, 38);

}
.navBar a {
   color: white;
}

.logo-img {
   background-image: url('assets/img/logo-byno.png');
   height: 5rem;
   width: 5rem;
   background-size: contain;
   background-repeat: no-repeat;
}

.liste-onglets {
   display: flex;
}

.liste-onglets .router-link-exact-active {
 color: #009FE3;
 border-bottom: 1px solid #009FE3;
}

.liste-onglets img {
   display: none;
}

.liste-onglets a {
   margin: 0 1rem;
   font-size: 0.7rem;
}

.liste-onglets a.active {
   color: #009FE3;
   font-size: 0.8rem;
}

.liste-socials img {
 margin-right: 1.2rem;
 height: 2rem;
}

.menu-burger {
   display: none;
   height: 2.5rem;
   width: 2.5rem;
   position: absolute;
   right: 12vw;
   animation: fadeInAnimation ease 0.4s;
   animation-iteration-count: 1;
   animation-fill-mode: forwards;
}

.cross {
   height: 3rem;
   width: 3rem;
   animation: fadeInAnimation ease 0.4s;
   animation-iteration-count: 1;
   animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
   0% {
       opacity: 0;
   }

   100% {
       opacity: 1;
   }
}


/* version mobile */
@media screen and (max-width: 900px) {
   .navBar {
       padding: 0;
   }
   .menu-burger{
       display: block;
   }
   
   .liste-socials {
       display: none;
   }
   .liste-onglets img {
       width: 45vw;
       margin-bottom: 3rem;
       display: block;
   }
   .liste-onglets {
       top: 0;
       left: 0;
       position: absolute;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       background-color: rgba(255, 255, 255, 0.281);
       backdrop-filter: blur(7px);
       width: 100%;
       height: 100vh;
       margin-left: -100% ;
       transition: all 0.4s ease;

   }
   .active2 {
       margin-left: 0;
   }
   .liste-onglets a {
       margin: 0.6rem 1rem;
       font-size: 1.1rem;
   }
}

</style>
 
 