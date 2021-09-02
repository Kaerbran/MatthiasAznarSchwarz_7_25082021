<template>
    <div class="templateProfile">
        <div class="headerProfile">
            <img class="headerProfile__img" src="../assets/black-fox-silhouette.jpg" alt="photo de profile de Matthias Aznar-Schwarz">
            <div class="headerProfile__divGrp1">
                <h3 class="headerProfile__h3">{{UserLogin}}</h3>
                <div class="headerProfile__divGrp2">
                    <p class="headerProfile__p">{{UserPublications}} publications</p>
                    <p class="headerProfile__p">{{UserFriends}} amis</p>
                </div>
            </div>
        </div>

        <div class="actionsProfile">

            <nav class="navProfile">
                <button class="navProfile__btt" @click="clickModificationComponent()">Modifier profile</button>
                <button class="navProfile__btt navProfile__btt--sup" @click="clickSuppressionComponent()">Supprimer profile</button>
            </nav>

            <ProfileModification class="replacedTemplate" v-show="modalModif"/>
            <ProfileSuppression class="replacedTemplate" v-show="modalSupp"/>

        </div>

    </div>
</template>

<script>
import { mapState } from "vuex"
import ProfileModification from "../components/profileModification"
import ProfileSuppression from '../components/profileSuppression';

export default {
    name: "Profile",
    data() {
        return {
            modalModif : true,
            modalSupp : false,  
        }
    },
	computed: {
		...mapState({
			UserName: "UserName",
			UserLogin: "UserLogin",
			UserEmail: "UserEmail",
			UserPublications: "UserPublications",
			UserFriends: "UserFriends"
        })
	},
    methods:{
       clickModificationComponent(){  // when button is used, control whether a modal is visible or not
           if (!this.modalModif) {
               this.modalModif = !this.modalModif;
               this.modalSupp = !this.modalSupp;
           }
       },
       clickSuppressionComponent(){  // when button is used, control whether a modal is visible or not
           if (!this.modalSupp) {
               this.modalModif = !this.modalModif;
               this.modalSupp = !this.modalSupp;
           }
       },
    },
    components: {
        ProfileModification,
        ProfileSuppression
    }
}
</script>

<style scoped lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
}

.templateProfile{
    background-color: whitesmoke;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.headerProfile{
    background-color: whitesmoke;

    display: flex;

    margin: 0px 0px 40px 0px ;  // top right bottom left
    padding: 0px 0px 20px 0px;   // top right bottom left
    border-bottom: solid lightgray;
    border-width: 1px;

    &__img{
        width: 200px; height: 200px;
        border-radius: 50%;
        border: lightgray;  //border: none;
        border-style: solid;
        border-width: 1px;
    }
    &__divGrp1{
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 350px;
        margin: 0px 0px 0px 15px ;  // top right bottom left

    }
    &__h3{
        margin: 0px auto 0px 0px ;  // top right bottom left
    }
    &__divGrp2{
        display: flex;
        flex-direction: row;

    }
    &__p{
        margin: 0px 15px 0px 0px ;  // top right bottom left
    }
}

//---------------------------------------
.actionsProfile{
    background-color: whitesmoke;

    display: flex;
    justify-content: center;
}

.navProfile{
    display: flex;
    flex-direction: column;
    &__btt{
        width: 150px; height: 30px;
        margin: 0px auto 1px auto ;  // top right bottom left

        border-radius: 2px;
        border: lightgray;  //border: none;
        border-style: solid;
        border-width: 1px;
        background-color: lightgreen;

        cursor: pointer;

        &--sup{
            background-color: lightpink;
        }
    }
}

//---------------------------------------

.replacedTemplate{
    //dans un premier temps, ne sera que utilisé pour le positionnement. Puis sera remplacé par un composent
    background-color: white;
    width: 400px; height: 300px;

    border: lightgray;  //border: none;
    border-style: solid;
    border-width: 1px;

}

</style>