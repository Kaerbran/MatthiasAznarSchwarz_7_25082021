<template>
    <div class="modalContainer">
        <div class="modal">
            <button class="modal__btt modal__btt--alert" @click="reviewModifyPost">Signaler</button>
            <button class="modal__btt modal__btt--alert">Supprimer</button>
            <button class="modal__btt">Partager</button>
            <button class="modal__btt">Modifier</button>
            <button class="modal__btt modal__btt--alert" @click="emitModalClosed">X</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalBoxActionArticle",
    props : ['postid'],
    data() {
        return {
            postId : this.postid,
        }
    },
    setup() {
        console.log('%c loading ModalBoxActionArticle newest component', 'color:red');
        return {};
    },
    methods: {
        emitModalClosed() {
            this.$emit('modal-closed', { message: false })
        },
        reviewModifyPost() {
            const reviewNeeded = 1;

            let formData = new FormData();
            formData.append('Post_ID', this.postId);
            formData.append('reviewStatus', reviewNeeded);
            
            var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
            };

            fetch("http://localhost:3000/api/post/review", requestOptions)
            .then(response => response.text())
            .then((result) => {
                console.log(result);

                this.$emit('article-closed', { message: false })

            })
            .catch(error => console.log('error', error));
        }

        // a faire / a faire / a faire / a faire / a faire / a faire / a faire
        // + mise à jour de l'affichage de home
        // a faire / a faire / a faire / a faire / a faire / a faire / a faire
    },
}
</script>

<style scoped lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0px 0px 0px 0px ; // top right bottom left
}

.modalContainer{
    position: relative;
}

.modal{
    display: flex;
    flex-direction: column;

    top: 50px; right: 20px;
    position: absolute;
    width: 100px;

    &__btt{
        font-size: 1em;
        background-color: whitesmoke;

        //border-radius: 2px;
        border: lightgray; 
        border-style: solid; border-width: 1px;

        &:hover{
            background-color: rgb(167, 164, 164);
            cursor: pointer;
        }

        &--alert{
            font-weight: bold;
            color: rgb(230, 50, 70);
        }
    }
}

</style>