<template>
    <div class="soon-cmp">
        <h5>Page en cours de construction</h5>
        <div class="btn-retour" @click="$router.push('/productions')">Retour</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.soon-cmp {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
}
h5 {
    font-family: 'mplusextra';
    font-size: 2.5rem;
    text-align: center;
    margin: 8rem 0 2rem 0;
}
.btn-retour {
    margin-left: 0;
}
@media screen and (max-width: 819px) {
    h5 {
        font-size: 1.8rem;
    }
}
</style>