$(document).ready(function () {

    // Get driver info for driver page
    $.ajax({
        type:"GET",
        url: "api/driver/get",
        success: function(res){
            console.log(res);
        }
    });

    $('#login-btn').click( function (e) {
        var username = $('#username').val();
        var password = $('#password').val();

        // $.ajax({
        //     type:'POST',
        //     url: 'api/auth/login',
        //     data: {username, password},
        //     success: function(res){
        //     document.location.href = '/pages/orders.html';
        //     }
        // });

        document.location.href = '/pages/orders.html';
        console.log(username, password);
    });

    // Send the order form
    $('.submit-btn').click(function (e) { 
        e.preventDefault();
        var sender = $('#sender').val();
        var receiver = $('#receiver').val();
        var origin = $('#origin').val();
        var dest = $('#dest').val();
        var contact = $('#contact').val();
        var price = $('#price').val();

        var data = {
            sender,
            receiver,
            origin,
            dest,
            contact,
            price
        }

        console.log(data);

        $.ajax({
            type: "POST",
            url: "api/request/add",
            data: data,
            success: function (response) {
                   console.log(response + " " + data);
            }
        });       
    });


    
});