<template>
     <div class="groupe-img-accueil">
        <img src="/static/img/groupe-img-accueil/frame.png" alt="" class="frame">
        <div class="logo">
            <img src="/static/img/groupe-img-accueil/logo.png" alt="" class="logo-ecriture">
        </div>        
    </div>
</template>


<style scoped>
.groupe-img-accueil {
    height: 80vh;
    width: 100%;
    position: relative;
    background-image: url('/static/img/groupe-img-accueil/background.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
.frame {
    height: 100%;
    width: 100%;
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
    height: 45vh;
    width: 20vw;
}
img {
}

@media (min-width: 820px) and (max-width: 1050px) {
    .groupe-img-accueil {
        height: 35vh;
    }
    .logo-ecriture {
        height: 18vh;
    }
}

@media screen and (max-width: 819px) {
    .groupe-img-accueil {
        height: 29vh;
    }
    .logo-ecriture {
        height: 12vh;
    }
}
</style>