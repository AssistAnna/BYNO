<template>
    <div class="design-all">
        <h2 class="title-h2" data-aos="fade-up">Design</h2>
        <div class="btn-retour" @click="$router.push('/productions')">Retour</div>
        <p data-aos="fade-up">Les pochettes de single ont été soigneusement conçues pour refléter le style adapté à l’artiste et au genre musical correspondant.</p>

        <div class="bloc-img">
            <img src="/img/design-img1.png" alt="image pochette album rose">
            <img src="/img/design-img2.png" alt="image pochette album design beige">
        </div>
        <div class="bloc-img wesh">
            <img src="/img/design-img3.png" alt="image pochette album otherside">
            <img src="/img/design-img4.png" alt="image pochette album loadjak">
        </div>
        <div class="bloc-img">
            <img src="/img/design-img5.png" alt="image pochette album superfly">
            <img src="/img/design-img6.png" alt="image pochette album I gotta love">
        </div>
        <div class="btn-retour" @click="$router.push('/productions')">Retour</div>
    </div>
    </template>
    <script>
    export default {
    }
    </script>
    <style scoped>
    .design-all {
        margin-top: 5rem;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .btn-retour {
    margin-left: 0;
    }
    .bloc-img {
        display: flex;
        justify-content: center;

    }
    .bloc-img img {
        margin: 0 2rem 3rem 2rem;
        height: 60vh;
    }
    .design-all p {
        font-size: 1.3rem;
        font-family: mpluslight;
        text-align: center;
        margin: 0rem 10rem 4rem 10rem;
        font-weight: bold;
    }

    @media (min-width: 821px) and (max-width: 1200px) {
        .bloc-img img {
            height: 50vh;
        }
  }

  @media screen and (max-width: 820px) {
    .bloc-img {
        flex-direction: column;
    }

    .bloc-img img {
        margin: 0;
        height: 40vh;
        padding-bottom: 2rem;
        padding-top: 2rem;
    }
    .design-all p {
        margin: 2rem 3rem;
        font-size: 1.4rem;
    }
  }
    
    </style>