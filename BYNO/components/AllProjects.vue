<template>
  <div class="all-projects">
      <div class="list-projects">
        
          <div class="projet"  v-for="(projet,key) in projets" :key="key">
            <div class="projet-img" :style="' background-image: url(' + projet.imgUrl + ')'">

          </div>
             <h3>{{projet.name}}</h3>
          </div>
      </div>
  </div>
</template>

<script>

export default {
      data() {
    return{
       projets: [
         {
           name: "Design",
           imgUrl: '_nuxt/assets/img/exemples/projet-1.jpg'
         },
         {
           name: "Logos",
           imgUrl: "_nuxt/assets/img/exemples/projet-2.jpg"
         },
         {
           name: "Pop Art",
           imgUrl: "_nuxt/assets/img/exemples/projet-3.jpg"
         },
         {
           name: "Events",
           imgUrl: "_nuxt/assets/img/exemples/projet-4.jpg"
         },
         {
           name: "PAO",
           imgUrl: "_nuxt/assets/img/exemples/projet-5.jpg"
         },
         {
           name: "Communication",
           imgUrl: "_nuxt/assets/img/exemples/projet-6.jpg"
         },
         {
           name: "Ouais, c'est Michel...",
           imgUrl: "_nuxt/assets/img/exemples/projet-7.jpg"
         },
         {
           name: "Au nom du ciel éternel",
           imgUrl: "_nuxt/assets/img/exemples/projet-8.jpg"
         }
         
       ]
    }
  },
}
</script>

<style scoped>
.all-projects {
  width: 85%;
}

.list-projects {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

}

.projet{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
    
}
.projet-img {
  border: 1px solid grey;
  background-repeat: no-repeat;
  height: 10rem;
  width: 70%;
  background-size: cover;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;

}

.projet-img:hover {
  transition: all 0.4s ease-in-out;
  transform: scale(1.04);
}

h3 {
  text-align: center;
  font-family: mplusmedium;
  font-size: 1rem;
  margin-bottom: 3.5rem;
}
</style>