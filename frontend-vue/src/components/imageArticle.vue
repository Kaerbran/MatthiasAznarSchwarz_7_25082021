<template>
    <div>
        <article class="postWithImage">
            <ModalBoxActionArticle v-show="modalModif" @modal-closed="upstreamMessage"/>
            <div class="postWithImage__1div">
                <picture class="postWithImage__pictureProfile">
                    <img class="postWithImage__imgProfile" src="../assets/EugenieProfile.jpeg" alt="photo de profile de la personne qui a publié l'image">
                </picture>
                <div class="postWithImage__2div">
                    <h4 class="postWithImage__h4">Kaerbran {{articleData.Post_Comment}}</h4>
                    <p class="postWithImage__p postWithImage__p--2div">Paris, 14ème arrondissement</p>
                </div>
                <button name="Post modification" class="postWithImage__bttDots" @click="clickShowModal()">...</button> 
            </div>
            <img class="postWithImage__imgPost" src="../assets/black-fox-silhouette.jpg" alt="ici la photo publié">
            <div class="postWithImage__containerIcon">
                <font-awesome-icon class="postWithImage__icon" icon="heart" />
                <font-awesome-icon class="postWithImage__icon" icon="comment" />
                <font-awesome-icon class="postWithImage__icon" icon="paper-plane" />
            </div>
            <p class="postWithImage__p postWithImage__p--padding"><b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque recusandae amet eligendi! Suscipit tempora laudantium quidem, laborum totam dolores, cumque ex blanditiis fuga voluptates eaque sapiente necessitatibus, quod repellendus.</p>
            <p class="postWithImage__p postWithImage__p--grey postWithImage__p--padding">Afficher les commentaires</p>
            <p class="postWithImage__p postWithImage__p--grey postWithImage__p--robot postWithImage__p--padding">Publié il y a 3 jours</p>
            <div class="postWithImage__3div">
                <textarea class="postWithImage__textarea" id="story" name="story" rows="3" cols="20" placeholder="Ajouter un commentaire..."></textarea>
                <button class="postWithImage__btt">Publier</button>
            </div>
        </article>
    </div>
</template>


<script>
import ModalBoxActionArticle from '../components/modalBoxActionArticle'

/* 
articleData.Post_Comment: "un commentaire"
articleData.Post_Creator: "d4d2c7d4-e710-4842-9622-915ed21bdd71"
articleData.Post_Date_modified: "2021-10-22T17:43:10.281Z"
articleData.Post_Date_published: "2021-10-22T17:43:10.281Z"
articleData.Post_ID: "48be1774-4563-478b-9201-56ab2887d9a1"
articleData.Post_Location: "ParisII"
articleData.Post_Picture: "placeholder.png"
*/

export default {
    name: 'ImageArticle',
    components : {
        ModalBoxActionArticle
    },
    props : ['articledata'],
    data() {
        return {
            modalModif : false,
            articleData : this.articledata,
        }
    },
    methods:{
        clickShowModal(){  
            this.modalModif = !this.modalModif;
        },
        upstreamMessage(payload) {
            this.modalModif = payload.message
        }
    },
    setup() {
        console.log('%c loading ImageArticle component', 'color:green');
        return {};
    },
    created () {
        console.log("this.articleData");
        console.log(this.articleData);
    }
}
</script>

<style scoped lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0px 0px 0px 0px ; // top right bottom left
}

//Style of the modal element
.modalComponentModification{
    top: 50%; left: 50%;
    position: absolute;

    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    width: 500px; height: 500px;
    
    // A RETIRER ! 
    background-color: green;
}

.postWithImage{
    background-color: white;
    margin: 0px auto 0px auto ; // top right bottom left

    display: flex;
    flex-direction: column;

    width: 616px;
    border: 1px solid lightgray;

    &__1div{
        display: flex;
        margin: 10px 10px 10px 10px ; // top right bottom left
    }
    &__pictureProfile{ 
        position:relative;
        width: 50px; height: 50px;

        &::after{
            content:''; 
            display:block; 
            width: 44px; height: 44px;
            position:absolute; 
            top:50%; left:50%;
            transform: translate(-50%, -50%);

            border: 2px solid white;
            border-radius: 50%;
        }
    }
    &__imgProfile{
        width: 50px; height: 50px;

        //Below : code to make a gradient border
        border: double 5px transparent;
        border-radius: 80px;
        background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
    &__2div{
        display: flex;
        flex-direction: column;
    }
    &__h4{
        margin: 0px auto 0px 10px ; // top right bottom left
    }
    &__imgPost{
        width: 614px; height: 768px;
        object-fit: cover;
        
    }
    &__containerIcon{
        display: flex;

        padding: 0px 16px 0px 16px ; // top right bottom left
    }
    &__icon{
        margin: 0px 15px 7px 0px ; // top right bottom left
        font-size: 2em;

        &--rightMost{
            margin: 0px auto 0px 0px ; // top right bottom left
        }
    }
    &__bttDots{
        margin: 0px 10px 0px auto ; // top right bottom left
        font-weight: bold; font-size: 20px;
        
        background-color: white;
        width: 30px; height: 30px;
        border: none;
        &:hover{
            cursor: pointer;
        }

    }
    &__p{
        text-align: justify;
        text-justify: auto;
        &--2div{
            margin: 0px auto 0px 10px ; // top right bottom left
        }
        &--grey{
            font-style: italic;
            color: grey;
            margin: 8px 0px 8px 0px ; // top right bottom left
        }
        &--robot{
            margin: 8px 0px 8px 0px ; // top right bottom left
        }
        &--padding{
            padding: 0px 16px 0px 16px ; // top right bottom left
        }
        &--action{

        }
    }
    &__3div{
        display: flex;
        border-top: 1px solid lightgray;
        padding: 10px 0px 10px 0px ; // top right bottom left
    }
    &__textarea{
        padding: 0px 16px 0px 16px ; // top right bottom left
        outline: none;  //retirer les bords bleu lors du focus
        resize: none;   //retirer la coche pour rezize la zone de texte
        overflow: auto; //retirer la barre de navigation

        width: 535px; height: 36px;
        border: none;

        &::placeholder { 
            color: gray;
            font-style: italic;
            font-size: 1em;

            transform: translateY(9px); //pour center le placeholder
        }
    }
    &__btt{
        border: none;
        color: rgb(15, 126, 242); background-color: white;
        font-weight: bolder;
        font-size: 1em;
    }
}

</style>