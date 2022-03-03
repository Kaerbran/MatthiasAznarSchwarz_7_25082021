<template>
    <div>
        <article class="postWithImage" v-show="toggle" >
            <div class="postWithImage__1div">
                <picture class="postWithImage__pictureProfile">
                    <img class="postWithImage__imgProfile" :src="this.pictureAutor" alt="photo de profile de la personne qui a publié l'image">
                </picture>
                <div class="postWithImage__2div">
                    <h4 class="postWithImage__h4">{{articleData.Post_Creator}}</h4>
                    <p class="postWithImage__p postWithImage__p--2div">{{articleData.Post_Location}}</p>
                </div>
            </div>
            <img class="postWithImage__imgPost" :src="articleData.Post_Picture" alt="ici la photo publié">
            <div class="postWithImage__containerIcon">
                <font-awesome-icon class="postWithImage__icon" @click="reviewModifyPost" icon="check" />
                <font-awesome-icon class="postWithImage__icon" @click="deletePost" icon="trash" />
            </div>
            <p class="postWithImage__p postWithImage__p--padding">{{articleData.Post_Comment}}</p>
            <p class="postWithImage__p postWithImage__p--grey postWithImage__p--robot postWithImage__p--padding">Publié il y a 3 jours</p>
        </article>
    </div>
</template>


<script>
import { mapState } from "vuex"

export default {
    name: 'ImageArticle',
    props : ['articledata'],
    data() {
        return {
            articleData : this.articledata,
            toggle : true,
            pictureAutor : ""
        }
    },
	computed: {
		...mapState({
			UserName: "UserName",
            UserLogin: "UserLogin",
            UserToken: "UserToken",
            UserId: "UserId",
			UserEmail: "UserEmail",
			UserPublications: "UserPublications",
			UserFriends: "UserFriends"
        })
    },
    async created () {
        await this.getPicture()

        console.log("this.articleData");
        console.log(this.articleData);
    },
    methods:{
        clickShowModal(){  
            this.modalModif = !this.modalModif;
        },
        upstreamMessage(payload) {
            this.modalModif = payload.message
        },
        reviewModifyPost() {
            const reviewNeeded = 0;   //autorise l'affichage dans home

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + this.UserToken);

            let formData = new FormData();
            formData.append('Post_ID', this.articledata.Post_ID);
            formData.append('reviewStatus', reviewNeeded);
            
            var requestOptions = {
                method: 'POST',
                body: formData,
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/post/review", requestOptions)
            .then(response => response.text())
            .then((result) => {
                this.toggle = false;
                console.log(result);
            })
            .catch(error => console.log('error', error));
        },
        deletePost() {

            let formData = new FormData();
            formData.append('Post_ID', this.articledata.Post_ID);
            
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + this.UserToken);

            var requestOptions = {
                method: 'POST',
                body: formData,
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/post/delete", requestOptions)
            .then(response => response.text())
            .then((result) => {
                this.toggle = false;
                console.log(result);
            })
            .catch(error => console.log('error', error));
        },
        getPicture(){
            
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + this.UserToken);

            let formData = new FormData();
            formData.append('post_creator_id', this.articledata.Post_Creator_ID);

            var requestOptions = {
            method: 'POST',
            body: formData,
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch("http://localhost:3000/api/auth/user", requestOptions)
            .then(response => response.text())
            .then((result) => {
                let Author = JSON.parse(result);
                this.pictureAutor = Author.Person_Picture;
            })
            .catch((error) => {
                console.log('error', error)
            });
        }
    },
    setup() {
        console.log('%c loading ImageArticle component', 'color:green');
        return {};
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
    margin: 0px auto 20px auto ; // top right bottom left

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