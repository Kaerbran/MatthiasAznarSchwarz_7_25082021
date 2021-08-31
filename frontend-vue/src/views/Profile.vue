<template>
    <div>
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
                <button class="navProfile__btt">Modifier profile</button>
                <button class="navProfile__btt">Supprimer profile</button>
            </nav>

            <div class="replacedTemplate">

            </div>

        </div>

    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "Profile",
    components: {

    },
	computed: {
		...mapState({
			UserName: "UserName",
			UserLogin: "UserLogin",
			UserEmail: "UserEmail",
			UserPublications: "UserPublications",
			UserFriends: "UserFriends"
		}),
	}
}
</script>

<style scoped lang="scss">

.headerProfile{

    &__img{

    }
    &__divGrp1{

    }
    &__h3{

    }
    &__divGrp2{

    }
    &__p{

    }
}

//---------------------------------------
.actionsProfile{

}

.navProfile{

    &__btt{

    }
}

//---------------------------------------

.replacedTemplate{
    //dans un premier temps, ne sera que utilisé pour le positionnement. Puis sera remplacé par un composent
    background-color: lightcoral;
    width: 400px; height: 300px;

}

</style>