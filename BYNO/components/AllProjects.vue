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
.ensemble {
  position: relative;
}
.bckg-img {
  height: 36vh;
  width: 22vw;
  border-radius: 6px;
  margin: 0 1.3rem;
  transition: all 0.4s ease-in-out;
  border: 0.8px solid black;

}
.bckg-img:hover {
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
/* version tablette */
@media (min-width: 601px) and (max-width: 1032px) {
  .bckg-img {
  height: 19vh;
  width: 24vw;
  margin: 0 1.3rem;
}
}

/* version mobile */
@media screen and (max-width: 600px) {
  .all-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bckg-img {
    width: 70vw;
    height: 30vh;
  }
  h3 {
    font-size: 1.3rem;
  }

} 
</style>

<template>
  <div class="all-projects">
    <div class="projet" v-for="(projet,key) in projets" :key="key">
        <div class="ensemble" @click="this.$router.push({path: projet.projetUrl})">
          <NuxtImg class="bckg-img blue-shadow" :src="projet.imgUrl" />
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