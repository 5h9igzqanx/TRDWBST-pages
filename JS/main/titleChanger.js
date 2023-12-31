mainTitle=document.getElementById("main-title")
function changeTitle(){
    while(true){
        setTimeout(function(){
            mainTitle.innerHTML="我第三个网站 - 5h9igzqanx🌎"
        }, 1000);
        setTimeout(function(){
            mainTitle.innerHTML="我第三个网站 - 5h9igzqanx🌍"
        }, 1000);
        setTimeout(function(){
            mainTitle.innerHTML="我第三个网站 - 5h9igzqanx🌏"
        }, 1000);
    }
}
changeTitle()