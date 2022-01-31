<template>
    <div>
        <h3 class="">Modifier profile</h3>
        <div class="">
                <label for="Email">Adresse Email</label>
                <input type="email" name="Email" :placeholder="UserEmail" class="" />
        </div>
        <div class="">
                <label for="Name">Nom complet</label>
                <input type="email" name="Name" ref="get_name" :placeholder="UserName" class="" />
        </div>
        <div class="">
                <label for="login">Nom d'utilisateur</label>
                <input type="email" name="login" ref="get_user" :placeholder="UserLogin" class="" />
        </div>
        <div class="">
                <label for="old_Password">Old password</label>
                <input type="email" name="old_Password" ref="get_password" class="" />
        </div>
         <div class="">
                <label for="new_Password">New password</label>
                <input type="email" name="new_Password" ref="get_password" class="" />
        </div>
        <div class="">
                <label for="file_upload">File</label>
                <input type="file" @change="onFileSelect" ref="get_file" class="" />
        </div>

        <button type="submit" @click="PostUserModify" name="file_upload" class="formSignin__btt">Modifier</button>
        
        <h5>{{message}}</h5>

    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "ProfileModification",
    data() {
        return {
                file:"",
                message:""
        }
    },
    computed: {
        ...mapState({
                UserName: "UserName",
                UserLogin: "UserLogin",
                UserEmail: "UserEmail",
                UserPublications: "UserPublications",
                UserFriends: "UserFriends",
        }) 
    },
    methods:{
       onFileSelect () {
               //cette méthode s'activera des qu'un nouveau fichier est chargé
               const file = this.$refs.get_file.files[0];
               this.file = file;
       },
       PostUserModify () {
                var login = this.$refs.get_user.value;
                var name = this.$refs.get_name.value;
                //const oldPassword = this.$refs.get_oldPassword.value;
                //const newPassword = this.$refs.get_newPassword.value;

                if ((login !== "") || (name !== "") || (this.file !== "")) {
                        if (login == "") {
                                login = this.UserLogin;
                        }
                        if (name == "") {
                                name = this.UserName;
                        }
                        
                        let formData = new FormData();
                        formData.append('login', login);
                        formData.append('user_email', this.UserEmail);
                        formData.append('image', this.file);
                        formData.append('name', name);
                        var requestOptions = {
                        method: 'POST',
                        body: formData,
                        redirect: 'follow'
                        };

                        fetch("http://localhost:3000/api/auth/modify", requestOptions)
                        .then(response => response.text())
                        .then((result) => {
                                this.message = result;

                                //-> je mets à jour le store, afin que les données de l'utlisateurs connectées soient prises en compte
                                this.$store.commit('userAuthentification', JSON.parse(result))
                        })
                        .catch(error => console.log('error', error));
                }
                else {
                        this.message = "no value has been changed... Retry please.";
                }
       }       
    }
}
</script>

<style scoped lang="scss">
    
</style>