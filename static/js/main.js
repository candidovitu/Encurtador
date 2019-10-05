function divWarn(text){
    var element = $('.warn');
    element.text(text);
    element.slideDown();
    setTimeout(()=>{
        element.slideUp()
    }, 6000);
}

$(document).ready(()=>{

    $('form').submit(()=>{
        let url = $('form input[type="text"]').val();
        
        $.ajax({
            type: 'POST',
            url: '/',
            data:{
                url: url
            },
            success: (data) => {
                divWarn(data.msg);
            }
        });

    });


});