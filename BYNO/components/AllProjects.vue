<template>
  <div class="all-projects">
    <div class="projet"  v-for="(projet,key) in projets" :key="key">
        <div @click="this.$router.push({path: projet.projetUrl})">
          <div class="projet-img" :style="' background-image: url(' + projet.imgUrl + ')'"></div>
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
           name: "Musique",
           imgUrl: '/img/musique-onde.svg',
           projetUrl: "Productions/musique"
         },
         {
           name: "Design",
           imgUrl: '/img/design-img3.png',
           projetUrl: "Productions/design"
         },
         {
           name: "Drone",
           imgUrl: '/img/productions/drone.jpg',
           projetUrl: "Productions/drone"
         },
         {
           name: "Vidéo",
           imgUrl: '/img/productions/video.jpg',
           projetUrl: "Productions/video"
         },
         {
           name: "Sound design",
           imgUrl: '/img/productions/sound-design.jpg',
           projetUrl: "Productions/sound-design"
         },
        
         
       ]
    }
  },
  methods: {
  
  }
}
</script>

<style scoped>

.all-projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.projet{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.projet-img {
  border: 1px solid grey;
  background-repeat: no-repeat;
  height: 10rem;
  width: 20vw;
  background-size: cover;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  margin: 0 1rem;

}

.projet-img:hover {
  transition: all 0.4s ease-in-out;
  transform: scale(1.04);
  cursor: pointer;
}

h3 {
  text-align: center;
  font-family: mplusmedium;
  font-size: 1rem;
  margin-bottom: 3.5rem;
}


/* version mobile */
@media screen and (max-width: 800px) {
  .all-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .projet-img {
    width: 55vw;
    height: 20vh;
  }
  h3 {
    font-size: 1.3rem;
  }

} 
</style>