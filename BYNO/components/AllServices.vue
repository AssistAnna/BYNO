<template>
  <div class="all-services">
    <!--Version PC et tablettes-->
    <div class="version-pc">
      <div class="bloc" data-aos="fade-right">
          <img src="/img/service-img-bloc1.jpg" alt="image vaisseau spatial" class="img-bloc">
          <div class="title-text">
            <h3>Notre approche</h3>
            <p>Byno est un studio spécialisé dans la production audiovisuelle et sonore, offrant une approche collaborative pour la réalisation de vidéos. Chaque projet est traité avec une attention particulière, car il porte en lui son message néessitant ainsi une approche personnalisée.</p>
          </div>
      </div>
      <div class="bloc bloc2" data-aos="fade-left">
          <div class="title-text">
            <h3>Qualité sound design</h3>
            <p>Byno vous propose une qualité de sound design inégalée, surpassant toute possibilité offerte par les robots ou les algorithmes. Il répond à vos exigences avec une précision minutieuse, prenant en compte les moindes détails de votre demande.</p>
          </div>
          <img src="/img/service-img-bloc2.jpg" alt="image vaisseau spatial" class="img-bloc img2">
      </div>
    </div>
     <!--Version mobile-->
     <div class="version-mobile">
      <div class="bloc-mobile">
          <img src="/img/service-img-bloc1.jpg" alt="image vaisseau spatial" class="img-bloc">
          <div class="title-text">
            <h3>Notre approche</h3>
            <p>Byno est un studio spécialisé dans la production audiovisuelle et sonore, offrant une approche collaborative pour la réalisation de vidéos. Chaque projet est traité avec une attention particulière, car il porte en lui son message néessitant ainsi une approche personnalisée.</p>
          </div>
      </div>
      <div class="bloc-mobile">
          <div class="title-text">
          <img src="/img/service-img-bloc2.jpg" alt="image vaisseau spatial" class="img-bloc img2">
            <h3>Qualité sound design</h3>
            <p>Byno vous propose une qualité de sound design inégalée, surpassant toute possibilité offerte par les robots ou les algorithmes. Il répond à vos exigences avec une précision minutieuse, prenant en compte les moindes détails de votre demande.</p>
          </div>
      </div>
     </div>
  </div>
</template>

<style scoped>
.all-services {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

}
.version-pc {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.version-mobile {
  display: none;
}
.bloc {
    width: 70%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(71, 70, 70, 0.404);
    margin-bottom: 7rem;
    border-radius: 6px;
}

.img-special {
  display: none;
}

.img-bloc {
    height: 100%;
    width: 30vw;

}
.title-text {
    padding-left: 2.7rem;
    width: 100%;

}
h3 {
  font-family: 'mpluslight';
  font-size: 2.1rem;
  margin: 0;

}
p {
  font-family: 'mplusthin';
  font-size: 0.9rem;
  text-align: justify;
  padding-right: 4rem;
  font-weight: bold;

}



/* version mobile et tablette */
@media (min-width: 820px) and (max-width: 1050px) {
  .bloc {
    height: 30vh;
    width: 85%;
  }
  .img-bloc {
    height: 80%;
  }
  h3 {
    font-size: 1.3rem;
  }
  
}
@media screen and (max-width: 819px) {
  .version-pc {
    display: none;
  }
  .version-mobile {
    display: block;
  }
  .bloc-mobile {
    margin: 5rem 0;
  }
  .title-text {
    padding: 0;
    text-align: center;
  }
  h3 {
    margin: 2rem 0;
    font-size: 1.6rem;
  }
  p {
    text-align: center;
    font-size: 1.1rem;
    padding: 0;
    margin: 1.5rem;
  }
  .img-bloc {
    width: 100vw;
    
    
  }
}
</style>