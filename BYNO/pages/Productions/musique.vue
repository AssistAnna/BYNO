<template>
<div class="musique-all">
    <div class="title">
        <h2 class="title-h2">Musique</h2>
    </div>
    <img src="~assets/img/musique-onde.svg" alt="image onde musique">
    <p>“Le mixage est un moment magique qui peut parfois devenir une étape compliquée. C'est pourquoi, je vais pouvoir vous accompagner afin de distribuer vos productions d’une qualité sonore exemplaire.”</p>
    <div class="soundcloud-bloc">
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1805324568%3Fsecret_token%3Ds-P4E9swPaO7k&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-291296058" title="IGOTA" target="_blank" style="color: #cccccc; text-decoration: none;">IGOTA</a> · <a href="https://soundcloud.com/user-291296058/morceaux-site-internet-mixer-off/s-P4E9swPaO7k" title="Morceaux Site Internet MIXER OFF" target="_blank" style="color: #cccccc; text-decoration: none;">Morceaux Site Internet MIXER OFF</a></div>

        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1805325246%3Fsecret_token%3Ds-lkAJ8GFbPW7&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-291296058" title="IGOTA" target="_blank" style="color: #cccccc; text-decoration: none;">IGOTA</a> · <a href="https://soundcloud.com/user-291296058/morceaux-site-internet-mixer-on/s-lkAJ8GFbPW7" title="Morceaux Site Internet MIXER ON" target="_blank" style="color: #cccccc; text-decoration: none;">Morceaux Site Internet MIXER ON</a></div>

    </div>
        </div>
</template>
<script>
export default {
    mounted() {
        //console.log('route : ' + this.$route.path)
    }
}
</script>
<style scoped>
.musique-all {
    margin-top: 5rem;
}
.title {
    width: 100%;
    display: flex;
    justify-content: center;
}
.musique-all img {
    height: 50vh;
    width: 100%;
    margin: 2rem 0;
}

.musique-all p {
    font-size: 1.6rem;
    font-family: mpluslight;
    text-align: center;
    padding: 4rem 8rem;
    font-weight: bold;
}

.soundcloud-bloc {
    margin: 2rem 6rem;
}

iframe {
    height: 25vh;
    margin-bottom: 1rem;
}

@media (min-width: 821px) and (max-width: 1200px) {
        .musique-all img {
            height: 40vh;
            margin: 0;
        }
  }

  @media screen and (max-width: 820px) {
    .musique-all img {
        height: 20vh;
        margin: 0;
    }
    .musique-all p {
        padding: 2rem 1rem;
        font-size: 1.3rem;
    }
    .soundcloud-bloc {
        margin: 1rem;
        margin-bottom: 3rem;

    }
    iframe {
        height: 12vh;
        margin-bottom: 2rem;
    }
  }

</style>