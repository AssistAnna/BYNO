<template>
  <div class="retouches">
    <div class="bloc-title">
        <h2>Retouches</h2>
        <div class="soulignement"></div>
    </div>
    <h3>Donner un autre sens à la photographie</h3>
    <div class="img1"></div>
    <div class="bloc-img-text">
        <div class="img2"></div>
        <h4>Une simple image ou un simple regard peut communiquer une multitude de significations.</h4>
    </div>
    <Carousel/>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.retouches {
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2 {
    font-size: 5rem;
    font-family: mplusmedium;
    margin-bottom: 0;
  }
  .soulignement {
    margin: 3rem 0 0 0;
    border: 3px solid #009FE3;
    width: 100%;
    border-radius: 20%;
  }
.bloc-title {
    padding-top: 2rem;
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
}

h3 {
    text-align: center;
    font-family: mpluslight;
    font-size: 3.6rem;
    margin-bottom: 7rem;
}
.img1 {
    border-radius: 4px;
    height: 58rem;
    width: 80%;
    background-repeat: no-repeat;
    background-size: 100% 110%;
    background-image: url('assets/img/retouches-img1.JPG');
    margin-bottom: 7rem;
  }

  .bloc-img-text {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin-bottom: 7rem;

  }
  .img2 {
    border-radius: 4px;
    height: 58rem;
    width: 80%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('assets/img/retouches-img2.jpeg');
    margin: 2rem;
    border: 0.1px solid rgba(0, 159, 227, 0.973);

  }
  h4 {
    width: 80%;
    text-align: center;
    font-family: mpluslight;
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }

</style>