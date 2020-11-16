let btn = document.querySelector('#btn');
let body = document.querySelector('body');
let indice = 0


btn.addEventListener("click",function(){

    if (indice==0)
	{
	body.style.backgroundColor="red";
	indice=1;
	}else
	{
	body.style.backgroundColor="blue";
	indice=0;	
	}
})

