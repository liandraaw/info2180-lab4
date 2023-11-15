
window.onload =function(){
    var btn = document.querySelector("#button");
    var httpRequest;

    btn.addEventListener('click', function(element){
        element.preventDefault();
        httpRequest=new XMLHttpRequest();
        var txt = encodeURIComponent(document.getElementById("supname").value);
        //var url="superheroes.php";
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
                document.getElementById("results").innerHTML= httpRequest.responseText;
            }
        };
        httpRequest.open('GET',"superheroes.php?query="+ txt, true);
        httpRequest.send();
    });

    // function showheroes(){
    //     if (httpRequest.readyState === XMLHttpRequest.DONE) {
    //         if (httpRequest.status === 200) {
    //             alert(response);
    //         } else {
    //           alert('There was a problem with the request.');
    //         }
    //       }
    //     }
    };

