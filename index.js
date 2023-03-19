let button=document.getElementById('button');
let checkbox1=document.getElementById('checkbox1');
let checkbox2=document.getElementById('checkbox2');
let search=document.getElementById('search');
let money;
let label=document.getElementById('label');
button.onclick=function(){
    if(checkbox1.checked ){
        money=search.value;
        money=eur(money);
        label.innerHTML= money +"€"
    console.log(money)
    }else if( checkbox2.checked ){
        money=search.value;
        money=usd(money);
        label.innerHTML= money +"$"
        console.log(money);
    }
    if(search.value==''){
        alert('$You forgot to Type in amount money$');
    }
}


function eur(money){
    return money/2.87;
}
function usd(money){
    return money/2.63 ;
}