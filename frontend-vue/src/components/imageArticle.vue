<template>
    <div>
        
        <article class="postWithImage">
            <div class="postWithImage__1div">
                <img class="postWithImage__imgProfile" src="../assets/black-fox-silhouette.jpg" alt="photo de profile de la personne qui a publié l'image">
                <h4 class="postWithImage__h4">Kaerbran</h4>
            </div>
            <img class="postWithImage__imgPost" src="" alt="">
            <div class="postWithImage__containerIcon">
                <i class="fas fa-ambulance postWithImage__icon"></i>
                <i class="fas fa-horse postWithImage__icon"></i>
                <i class="fas fa-address-card postWithImage__icon"></i>
            </div>
            <p class="postWithImage__p"><b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque recusandae amet eligendi! Suscipit tempora laudantium quidem, laborum totam dolores, cumque ex blanditiis fuga voluptates eaque sapiente necessitatibus, quod repellendus.</p>
            <p class="postWithImage__p">Afficher les commentaire</p>
            <p class="postWithImage__p">Publié il y a 3 jours</p>
            <div class="postWithImage__2div">
                <textarea class="postWithImage__textarea" id="story" name="story" rows="3" cols="20">Ajouter un commentaire</textarea>
                <button class="postWithImage__btt">submit</button>
            </div>
        </article>
 
    </div>
</template>

<script>
export default {
    name: "ImageArticle",
}
</script>

<style scoped lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
}

.postWithImage{
    background-color: lightgreen;
    &__1div{

    }
    &__imgProfile{

    }
    &__h4{

    }
    &__imgPost{

    }
    &__containerIcon{

    }
    &__icon{

    }
    &__p{

    }
    &__2div{

    }
    &__textarea{

    }
    &__btt{
        
    }
}



</style>