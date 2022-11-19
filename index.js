function edittime(){
    var date = new Date();
    var hrs = date.getHours().toString();
    var min = date.getMinutes().toString();
    var sec = date.getSeconds().toString();
    
    if(sec.length < 2){ sec = '0' + sec}
    if(min.length < 2){ min = '0' + min}
    if(hrs.length < 2){ hrs = '0' + hrs}

    $('#time').html(hrs + ':' + min + ':' + sec)
    $('#color').html('#' + hrs + '' + min + '' + sec)
    $('*').css('background-color', '#' + hrs + '' + min + '' + sec)
}
setInterval(edittime, 1000)