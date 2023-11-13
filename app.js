
window.onload =function(){
    var btn = document.querySelector("#button");
    var httpRequest;

    btn.addEventListener('click', function(element){
        element.preventDefault();

        httpRequest=new XMLHttpRequest();

        var url="superheroes.php";
        httpRequest.onreadystatechange = showheroes;
        httpRequest.open('GET',url);
        httpRequest.send();
    });

    function showheroes(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                var showresults= document.querySelector("#results");
                showresults.innerHTML=response;
                 }
                else {
                alert('There was a problem with the request.');
            }
            }
        }
    
   
};


