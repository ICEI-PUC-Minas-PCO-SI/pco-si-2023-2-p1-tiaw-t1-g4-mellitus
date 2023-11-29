function teste() {
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3000/usuarios',
        success: function(response){
            console.log(response);
        },
        error: function(){
    
        },
    });
}