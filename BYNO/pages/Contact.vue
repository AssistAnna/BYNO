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
            <textarea rows="6">Votre message ...</textarea>
         
         
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
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  img {
    height: 15rem;
    width: 15rem;
  }
  .bloc-title {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .soulignement {
    margin: 3rem 0;
    border: 1px solid #009FE3;
    width: 100%;
  }

  .formulaire{
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
    width: 35%;
  } 

  input {
    height: 2.5rem;
    margin-bottom: 1.2rem;
    border-radius: 6px;
    font-family: mplusthin;
    font-weight: bold;
    padding-left: 0.7rem;
    
  }

  ::placeholder {
    color: black;
    font-family: mplusthin;
    font-family: 4rem;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  textarea {
    font-family: mplusthin;
    font-weight: bold;
    padding-left: 1rem;
    font-size: 1rem;
    padding-top: 1rem;
  }

  .button {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    margin-bottom: 2rem;

  }

  button {
    font-family: mplusregular;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    border-radius: 6px;
    background-color: #009FE3;
    color: white;
  }
</style>