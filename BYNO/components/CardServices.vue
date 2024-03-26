<template>
  <div class="cards-bloc">
      <div class="card" v-for="(card,key) in cards" :key="key">
        <div class="card-icon" :style="' background-image: url(' + card.iconUrl + ')'"></div>
        <div class="liste-text">
            <p>{{card.text1}}</p>
            <p>{{card.text2}}</p>
            <p>{{card.text3}}</p>
            <p>{{card.text4}}</p>
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
           iconUrl: "_nuxt/assets/icon/services1.png",
           text1: "Relation client",
           text2: "Devis",
           text3: "Organisation du planning",
           text4: "Accompagnement jusqu'à la diffusion",
         },
         {
           id: 1,  
           iconUrl: "_nuxt/assets/icon/services3.png",
           text1: "Brainstorming",
           text2: "Script / Scénario",
           text3: "Note d'intention",
           text4: "Repérages",
         },
         {
           id: 2,  
           iconUrl: "_nuxt/assets/icon/services2.png",
           text1: "Tournage / Montage",
           text2: "Animation / Motion design",
           text3: "Voix off / Enregistrement",
           text4: "Mixage / Mastering",
         },
         {
           id: 3,  
           iconUrl: "_nuxt/assets/icon/services4.png",
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
        margin-bottom: 8rem;
        width: 80%;
        
    }

    .card {
        width:90%;
        height: 90%;
        background-color: rgba(71, 70, 70, 0.404);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 2px;
        border: 0.1px solid rgba(0, 159, 227, 0.349);

        -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 31px 11px rgba(255,255,254,0.09); 
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 31px 11px rgba(255,255,254,0.09);
      transition: 0.4s ease-in-out;

        

    }
    .card:hover {
      transition: all 0.4s ease-in-out;
      transform: scale(1.04);
      border: 0.1px solid rgba(0, 159, 227, 0.973);

        
    }
    .card-icon {
        height: 10rem;
        width: 5rem;
        background-repeat: no-repeat;
        margin-top: 2.5rem;
    }
    .liste-text {
        width: 90%;
        margin-left: 2rem;
        padding-bottom: 3rem;
    }
    p {
        font-size: 1.4rem;
        font-family: mpluslight;
        font-weight: bold;
    }

</style>