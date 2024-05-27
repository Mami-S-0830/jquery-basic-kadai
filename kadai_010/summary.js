$(function() {

    // 文字色変化ボタンが押されたら
    $('#change-color').on('click', function(){
        $('#target').css('color','red');
    });

    //文字内容変化ボタンが押されたら
    $('#change-text').on('click', function(){
        const Changee = document.getElementById('target');
        Changee.textContent = 'Hello';
    })
    
    //フェードアウトボタンが押されたら
    $('#fade-out').on('click', function(){
        $('#target').fadeOut();
    })

    //フェードインボタンが押されたら
    $('#fade-in').on('click', function(){
        $('#target').fadeIn();
    })

  });