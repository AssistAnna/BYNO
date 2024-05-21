<template>
  <div class="all">
    <div class="cards-bloc">
        <div class="card box-shadow" v-for="(card,key) in cards" :key="key" >
          <div class="card-icon" :style="' background-image: url(' + card.iconUrl + ')'"></div>
          <div class="liste-text">
              <p>{{card.text1}}</p>
              <p>{{card.text2}}</p>
              <p>{{card.text3}}</p>
              <p>{{card.text4}}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return{
       cards: [
         {
           id: 0,  
           iconUrl: "_nuxt/static/icon/services1.png",
           text1: "Relation client",
           text2: "Devis",
           text3: "Organisation du planning",
           text4: "Accompagnement jusqu'à la diffusion",
         },
         {
           id: 1,  
           iconUrl: "_nuxt/static/icon/services3.png",
           text1: "Brainstorming",
           text2: "Script / Scénario",
           text3: "Note d'intention",
           text4: "Repérages",
         },
         {
           id: 2,  
           iconUrl: "_nuxt/static/icon/services2.png",
           text1: "Tournage / Montage",
           text2: "Animation / Motion design",
           text3: "Voix off / Enregistrement",
           text4: "Mixage / Mastering",
         },
         {
           id: 3,  
           iconUrl: "_nuxt/static/icon/services4.png",
           text1: "Encodage tous supports",
           text2: "Envoi des fichiers dématerialisés",
           text3: "",
           text4: "",
         },

         
         
       ]
    }
  },
}
</script>

<style scoped>
  .cards-bloc {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 5rem;
      width: 100%;
      
  }

  .card {
    height: 13rem;
    width: 13rem;
    margin: 0.6rem; 
    padding: 1.4rem;
    background-color: rgba(71, 70, 70, 0.404);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    border: 0.1px solid rgba(0, 159, 227, 0.349);
    transition: 0.4s ease-in-out;
  }
  .card:hover {
    transition: all 0.4s ease-in-out;
    transform: scale(1.04);
    border: 0.1px solid rgba(0, 159, 227, 0.973); 
  }
  .card-icon {
      height: 6rem;
      width: 3rem;
      background-repeat: no-repeat;
      background-size: 100%;
  }
  .liste-text {
    width: 100%;
  }
  p {
      font-size: 0.7rem;
      font-family: mpluslight;
      font-weight: bold;
      text-align: center;
      line-height: 1rem;
  }

  /* version mobile */
@media screen and (max-width: 900px) {
    
    .card {
      border: 0.1px solid rgba(0, 159, 227, 0.973); 
    }
    .card-icon {
      height: 3rem;
    }
    .liste-text {
      padding-top: 1.2rem;
    }
}

@media screen and (max-width: 700px) {
  .cards-bloc {
      display: flex;
      flex-direction: column;
    }
}


</style>