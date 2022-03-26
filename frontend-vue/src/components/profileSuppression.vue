<template>
    <div>
        <h3 class="">Suppression</h3>
        <div class="">
                <label for="a">confirmer suppression</label>
                <input type="checkbox" name="a" class="" />
        </div>
        <button type="submit" @click="profileDeletion" class="formSignin__btt">Supprimer</button>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "ProfileSuppression",
    computed: {
        ...mapState({
            UserName: "UserName",
            UserLogin: "UserLogin",
            UserEmail: "UserEmail",
            UserPublications: "UserPublications",
            UserFriends: "UserFriends",
            UserToken: "UserToken",
            UserId: "UserId",
        }) 
    },
    methods: {
        profileDeletion (){
            //Step 1 : deletion of profile 
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + this.UserToken);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "User_ID": this.UserId
            });

            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:3000/api/auth/usersDelete", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            //Step 2 : On met le store VueX a zéro, afin de s'assurer qu'on soit re-router vers la page signin
            this.$store.commit('userDeleted'); 
        }
    },
}
</script>

<style scoped lang="scss">
    
</style>