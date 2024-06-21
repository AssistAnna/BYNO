<style scoped>
.title-h2 {
  margin-bottom: 1rem;
}
  .page-contact {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .formulaire{
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    width: 60%;
  } 
  .bloc {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  input {
    height: 2.5rem;
    margin-bottom: 1.2rem;
    border-radius: 4px;
    margin-right: 0.4rem;
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
    margin-right: 0.3rem;
  }
  .red-text {
    text-align: center;
    color: rgb(199, 7, 7);
    font-size: 1rem;
    font-family: 'mplusmedium';
    font-weight: bold;
    margin: 0.5rem 0;

  }

  .button {
    display: flex;
    justify-content: center;
    height: 20vh;
    margin-top: 1rem;

  }

  button {
    font-family: mplusregular;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 6px;
    background-color: #009FE3;
    color: white;
    cursor: pointer;
    margin: 1.5rem 0;
    padding: 0 2rem;
    transition: all 0.2s ease-in-out;
  }
  button:hover {
    transform: scale(1.05);
  }
  .sent-message {
    text-align: center;
    font-family: mplusregular;
    font-size: 1.1rem;

  }
  .retour-accueil {
    color: #009FE3;
    text-decoration: underline;
    text-underline-offset: 0.7rem;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    .formulaire {
      margin: 0;
      padding: 0;
    }
    .bloc {
    display: block;
  }
  input {
    width: 100%;
    margin-right: 0;
  }
  textarea {
    width: 100%;
  }
    button {
      margin: 2.8rem 0;
    }
  }
</style>
<template>
  <div class="page-contact">
    <h2 class="title-h2"  data-aos="fade-up">Contact</h2>
       <form data-aos="fade-up" data-aos-delay="300" @submit.prevent="submitEmail" class="formulaire">
        <div class="bloc">
          <input
              v-model="form.name"
              type="text"
              placeholder="Nom, Prénom"
            />
            <input
              v-model="form.email"
              type="text"
              placeholder="Email"
            />
        </div>
        <div class="bloc">
          <input
              v-model="form.phone"
              type="text"
              placeholder="Téléphone"
            />
            <input
              v-model="form.subject"
              type="text"
              placeholder="Sujet"
            />
        </div>   
            
            <textarea rows="5" name="message" placeholder="Votre message" v-model="form.message"></textarea>
         
          <div v-if="missingFields= true" class="red-text"> <span>&#9888;</span>Vous devez remplir tous les champs</div>
          <div  class="button">
            <button
              v-if="sent === false"
              type="submit"
            > Envoyer
            </button>
            <div class="sent-message" v-if="sent === true">
              <p>Message envoyé</p>
              <div class="retour-accueil" @click="retourAccueil">
                <p>Retour à l'accueil</p>
              </div>
            </div>
            
           
          </div>
          
        </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const router = useRouter();

let sent = false;
let missingFields = false

const form = ref({
  access_key: '759b21f8-224f-45f1-bb1d-acdd0a37157d',
  subject: "",
  name: "",
  phone: "",
  email: "",
  message: "",

});

const result = ref("");
const status = ref("");

const submitEmail = async () => {
  result.value = "Please wait...";
  if (form.value.name !== "" && form.value.phone !== "" && form.value.email !== "" && form.value.message !== ""  && form.value.subject !== "") {
   
    try {
    missingFields = false;
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: form.value,
    });
    result.value = response.message;

    if (response.status === 200) {
      console.log("succes", response);
      status.value = "success";
    } 
    
    else{
      console.log(response); // Log for debugging, can be removed
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    form.value.name = '';
    form.value.email = '';
    form.value.phone = '';
    form.value.message = '';
    form.value.subject = '';
    sent = true;

    // Clear result and status after 7 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 7000);
  }
  } else {
    missingFields = true;
    console.log(missingFields, 'le message ne peut pas etre envoyé')
  }
  
};

const retourAccueil = async () => {
  sent = false;
  router.push({ path: "/" })
};
</script>