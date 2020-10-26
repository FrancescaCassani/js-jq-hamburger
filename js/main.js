/**MOSTRARE / NASCONDERE ELEMENTI */

var lista = $(".header-right");

lista.click( function () {
    $("ul").show();
    lista.click( function () {
        $("ul").hide(); 
    })
})







