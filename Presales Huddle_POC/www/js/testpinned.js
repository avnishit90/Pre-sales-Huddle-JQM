var arrayInstance=[];
var x=0;
pinned = localStorage;
function abc1(){
    this.paname = document.addProspect.pname.value;
    this.pdate=document.addProspect.date.value;
    this.ptechstack=document.addProspect.TechStack.value;
    this.pContacts=document.addProspect.Contacts.value;
    this.pDomain=document.addProspect.Domain.value;
    this.pComposition=document.addProspect.Composition.value;
    this.pnumber=document.addProspect.Size.value;
    this.pStatus=document.addProspect.Status.value;
    this.pnotes=document.addProspect.notes.value;
    this.ppin=document.getElementById("pin").value;



    alert(this.ppin);

    var psize=parseInt(this.pnumber);
    pinned = localStorage;
    var data=JSON.stringify({Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:psize,Notes:this.pnotes,CreateDate:this.pdate,pin:this.ppin});

    localStorage.setItem('info',data);
    alert(pinned.length);
    var newArr = JSON.parse(localStorage.getItem(pinned));
    alert(newArr);


















/*    var http = new XMLHttpRequest();
    var url = "http://172.24.212.39:8080/prospect/add/";
    var params = "Name="+this.paname;
    http.open("POST",url,true);
    var psize=parseInt(this.pnumber);
    var data=JSON.stringify({Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:psize,Notes:this.pnotes,CreateDate:this.pdate});
    console.log(data);
    console.log(http);
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            mail();
            querySuccess();
        }
    }
    http.onerror=function(E)
    {
        alert("error"+ E);
    }
    http.send(data);*/
}

function newabc1(){
    var instance=new abc1();
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
        $(document).on('pageshow', "#temp", function (event, data) {
            while (len > 0) {
                $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                len--;
            }
        });
    }
    xmlhttp.onerror=function(E)
    {
        alert("error"+ E);
    }
    xmlhttp.open("GET","http://172.24.212.39:8080/prospect/view/",true);
    xmlhttp.send();
}











