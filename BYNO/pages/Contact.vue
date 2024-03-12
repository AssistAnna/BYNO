<template>
  <div class="page-contact">
    <div class="bloc-title">
      <img src="~assets/img/logo-byno-avececrit.png" alt="">
      <div class="soulignement"></div>
    </div>
    
   
       <form @submit.prevent="submitEmail" class="formulaire">
            <input
              v-model="name"
              type="text"
              placeholder="Nom, Prénom"
            />
            <input
              v-model="email"
              type="text"
              placeholder="Email"
            />
            <input
              v-model="telephone"
              type="text"
              placeholder="Téléphone"
            />
            <textarea rows="6">Votre message</textarea>
         
         
          <div class="button">
            <button
            type="submit"
            @click.prevent="submitForm"
          >
            {{ isLoading ? 'Loading...' : 'Envoyer' }}
          </button>
          </div>
          
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .page-contact {
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
  }
  .soulignement {
    margin: 3rem 0;
    border: 3px solid #009FE3;
    width: 100%;
    border-radius: 20%;
  }

  .formulaire{
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
    width: 35%;
  } 

  input {
    height: 4.2rem;
    margin-bottom: 4rem;
    border-radius: 6px;
    font-family: mplusthin;
    font-weight: bold;
    font-size: 1.7rem;
    padding-left: 1rem;
    
  }

  ::placeholder {
    color: black;
    font-family: mplusthin;
    font-family: 4rem;
    font-weight: bold;
    font-size: 1.7rem;
  }

  textarea {
    font-family: mplusthin;
    font-weight: bold;
    padding-left: 1rem;
    font-size: 1.7rem;
    margin-bottom: 2rem;
    padding-top: 1rem;
  }

  .button {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    margin-bottom: 4rem;

  }

  button {
    font-family: mplusregular;
    font-weight: bold;
    font-size: 1.6rem;
    padding: 1.4rem 4rem;
    border-radius: 6px;
  }
</style>