
const containerFluid = document.querySelector('.container-fluid');
const besar = document.querySelector('.img-fluid');

containerFluid.addEventListener('click', function(e){
    if(e.target.className == 'img-fluid'){
        besar.src = e.target.src;
    }
});
