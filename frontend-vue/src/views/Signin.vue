<template>

    <article id="articleSignin">
        <form class="formSignin">
            <h3 class="formSignin__h3">Sign in</h3>

            <div class="formSignin__div">
                <input type="email" ref="get_email" placeholder="Email address" class="formSignin__input" />
            </div>

            <div class="formSignin__div">
                <input type="password" ref="get_password" placeholder="Password" class="formSignin__input" />
            </div>

            <button type="submit" @click="PostUserSignin" class="formSignin__btt">Connexion</button>

            <p class="formSignin__p formSignin__p--barre">
                OU
            </p>

            <p  class="formSignin__p">
                <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
            </p>
        </form>

        <div class="formSecondary">
            
            <p class="formSignin__p">
                Vous n'avez pas de compte: 
            </p>

            <p  class="formSignin__p">
                <router-link to="/signup">Inscrivez-vous</router-link>
            </p>
        </div>

    </article>
</template>

<script>
import { mapState } from "vuex"

export default {
    
    name: "Signin",
    data() {},
	computed: {
		...mapState({
			UserAdmin: "UserAdmin"
    })
  },
    methods:{
        PostUserSignin () {
            const password = this.$refs.get_password.value;
            const email = this.$refs.get_email.value;

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "password": password,
                "user_email": email
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:3000/api/auth/login", requestOptions)
            .then(response => response.text())
            .then((result) => {
                //-> je mets à jour le store, afin que les données de l'utlisateurs connectées soient prises en compte
                this.$store.commit('userAuthentification', JSON.parse(result));
                
                //-> juste des consoles.log à supprimer plus tard
                alert(result);
            })
            .catch(error => console.log('error', error));
        }
    }
}
</script>

<style scoped lang="scss">

*, *:before, *:after {
  box-sizing: border-box;
}

#articleSignin {
    background-color: whitesmoke;

    display: flex;
    flex-direction: column;
    align-items: center;

    /*background-image: url(/frontend-vue/public/images/icon.png);
    background-size: cover;
    background-position: left;*/
}

.formSignin{
    background-color: white;
    width: 350px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: lightgray;
    border-style: solid;
    border-width: 1px;
    
    &__h3{
        margin: 25px auto 25px auto ;  // top right bottom left
        font-size: 3em;
    }
    &__div{
        margin: 0px auto 0px auto ;  // top right bottom left
    }
    &__input{
        width: 280px; height: 30px;
        margin: 5px 0px 5px 0px ; // top right bottom left
        padding: 0px 0px 0px 7px;   // top right bottom left

        border: lightgray;
        border-style: solid;
        border-width: 1px;
        background-color: whitesmoke;
    }
    &__btt{
        width: 280px; height: 30px;
        margin: 10px auto 20px auto ;  // top right bottom left

        border-radius: 5px;
        border: none;
        background-color: rgb(180, 215, 252);

        cursor: pointer;
    }
    &__p{
        margin: 15px auto 15px auto ;  // top right bottom left

        a{
            text-decoration: none;
            font-weight: bold;
            display: block;
            color: black;
            cursor: pointer;
            transition: transform 0.5s;

            &:hover{
                transform: scale(1.1);
            }
        }

        &--barre{
            display: flex;
            align-items: center;

            &::before{
                content: '';
                display: block;
                width: 100px; height: 2px;
                background-color: whitesmoke;
                margin-right: 10px;
            }
            &::after{
                content: '';
                display: block;
                width: 100px; height: 2px;
                background-color: whitesmoke;
                margin-left: 10px;
            }
        }
    }
}

.formSecondary{
    background-color: white;
    width: 350px;

    border: lightgray;
    border-style: solid;
    border-width: 1px;

    margin: 15px 0px 15px 0px ;  // top right bottom left
}

</style>