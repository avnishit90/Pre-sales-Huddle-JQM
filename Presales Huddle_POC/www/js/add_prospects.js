var arrayInstance=[];
var x=0;
var tech_home=0;
function abc(){
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


            http.onreadystatechange = function() {//Call a function when the state changes.
              if(http.readyState == 4 && http.status == 200) {
                  addunpinn();
              /* fghi();*/

                }
    }
    http.onerror=function(E)
    {
        alert("error"+ E);
    }
    http.send(data);
}

function newabc(){
    var instance=new abc();
}


function fghij(){
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
        /*$.mobile.pageContainer.pagecontainer("change", "sales_home2121.html");*/
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
    xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
    xmlhttp.send();
}


function addunpinn(){
        var lcl=localStorage.getItem("pin1");
        var data123=JSON.parse(lcl);
        var length_local=data123.length;
        var flag=0;
        var t = null;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(responseText) {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
                var obj = JSON.parse(xmlhttp.responseText);
                var str = JSON.stringify(obj);
                var newArr = JSON.parse(str);
                var len = newArr.length;


                var lcl=localStorage.getItem("rem1");
                var data123=JSON.parse(lcl);
                var idd=JSON.stringify(data123);
                var idd1=JSON.parse(idd);
                var data12 = {'mail':idd1.mail,'pass':idd1.pass};
                var rem=JSON.stringify(data12);
                var data13 ={'mail':"",'pass':"",'radio':""};
                var rem3=JSON.stringify(data13);


                localStorage.clear();
                    while (len>0) {
                        length_local=data123.length;
                          while(length_local>0){
                            idd=JSON.parse(data123[length_local-1]);
                            if(idd.ProspectID==newArr[len-1].ProspectID){
                                flag=1;
                              }

                            length_local--;
                        }
                        if(flag==0){
                            var data11 = {'ProspectID':newArr[len-1].ProspectID,'pinn':'false'};
                            pinned[y]=JSON.stringify(data11);
                            y++;

                        }
                        len--;
                   }
                    localStorage.setItem("pin1",JSON.stringify(pinned));
                    localStorage.setItem("rem1",rem);

                    fghij();

            }                                                       // Block ends here
        }
        xmlhttp.onerror = function(E) {
            alert("error" + E);
        }

        xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
        xmlhttp.send();


}







