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
            {             if(localStorage.getItem("pin1")==null){

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
                            /*while (len > 0) {
                             $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                             len--;
                             newArr[len-1].pinn="false";

                             // var data=JSON.parse(newArr[len-1]);
                             // data.concat(pinn1);
                             //alert(data);
                             *//*alert(newArr[len-1]);*//*
                             pinned[y]=JSON.stringify(newArr[len-1]);
                             *//* pinned[y].pinn=JSON.stringify('false');*//*
                             y++;
                             *//*alert(pinned);*//*

                             }*/
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
                alert(lcl);
                var data123=JSON.parse(lcl);
                alert(data123);
                var length_local=data123.length;
                alert(length_local);
               /* alert(data123[0])*/;
                var flag=0;
                /*var idd=JSON.parse(data123[0]);
                alert(idd);*/
                 alert("done");

                var t = null;
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function(responseText) {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
                        var obj = JSON.parse(xmlhttp.responseText);
                        var str = JSON.stringify(obj);
                        var newArr = JSON.parse(str);
                        var len = newArr.length;
                        alert(len);
                        $.mobile.pageContainer.pagecontainer("change", "sales_home.html");
                        $(document).on('pageshow', "#temp", function(event, data) {
                            /*while (len > 0) {
                             $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                             len--;
                             newArr[len-1].pinn="false";

                             // var data=JSON.parse(newArr[len-1]);
                             // data.concat(pinn1);
                             //alert(data);
                             *//*alert(newArr[len-1]);*//*
                             pinned[y]=JSON.stringify(newArr[len-1]);
                             *//* pinned[y].pinn=JSON.stringify('false');*//*
                             y++;
                             *//*alert(pinned);*//*

                             }*/
                            while (len>0) {
                                $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');

                               /* flag=0;
                                length_local=len22;*/
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
            {              var dd=localStorage.getItem("rem1");
                alert(dd);

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
                                len--;
                            }
                        });
                    }                                                       // Block ends here
                }
                xmlhttp.onerror = function(E) {
                    alert("error" + E);
                }

                xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
                xmlhttp.send();
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
    localStorage.clear();
   /* alert("in remember");*/
    var email1=document.login.email;
    var password=document.login.pwd;
    var email= document.login.email.value;
    var passs= document.login.pwd.value;
    var uid_len = password.value.length;
    var user_type=document.getElementsByName("usertype");
    var user_type1=document.getElementsByName("usertype").value;
    var len=user_type.length;
    /*alert("checked");*/
       var pass1=password.toString();
     /*alert(email);
     alert(passs);*/

    var x = document.getElementById("check").checked;
    alert(x);
   /* alert("checked1");*/
    var data12 = {'mail':email,'pass':passs};
    var rem=JSON.stringify(data12);
    /*alert("checked2");*/
    var data13 ={'mail':"",'pass':"",'radio':""};
    var rem3=JSON.stringify(data13);
    /*alert("hello");*/
    if(document.getElementById("check").checked==true){
        alert("inside x==1");
        localStorage.setItem("rem1",rem);
        validate1();
    }

    else{
        localStorage.setItem("rem1",rem3);
        validate1();
    }
}