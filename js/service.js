/* service page - service list */
$('#facial').click(function() {
    $(this).addClass('highlight');
    $("#extra_border_1").addClass('highlight');
    $(this).siblings().removeClass('highlight');
    $("#extra_border_2").removeClass('highlight');
    $("#extra_border_3").removeClass('highlight');
    $('#content_facial').slideDown();
    $('#content_facial').siblings().slideUp();
});

$('#massage').click(function() {
    $(this).addClass('highlight');
    $("#extra_border_2").addClass('highlight');
    $(this).siblings().removeClass('highlight');
    $("#extra_border_1").removeClass('highlight');
    $("#extra_border_3").removeClass('highlight');
    $('#content_massage').slideDown();
    $('#content_massage').siblings().slideUp();
});

$('#hotstone').click(function() {
    $(this).addClass('highlight');
    $("#extra_border_3").addClass('highlight');
    $(this).siblings().removeClass('highlight');
    $("#extra_border_1").removeClass('highlight');
    $("#extra_border_2").removeClass('highlight');
    $('#content_hotstone').slideDown();
    $('#content_hotstone').siblings().slideUp();
});

$("#facial").click();    

