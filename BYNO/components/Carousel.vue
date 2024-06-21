<template>
    <div class="carousel">
        <p>Décomposition d'un travail de retouches</p>
        <div class="grande-photo" data-aos="fade-up"></div>
        <div class="bloc-photos box-shadow" data-aos="fade-down" >
            <div class="photo"  v-for="(photo,key) in photos" :key="key">
                <div class="img" :style="' background-image: url(' + photo.imgUrl + ')'"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                photos: [
                    {
                        imgUrl: "/img/carousel/carousel-img1.jpg"
                    },
                    {
                        imgUrl: "/img/carousel/carousel-img3.jpg"
                    },
                    {
                        imgUrl: "/img/carousel/carousel-img2.jpg"
                    },
                    {
                        imgUrl: "/img/carousel/carousel-img5.jpg"
                    },
                    {
                        imgUrl: "/img/carousel/carousel-img4.jpg"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.carousel {
    width: 100%;
    position: relative;
    margin: 5rem 0;
}
p {
    font-family: mpluslight;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 4.5rem;
}
.grande-photo {
    height: 70vh;
    background-image: url('/img/carousel/grande-image.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.bloc-photos {
    position: absolute;
    bottom: -5rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.bloc-photos .img {
    height: 19vh;
    width: 14vw;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

@media (min-width: 801px) and (max-width: 1050px) {
    .carousel {
        margin-top: 4rem;
    }
    p {
        margin-bottom: 2rem;
    }
    .grande-photo {
        height: 50vh;
    }
  }

  @media screen and (max-width: 800px) {
    p {
        margin-bottom: 0;
    }
    .grande-photo {
        height: 35vh;
    }
  }


</style>