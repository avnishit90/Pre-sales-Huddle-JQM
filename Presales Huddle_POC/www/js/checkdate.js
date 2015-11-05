/*


$("input[type='date']").change( function() {
    alert("in check date");
    if ($(this).val() > new Date()) {
        alert("You cannot select a day future than today!");
        var today=new Date();
        $('#adate').val(today);
    }
});*/
/*
function {
    alert("kugds");
    var today=new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();

    var today = mm+'/'+dd+'/'+yyyy;
    if (document.getElementById('adate').value > today) {
        alert("You cannot select a day future than today!");
                $('#textBoxName').val(today);  }
   */
/* document.getElementById('adate').value = new Date();*//*

});*/


function chkdate(){

    var today=new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();

    var today = yyyy+'-'+mm+'-'+dd;

    var today1=today.toString();
    /*document.getElementById("adate").max = "2015-10-29";*/
    document.getElementById("adate").max = today1;


}