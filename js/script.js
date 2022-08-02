function abrirOpciones(evento,seccion){
    let i, tabcontent, tablink;
    let a = document.getElementsByName('a')

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }

    tablink = document.getElementsByClassName("nav-link");
    for(i=0;i<tablink.length;i++){
        tablink[i].className = tablink[i].className.replace(" active");
    }

    document.getElementById(seccion).style.display = "block";
    evento.currentTarget.className += " active"; 

   
    

  
        
}

colorLinks("#000000");

function colorLinks(hex){
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
 }