function proporcoes(){
    var height = document.getElementById('height').value
    var width = document.getElementById('width').value
    fetch(`https://picsum.photos/${height}/${width}`)
    .then(Response => {
        let dynamicImage = document.createElement('img');
        dynamicImage.src = Response.url;
        document.getElementById('gerarImagem').appendChild(dynamicImage);
        contador++
    })
    .catch(error=>console.error('error',error))
}
var contador=0

document.getElementById('geradorDeimage').addEventListener('submit', function(evt){
    evt.preventDefault();
    if (contador<3)
        proporcoes();
})

function gerarImagem(img){
    console.log(img)
}

