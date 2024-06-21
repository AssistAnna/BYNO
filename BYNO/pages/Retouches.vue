<template>
  <div class="retouches">
    <h2 class="title-h2"  data-aos="fade-up">Retouches</h2>
    <NuxtImg src="/img/retouches-img1.JPG" alt="image retouches" class="img1 blue-shadow" data-aos="fade-up"  data-aos-delay="300"/>
    <h3  data-aos="fade-up">Donner un autre sens à la photographie</h3>
    <div class="bloc-img-text">
      <div class="img2 box-shadow" data-aos="fade-right"></div>
      <h4 data-aos="fade-left">Une simple image ou un simple regard peut communiquer une multitude de significations.</h4>
    </div>
    <!--
    <Carousel/>
    
    -->

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  overflow-x: hidden;
}
.retouches {
    padding-top: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;;
}

h3 {
    text-align: center;
    font-family: mpluslight;
    font-size: 2rem;
    margin-bottom: 7rem;
}

.img1 {
    border-radius: 4px;
    height: 75vh;
    margin-bottom: 3rem;
  }

  .bloc-img-text {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin-bottom: 3rem;

  }
  .img2 {
    border-radius: 4px;
    height: 85vh;
    width: 60vw;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url('/img/retouches-img2.jpeg');
    margin: 2rem;
   

  }
  h4 {
    width: 80%;
    text-align: center;
    font-family: mpluslight;
    font-size: 1.3rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 821px) and (max-width: 1050px) {
    .img1 {
      height: 40vh
    }
    .img2 {
      height: 55vh;
    }
    .bloc-img-text {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 820px) {
    h3 {
      font-size: 1.5rem;
      margin: 4rem;
    }
    .img1 {
      height: 40vh;
    }
    .bloc-img-text {
      flex-direction: column;
      width: 100%;
      margin-bottom: 0;
      overflow-y: hidden;
    }
    h4 {
      font-size: 1.5rem;
    }
    .img2 {
      width: 100%;
      height: 50vh;
    }
  }

</style>