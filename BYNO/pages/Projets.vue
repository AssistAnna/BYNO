<template>
<div class="productions">
  <div class="bloc-title">
      <img src="~assets/img/logo-byno-avececrit.png" alt="">
      <div class="soulignement"></div>
    </div>
    <AllProjects/>
</div>
</template>

<script>

export default {

}
</script>

<style scoped>
 .productions {
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  img {
    height: 28rem;
    width: 28rem;
  }
  .bloc-title {
    padding-top: 2rem;
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
  }
  .soulignement {
    margin: 3rem 0;
    border: 3px solid #009FE3;
    width: 100%;
    border-radius: 20%;
  }
</style>