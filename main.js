let btn = document.querySelector('#btn');
let changeColor = document.querySelector('.changeColor');
let indice = 0


btn.addEventListener("click",function(){

    if (indice==0)
	{
        changeColor.style.backgroundColor="red";
	indice=1;
	}else
	{
	changeColor.style.backgroundColor="blue";
	indice=0;	
	}
})

