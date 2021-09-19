<template>
    <div class="modal">
        <button class="modal__btt modal__btt--alert">Signaler</button>
        <button class="modal__btt">Partager</button>
        <button class="modal__btt">Modifier</button>
        <button class="modal__btt modal__btt--alert">Supprimer</button>
    </div>
</template>

<script>
export default {
    name: "ModalBoxActionArticle",
    setup() {
        console.log('%cloading ModalBoxActionArticle newest component', 'color:red');
        return {};
    },
}
</script>

<style scoped lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0px 0px 0px 0px ; // top right bottom left
}

.modal{
    display: flex;
    flex-direction: column;

    top: 50%; left: 50%;
    position: absolute;

    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    width: 100px;
    
    // A RETIRER ! 
    background-color: green;

    background-color: red;
    &__btt{

        &--alert{

        }
    }
}

</style>