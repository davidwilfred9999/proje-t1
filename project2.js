    var zoom = document.querySelector(".zoom")
    var myImg = document.getElementById("map");
    var currWidth = myImg.clientWidth;


    zoom.addEventListener('click', () => {
    if(currWidth > 200){
        myImg.style.width = (currWidth - 150) + "px";
        currWidth = currWidth - 150;  
    }
    else{ 
        myImg.style.width = (currWidth + 150) + "px";
        currWidth = currWidth + 150
       
    }
    });
    


    




    
