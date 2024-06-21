<template>
    <div class="section1" data-aos="fade-up">
        <NuxtImg preload src="https://www.studio-byno.fr/img/groupe-img-accueil/background.jpg" alt="image d'accueil" class="background"/>
        <div class="logo">
            <NuxtImg preload src="/img/groupe-img-accueil/frame.png" alt="image d'accueil" class="frame"/>
            <NuxtImg data-aos="fade-up" data-aos-delay="300" preload src="https://www.studio-byno.fr/img/groupe-img-accueil/logo.png" alt="logo avec écriture" class="logo-ecriture"/>       
        </div>
    </div>
</template>

<style scoped>
.section1 {
    height: 80vh;
    width: 100%;
    position: relative;
}
.background {
    position: absolute;
    width: 100%;
    height: 100%;

}
.logo {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo-ecriture {
    height: 15rem;
    position: absolute;
}
.frame {
    height: 100%;
    width: 100%;
}

/* version tablette */
@media (min-width: 601px) and (max-width: 1032px) {
    .section1 {
    height: 70vh;
  }
}

/* version mobile */
@media screen and (max-width: 600px) {
    .section1 {
    height: 50vh;
  }
  .logo-ecriture {
    height: 11rem;
}
}
</style>