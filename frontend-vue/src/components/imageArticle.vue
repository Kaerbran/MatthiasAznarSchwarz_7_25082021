<template>
    <div>
        
        <article class="postWithImage">
            <div class="postWithImage__1div">
                <picture class="postWithImage__pictureProfile">
                    <img class="postWithImage__imgProfile" src="../assets/EugenieProfile.jpeg" alt="photo de profile de la personne qui a publié l'image">
                </picture>
                <div class="postWithImage__2div">
                    <h4 class="postWithImage__h4">Kaerbran</h4>
                    <p class="postWithImage__p postWithImage__p--2div">Paris, 14ème arrondissement</p>
                </div>
            </div>
            <img class="postWithImage__imgPost" src="../assets/black-fox-silhouette.jpg" alt="ici la photo publié">
            <div class="postWithImage__containerIcon">
                <i class="fas fa-ambulance postWithImage__icon"></i>
                <i class="fas fa-horse postWithImage__icon"></i>
                <i class="fas fa-address-card postWithImage__icon"></i>
            </div>
            <p class="postWithImage__p"><b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque recusandae amet eligendi! Suscipit tempora laudantium quidem, laborum totam dolores, cumque ex blanditiis fuga voluptates eaque sapiente necessitatibus, quod repellendus.</p>
            <p class="postWithImage__p">Afficher les commentaire</p>
            <p class="postWithImage__p">Publié il y a 3 jours</p>
            <div class="postWithImage__3div">
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
  margin: 0px 0px 0px 0px ; // top right bottom left
}

.postWithImage{
    background-color: white;

    display: flex;
    flex-direction: column;

    width: 616px;
    border: lightgray;
    border-style: solid;
    border-width: 1px;

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

    }
    &__icon{

    }
    &__p{

        &--2div{
            margin: 0px auto 0px 10px ; // top right bottom left
        }
    }
    &__3div{

    }
    &__textarea{

    }
    &__btt{

    }
}



</style>