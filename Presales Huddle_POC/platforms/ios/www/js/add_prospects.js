var arrayInstance=[];
var x=0;
function abc(){
    /*alert("fjhg");*/
    this.paname = document.addProspect.pname.value;
    this.pdate=document.addProspect.date.value;
    this.ptechstack=document.addProspect.TechStack.value;
    this.pContacts=document.addProspect.Contacts.value;
    this.pDomain=document.addProspect.Domain.value;
    this.pComposition=document.addProspect.Composition.value;
    this.pnumber=document.addProspect.Size.value;
    this.pStatus=document.addProspect.Status.value;
    this.pnotes=document.addProspect.notes.value;

    var http = new XMLHttpRequest();
    var url = "https://172.24.212.39:8080/prospect/add/";
    var params = "Name="+this.paname;
    http.open("POST",url,true);
    var psize=parseInt(this.pnumber);
    var data=JSON.stringify({Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:psize,Notes:this.pnotes,CreateDate:this.pdate});
            console.log(data);
            console.log(http);
    /*alert(data);
    alert(http);*/
            http.onreadystatechange = function() {//Call a function when the state changes.
              if(http.readyState == 4 && http.status == 200) {
                //  mail(data);
                  /*querySuccess();*/
                 fghi();

                }
    }
    http.onerror=function(E)
    {
        alert("error"+ E);
    }
    http.send(data);
}

function newabc(){
    /*alert("newabc");*/
    var instance=new abc();
}

function querySuccess(){
    var t=null;
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(responseText)
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
             var obj = JSON.parse(xmlhttp.responseText);
             var str=JSON.stringify(obj);
             var newArr = JSON.parse(str);
             var len=newArr.length;
             $.mobile.pageContainer.pagecontainer( "change","sales_home.html");
             location.reload();
             $(document).on('pageshow', "#temp", function (event, data) {
             while (len > 0) {
                $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                len--;
             }
                 var x=0;
                 if(x==0){
                     location.reload();
                     x=1;
                 }
        });
    }
    xmlhttp.onerror=function(E)
    {
        alert("error"+ E);
    }
    xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
    xmlhttp.send();


}









