$(function () {
    $("#ejemploTabs").tabs().tabs({
        fx: {
            opacity: "toggle",
            duration: "slow"
        },
        collapsible:true
    });
    $("#acordeon").accordion().accordion({ event: "mouseover" });
    $("#miDialogo").dialog({autoOpen:false});
});

function muestraDialogo() {
    jQuery(function () {
        $("#miDialogo").dialog({
            autoOpen: true,
            maxHeight: 200,
            maxWidth: 500,
            resizable: false,
            draggable:false
            
        });
    });


}

function deshabilita(numeroTab) {
    jQuery(function () {
        $("#ejemploTabs").tabs({
            disabled: [numeroTab,numeroTab+1]
        });
    });


}

function ponUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("add","","un nuevo Tab");
    });
}

function quitaUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("remove",1);
    });
}