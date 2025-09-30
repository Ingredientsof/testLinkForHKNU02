let clas = document.querySelector('.classes');
let baseColor = document.querySelector('.back');
let color = document.querySelectorAll('.back');
let font = document.querySelectorAll('.back p');
let footerText = document.querySelectorAll('.text-black p:not(.text-blue)'); 
let profileText = document.querySelectorAll('.profile p'); 


document.addEventListener('DOMContentLoaded',function() {
    colorFn();
    classFn();
});

function classFn(){
    if(clas.id == 'visual')
        {
            clas.style.color = '#0035FF';
            clas.textContent = "Visual Project";
        }
        else if(clas.id == 'brand')
        {
            clas.style.color = '#0035FF';
            clas.textContent = "Brand Management";
        }
        else if(clas.id === 'digital')
        {
            clas.style.color = '#0035FF';
            clas.textContent = "Digital Convergense Project";
        }
        else if(clas.id === 'interaction')
        {
            clas.style.color = '#0035FF';
            clas.textContent = "Interaction Business";
        }
    
}

function colorFn(){
    if(baseColor.id == 'whiteBack')
        {
           for(let i = 0; i < color.length; i++){
                color[i].style.backgroundColor = 'white';
           }
           for(let j=0; j<font.length; j++){
            font[j].style.color = 'black';}
           for(let k=0; k<footerText.length; k++){
            footerText[k].style.color = 'black';}
           for(let l=0; l<profileText.length; l++){
            profileText[l].style.color = 'black';}
            icon.style.filter = '';

            document.body.style.backgroundColor = 'white';
        }
        else if(baseColor.id == 'blackBack')
        {
            for(let i = 0; i < color.length; i++){
                color[i].style.backgroundColor = 'black';
           }
           for(let j=0; j<font.length; j++){
            font[j].style.color = 'white';}
           for(let k=0; k<footerText.length; k++){
            footerText[k].style.color = 'white';}
           for(let l=0; l<profileText.length; l++){
            profileText[l].style.color = 'white';}
            icon.style.filter = 'invert(1)';
            document.body.style.backgroundColor = 'black';           
        }
}

let img = document.querySelectorAll('.profile img'); 
window.addEventListener('resize', imgFn); 
function imgFn(){ 
    for(let i=0; i<img.length;i++)
    {
        img[i].style.height = img[i].offsetWidth+'px'; 
    } 
}


