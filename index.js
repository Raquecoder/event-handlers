let viewBtn = document.getElementById('view-button');
let cuteCat = document.getElementById('cutecat');
let closeBtn = document.getElementById('close-button');






let open = function(){
 cuteCat.style.display='block';
 closeBtn.style.display='block';
 
}

let hide= function(){
cuteCat.style.display='none';
closeBtn.style.display='none';

}




viewBtn.addEventListener('click',open)
closeBtn.addEventListener('click',hide)

let textChange= function(){
    viewBtn.innerHTML= 'Meow!🐱';
}

let textReturn = function(){
    viewBtn.innerHTML='View';
}

viewBtn.addEventListener('click',textChange);
closeBtn.addEventListener('click',textReturn);