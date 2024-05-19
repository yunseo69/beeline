let absent=document.querySelector(`.absent`);
let forform=document.querySelector(`.forform`);
let help=document.querySelector(`.help`);
let yoq=document.querySelector(".yoq");
let div=document.querySelector(`.divcha`)

help.addEventListener (`click`, () => {
    if(forform.style.display=="none"){
        forform.style.display="block";
        div.style.display="none";

    }else{
        forform.style.display="none";
        div.style.display="block";

    }
})
forform.addEventListener (`click`, () => {
    if(forform.style.display=="none"){
        forform.style.display="block";
        div.style.display="none";
    }else{
        forform.style.display="none";
        div.style.display="block";
    }
})
