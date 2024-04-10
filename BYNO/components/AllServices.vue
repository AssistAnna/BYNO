<template>
  <div class="all-services">
      <div class="bloc">
          <div class="img-bloc1"></div>
          <div class="title-text">
            <h3>Notre approche</h3>
            <p>Byno est un studio spécialisé dans la production audiovisuelle et sonore, offrant une approche collaborative pour la réalisation de vidéos. Chaque projet est traité avec une attention particulière, car il porte en lui son message néessitant ainsi une approche personnalisée.</p>
            <div v-show="isShown" class="button-area">
            <nuxt-link to="/Services">voir plus
            <img src="~assets/icon/arrow-right.png" alt="arrow right"></nuxt-link>
            
            </div>
          </div>
      </div>
      <div class="bloc">
          <div class="title-text">
            <h3>Qualité sound design</h3>
            <p>Byno vous propose une qualité de sound design inégalée, surpassant toute possibilité offerte par les robots ou les algorithmes. Il répond à vos exigences avec une précision minutieuse, prenant en compte les moindes détails de votre demande.</p>
            <div v-show="isShown" class="button-area">
            <nuxt-link to="/Services">voir plus
            <img src="~assets/icon/arrow-right.png" alt="arrow right"></nuxt-link>
            
            </div>
          </div>
          <div class="img-bloc2"></div>

      </div>
      
      
  </div>
</template>

<script>
export default {
  data () {
   return {
     isShown: false
   }
 }
}
</script>

<style scoped>
.all-services {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bloc {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(71, 70, 70, 0.404);
    margin-bottom: 7rem;
    border-radius: 6px;

    

}

.img-bloc1 {
    background-image: url('assets/img/exemples/img-bloc1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 20rem;
    width: 100%;

}

.img-bloc2 {
    background-image: url('assets/img/exemples/img-bloc2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 20rem;
    width: 100%;

}

.title-text {
    padding-left: 2.7rem;
    width: 100%;

}
h3 {
  font-family: 'mpluslight';
  font-size: 2.1rem;

}
p {
  font-family: 'mplusthin';
  font-size: 0.9rem;
  text-align: justify;
  padding-right: 4rem;
  font-weight: bold;

}
.button-area{
    width: 90%;
    display: flex;
    justify-content: right;
}
a {
    border: 1px solid white;
    padding: 1rem;
    border-radius: 30px;
    font-family: 'mplusmedium';
    font-size: 1.2rem;
    display: flex;
    
}
img {
    width: 2rem;
    margin-left: 0.5rem;
}

 /*
 display: grid;
    grid-template-columns: repeat(2, 1fr);
 
  */
</style>