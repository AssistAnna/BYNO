<template>
  <div class="retouches">
    <h2 class="title-h2">Retouches</h2>
    <h3>Donner un autre sens à la photographie</h3>
    <div class="bloc-img1">
      <div class="img1 box-shadow"></div>
    </div>
    <div class="bloc-img-text">
        <div class="img2 box-shadow"></div>
        <h4>Une simple image ou un simple regard peut communiquer une multitude de significations.</h4>
    </div>
    <div class="bloc3">
      <div class="img3 box-shadow"></div>
      <div class="liste-photos">
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.retouches {
    padding-top: 5rem;
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
.bloc-img1 {
  display: flex;
  width: 80%;
  justify-content: center;
  margin-bottom: 7rem;
}
.img1 {
    border-radius: 4px;
    height: 26rem;
    width: 100%;
    background-repeat: no-repeat;
    background-image: url('assets/img/retouches-img1.JPG');
    background-size: 100% 120%;
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
    height: 27rem;
    width: 60%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('assets/img/retouches-img2.jpeg');
    margin: 2rem;
   

  }
  h4 {
    width: 80%;
    text-align: center;
    font-family: mpluslight;
    font-size: 1.3rem;
    margin-bottom: 4rem;
  }

</style>