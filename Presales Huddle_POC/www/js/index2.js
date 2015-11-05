var y=0;
var pinned=[];

function validate1()
{
    var email1=document.login.email;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var users = ["avnish.kumar@synerzip.com","kunjan.thakkar@synerzip.com"];
    var password=document.login.pwd;
    var domain="@synerzip.com";
    var email= document.login.email.value;
    var str= email.indexOf(domain);
    var uid_len = password.value.length;
    var user_type=document.getElementsByName("usertype");
    var len=user_type.length;
    var x=0;
    localStorage[pinned]=new Array();
    if(user_type[0].checked)
        x=1;
       if(email1.value.match(mailformat))
    {
        if (uid_len != 0 && str > 0)
        {
            if(x==0)
            {       tech_home=0;
                if(localStorage.getItem("pin1")==null){
                                     var t = null;
                                     var xmlhttp = new XMLHttpRequest();
                                     xmlhttp.onreadystatechange = function(responseText) {
                                     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
                                     var obj = JSON.parse(xmlhttp.responseText);
                                     var str = JSON.stringify(obj);
                                     var newArr = JSON.parse(str);
                                     var len = newArr.length;
                                     $.mobile.pageContainer.pagecontainer("change", "sales_home.html");
                                     $(document).on('pageshow', "#temp", function(event, data) {
                                      while (len > 0) {
                                         $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                                         var data11 = {'ProspectID':newArr[len-1].ProspectID,'pinn':'false'};
                                          len--;
                                           pinned[y]=JSON.stringify(data11);
                                           y++;

                                         }
                                     localStorage.setItem("pin1",JSON.stringify(pinned));
                                        });
                                     }                                                       // Block ends here
                                  }
                                  xmlhttp.onerror = function(E) {
                                         alert("error" + E);
                                    }

                                    xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
                                    xmlhttp.send();
             }
            else{
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

                        $.mobile.pageContainer.pagecontainer("change", "sales_home.html");

                        $(document).on('pageshow', "#temp", function(event, data) {

                            while (len>0) {
                                $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                                length_local=data123.length;
                                flag=0;
                                while(length_local>0){
                                    idd=JSON.parse(data123[length_local-1]);
                                    if(idd.ProspectID==newArr[len-1].ProspectID){
                                        flag=1;
                                        var data11 = {'ProspectID':newArr[len-1].ProspectID,'pinn':idd.pinn};
                                        pinned[y]=JSON.stringify(data11);
                                        y++;
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
                        });
                    }                                                       // Block ends here
                }
                xmlhttp.onerror = function(E) {
                    alert("error" + E);
                }

                xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
                xmlhttp.send();    }
            }
            else
            {                    tech_home=1;
                if(localStorage.getItem("pin1")==null){
                    var t = null;
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = function(responseText) {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
                            var obj = JSON.parse(xmlhttp.responseText);
                            var str = JSON.stringify(obj);
                            var newArr = JSON.parse(str);
                            var len = newArr.length;
                            $.mobile.pageContainer.pagecontainer("change", "tech_home.html");
                            $(document).on('pageshow', "#temp", function(event, data) {
                                while (len > 0) {
                                    $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                                    var data11 = {'ProspectID':newArr[len-1].ProspectID,'pinn':'false'};
                                    len--;
                                    pinned[y]=JSON.stringify(data11);
                                    y++;

                                }
                                localStorage.setItem("pin1",JSON.stringify(pinned));
                            });
                        }                                                       // Block ends here
                    }
                    xmlhttp.onerror = function(E) {
                        alert("error" + E);
                    }

                    xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
                    xmlhttp.send();
                }
                else{
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

                            $.mobile.pageContainer.pagecontainer("change", "tech_home.html");
                            $(document).on('pageshow', "#temp", function(event, data) {
                                    while (len>0) {
                                    $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                                    length_local=data123.length;
                                    flag=0;
                                    while(length_local>0){
                                        idd=JSON.parse(data123[length_local-1]);
                                        if(idd.ProspectID==newArr[len-1].ProspectID){
                                            flag=1;
                                            var data11 = {'ProspectID':newArr[len-1].ProspectID,'pinn':idd.pinn};
                                            pinned[y]=JSON.stringify(data11);
                                            y++;
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
                            });
                        }                                                       // Block ends here
                    }
                    xmlhttp.onerror = function(E) {
                        alert("error" + E);
                    }

                    xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
                    xmlhttp.send();    }
            }
        }
        else{
            alert('password or Email-id mismatch');
        }
    }
    else{
        alert("invalid Email-id");
    }

}

function remember(){
    var email1=document.login.email;
    var password=document.login.pwd;
    var email= document.login.email.value;
    var passs= document.login.pwd.value;
    var uid_len = password.value.length;
    var user_type=document.getElementsByName("usertype");
    var user_type1=document.getElementsByName("usertype").value;
    var len=user_type.length;
    var pass1=password.toString();
    var x = document.getElementById("check").checked;
    var data12 = {'mail':email,'pass':passs};
    var rem=JSON.stringify(data12);
    var data13 ={'mail':"",'pass':"",'radio':""};
    var rem3=JSON.stringify(data13);
    if(document.getElementById("check").checked==true){
        localStorage.setItem("rem1",rem);
        validate1();
    }
   else{
        localStorage.setItem("rem1",rem3);
        validate1();
    }
}

