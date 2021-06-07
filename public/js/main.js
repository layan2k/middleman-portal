$(document).ready(function () {

    // Get driver info for driver page
    // $.ajax({
    //     type:"GET",
    //     url: "api/driver/get",
    //     success: function(res){
            
    //     }
    // });
    $('#login-btn').click( function (e) {
        var username = $('#username').val();
        var password = $('#password').val();

        var data ={
            username,
            password
        }

        
        console.log(data);

        $.ajax({
            type:'POST',
            url: 'http://localhost:5000/api/auth/login',
            data: data,
            success: function(result){
                console.log(result);
                // sessionStorage.setItem('auth-token', result);
                // document.location.href = '/pages/orders.html';
            }
        });

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