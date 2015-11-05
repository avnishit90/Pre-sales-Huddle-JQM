   var pinned1=[];

   function pinning(){
       alert(pinned);
       var lcl=localStorage.getItem("pin1");
       var data123=JSON.parse(lcl);
       var length_local=data123.length;
       var idd=JSON.parse(data123[0]);
       alert(idd);
       alert(idd.ProspectID);

       var len21= length_local;
       var t = null;
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function(responseText) {
           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
               var obj = JSON.parse(xmlhttp.responseText);
               var str = JSON.stringify(obj);
               var newArr = JSON.parse(str);
               var len = newArr.length;
               $('#list').empty();

               while (len > 0) {

                   length_local=len21;
                   while(length_local>0){

                       idd=JSON.parse(data123[length_local-1]);
                       /*if(idd.ProspectID==newArr[len-1].ProspectID){
                           if(idd.pinn=='true') {
                               $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                           }
                       }*/
                       if(idd.ProspectID==newArr[len-1].ProspectID && idd.pinn=='true'){

                               $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');

                       }

                       length_local--;
                   }
                   len--;
               }

           }                                                       // Block ends here
       }
       xmlhttp.onerror = function(E) {
           alert("error" + E);
       }

       xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
       xmlhttp.send();

   }



function test11(){
    var parent = document.getElementById('list');
    parent.addEventListener('click', function(e) {
        id=e.target.id;
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function(responseText) {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var obj = JSON.parse(xmlhttp.responseText);
                var str=JSON.stringify(obj);
                var newArr = JSON.parse(str);
                var len=newArr.length;
                $.mobile.pageContainer.pagecontainer("change", "update.html");
                $(document).on('pageshow', "#temp1", function (event, data) {
                while (len > 0) {
                     if(newArr[len-1].ProspectID==id){
                         $(document).ready(function() {
                             $("#aname").val(newArr[len-1].Name);
                             $("#adate").val(newArr[len-1].CreateDate);
                             $("#atech").val(newArr[len-1].TechStack);
                         });
                         console.log(newArr[len-1].Name);
                         viewpanel();
                         break;
                     }
                    len--;

                }
                     aid=id;
                });
            }
        }
        xmlhttp.onerror=function(E)
        {
            alert("error"+ E);
        }
        xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
        xmlhttp.send();
    });
}

   function  viewpanel(){

       alert(id);
       var t = null;
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function(responseText) {
           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
               var obj = JSON.parse(xmlhttp.responseText);
               var str = JSON.stringify(obj);
               var newArr = JSON.parse(str);
               alert(newArr);
               alert(str);
               var len = newArr.length;
               /*$(document).on('pageshow', "#myPanel", function(event, data) {*/
                   alert("in panel");
                              while (len > 0) {
                                  alert("in while");
                                  if(newArr[len-1].ProspectID==id){



                                 /*     <label class="ui-accessible">question</label>
                                      <input type="text" name="textinput-4" id="textinput-4" placeholder="ajkkhlknlkdnghfdh" value="">*/

                                          /*$('#specialCont').append('<label'+' '+'class="ui-btn ui-corner-all ui-btn-inherit"'+' '+'id="ques">'+newArr[len-1].Query+'</lable>');*/
                                     /* $('#specialCont').append('<label'+' '+'class="ui-btn ui-corner-all ui-btn-inherit"'+' '+'id="ques">QUESTION:-'+newArr[len-1].Query+'<br>'+'ANSWER:-'+newArr[len-1].Answer+'</lable>');*/
                                      $('#specialCont').append('<label'+' '+'class="ui-btn ui-corner-all ui-btn-inherit" style="text-align: left;background-color:#E0D1D1;font-weight:bold;overflow:hidden;">QUESTION:-&nbsp;'+newArr[len-1].Query+'<br><br>'+'ANSWER:-&nbsp;'+newArr[len-1].Answer+'</lable>');
                                       /*   $('#specialCont').append('<label'+' '+'class="ui-accessible"'>''+newArr[len-1].ProspectID+')*/
                                     /* $('#specialCont').append('<label'+' '+'class="ui-corner-all ui-btn-inherit">'+newArr[len-1].Answer+'</lable>');*/



                       /*$('#specialCont').append('<a'+' '+'href="#" id='+newArr[len-1].ProspectID+'>'+newArr[len-1].Query+'<br>'+'<p'+' '+'>'+newArr[len-1].Answer+'</p>'+'</a>'+'</li>');*/
                                  }
                       len--;

                   }

               /*});*/
           }                                                       // Block ends here
       }
       xmlhttp.onerror = function(E) {
           alert("error" + E);
       }

       xmlhttp.open("GET","https://172.24.212.39:8080/discussion/view/",true);
       xmlhttp.send();




   }




function update(){
    alert(aid);
    this.paname = document.addProspect.pname.value;
    this.pdate=document.addProspect.date.value;
    this.ptechstack=document.addProspect.TechStack.value;
    this.pContacts =document.addProspect.Contacts.value;
    this.pDomain=document.addProspect.Domain.value;
    this.pComposition=document.addProspect.Composition.value;
    this.pnumber=document.addProspect.Size.value;
    this.pStatus=document.addProspect.Status.value;
    this.pnotes=document.addProspect.notes.value;
    var n = parseInt(aid, 10);
    var size=parseInt(this.pnumber, 10);

    this.pin=document.getElementById('flip-min').value;
    var data1={ProspectID:n,Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:size,Notes:this.pnotes,CreateDate:this.pdate,pinned:this.pin};
   // pinned=new Array();
    localStorage[pinned]=new Array();
    pinned[y]=data1;
    y++;

    alert(this.pin);
    if(this.pin=='on'){
        localStorage[pinned]=JSON.stringify(pinned);
        var store=JSON.parse(localStorage[pinned]);
        alert(store);
        alert("done");


    }


    var data={ProspectID:n,Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:size,Notes:this.pnotes,CreateDate:this.pdate};
    console.log(data);
    var data1=JSON.stringify(data);
    console.log(data1);
    var http = new XMLHttpRequest();
    var url = "https://172.24.212.39:8080/prospect/update/";
    http.open("POST",url,true);
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            console.log("DONE");
            fghi();
        }
    }
    http.onerror=function(E)
    {
        alert("error"+ E);
    }
    http.send(data1);
}





/*function pinning(){
    alert("hello");
    $('#list').empty();
    var newArray1 = JSON.parse(localStorage[pinned]);
    alert(newArray1);
    var str1=JSON.stringify(newArray1);
    alert(str1);

    var newArray2 = JSON.parse(str1)
    var len1=newArray2.length;
    alert(len1);


        while (len1 > 0) {
            alert(newArray2[len1-1].Name);
            $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArray2[len1-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArray2[len1-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArray2[len1-1].TechStack+'</p>'+'</a>'+'</li>');
            //$('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
            len1--;
        }



}*/
function xyz(){
   alert("in xyz");
    $('#list').empty();
    var t = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(responseText) {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
            var obj = JSON.parse(xmlhttp.responseText);
            var str = JSON.stringify(obj);
            var newArr = JSON.parse(str);
            var len = newArr.length;

            while (len > 0) {

                $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                len--;
            }

        }                                                       // Block ends here
    }
    xmlhttp.onerror = function(E) {
        alert("error" + E);
    }

    xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
    xmlhttp.send();
}


function unpinning(){
    alert("unpinning");
    alert(pinned);
    var lcl=localStorage.getItem("pin1");
    var data123=JSON.parse(lcl);
    var length_local=data123.length;
    var idd=JSON.parse(data123[0]);
    alert(idd);
    alert(idd.ProspectID);

    var len21= length_local;
    var t = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(responseText) {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
            var obj = JSON.parse(xmlhttp.responseText);
            var str = JSON.stringify(obj);
            var newArr = JSON.parse(str);
            var len = newArr.length;
            $('#list').empty();

            while (len > 0) {

                length_local=len21;
                while(length_local>0){

                    idd=JSON.parse(data123[length_local-1]);
                    /*if(idd.ProspectID==newArr[len-1].ProspectID){
                     if(idd.pinn=='true') {
                     $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
                     }
                     }*/
                    if(idd.ProspectID==newArr[len-1].ProspectID && idd.pinn=='false'){

                        $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');

                    }

                    length_local--;
                }
                len--;
            }

        }                                                       // Block ends here
    }
    xmlhttp.onerror = function(E) {
        alert("error" + E);
    }

    xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
    xmlhttp.send();

}


function pinning1(){

    localStorage[pinned]=new Array();
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

                       if(newArr[len-1].ProspectID)
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


function update1(){
    alert(aid);

    var lcl=localStorage.getItem("pin1");
   /* alert(lcl);*/
    var data123=JSON.parse(lcl);
    alert(data123);
    var length_local=data123.length;
    /*alert(length_local);
    alert(data123[0]);*/
    var idd=JSON.parse(data123[0]);
    alert(idd);
    /*alert(idd[0].ProspectID);*/
    alert(idd.ProspectID);
    this.paname = document.addProspect.pname.value;
    this.pdate=document.addProspect.date.value;
    this.ptechstack=document.addProspect.TechStack.value;
    this.pContacts =document.addProspect.Contacts.value;
    this.pDomain=document.addProspect.Domain.value;
    this.pComposition=document.addProspect.Composition.value;
    this.pnumber=document.addProspect.Size.value;
    this.pStatus=document.addProspect.Status.value;
    this.pnotes=document.addProspect.notes.value;
    var n = parseInt(aid, 10);
    var size=parseInt(this.pnumber, 10);
       var data11;

    this.pin=document.getElementById('flip-min').value;
        var z=0;
            alert("hghg");
    alert(this.pin);
    if(this.pin=='on'){
        alert("in on");

        while(length_local>0){
            /*alert("true");*/

            idd=JSON.parse(data123[length_local-1]);

            /*alert("before if");*/
            if(idd.ProspectID==aid){
                if(idd.pinn=='false') {
                alert(idd.ProspectID);
                alert(idd.pinn);
                idd.pinn='true';
                alert(idd.pinn);
                 data123[length_local].pinn='true';
                alert("success");
                 data11 = {'ProspectID':idd.ProspectID,'pinn':'true'};
                     pinned[z]=JSON.stringify(data11);
                z++;
                   alert("done");
            }
            }

            else{
                data11 = {'ProspectID':idd.ProspectID,'pinn':idd.pinn};

                pinned[z]=JSON.stringify(data11);
                z++;
            }
            length_local--;
            localStorage.setItem("pin1",pinned);
        }
           /*localStorage.clear();*/
        alert("exit");
        fghi();
   /*    // localStorage.setItem("pin1",pinned1);
        var lcl1=localStorage.getItem("pin1");
         alert(lcl1);
        var data1234=JSON.parse(lcl1);
        alert(data1234);

        alert(pinned);*/
    }

    else{
        alert("in off");

        while(length_local>0){
            /*alert("true");*/

            idd=JSON.parse(data123[length_local-1]);

            /*alert("before if");*/
            if(idd.ProspectID==aid){
                if(idd.pinn=='true') {
                    alert(idd.ProspectID);
                    alert(idd.pinn);
                    idd.pinn='false';
                    alert(idd.pinn);

                    alert("success");
                    data11 = {'ProspectID':idd.ProspectID,'pinn':'false'};
                    pinned[z]=JSON.stringify(data11);
                    z++;
                    alert("done");
                }
            }

            else{
                data11 = {'ProspectID':idd.ProspectID,'pinn':idd.pinn};

                pinned[z]=JSON.stringify(data11);
                z++;
            }
            length_local--;
            localStorage.setItem("pin1",pinned);
        }
        /*localStorage.clear();*/
        alert("exit");
        fghi();

    }


    }





    function fghi(){
        alert("in fghi");
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
        xmlhttp.open("GET","https://172.24.212.39:8080/prospect/view/",true);
        xmlhttp.send();
    }







    //var data1={ProspectID:n,Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:size,Notes:this.pnotes,CreateDate:this.pdate,pinned:this.pin};
    // pinned=new Array();
    //localStorage[pinned]=new Array();
   // pinned[y]=data1;
   // y++;
    /*alert("update10");
    var aaa=JSON.stringify(pinned);
    var store;
    store=JSON.parse(aaa);
    alert(store);
    var length1=pinned.length;
    alert(length1);
    var i=0;*/

/*    var length1=pinned.length;
    alert(length1);
    alert("while fetching");
    alert(pinned);
    pinned[0].pinn='true';
    alert(pinned[0]);
    var data =JSON.parse(pinned[0]);
    alert(data);
    alert(data[0].ProspectID);
    alert("done");

       if(this.pin=='on'){
           alert("hi");
           while(pinned[i].ProspectID!=aid){
               alert(i);
               alert(pinned[i].ProspectID);
               i++;
           }
                   pinned[i].pinn=1;
       }
         else{
           while(pinned[i].ProspectID!=aid){
               i++;
           }
           pinned[i].pinn=0;
       }

     store=JSON.parse(localStorage[pinned]);

    alert(store)*/;
  /*  if(this.pin=='on'){
        localStorage[pinned]=JSON.stringify(pinned);
        var store=JSON.parse(localStorage[pinned]);
        alert(store);
        alert("done");


    }*/


    /*var data={ProspectID:n,Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:size,Notes:this.pnotes,CreateDate:this.pdate};
    console.log(data);
    var data1=JSON.stringify(data);
    console.log(data1);
    var http = new XMLHttpRequest();
    var url = "https://172.24.212.39:8080/prospect/update/";
    http.open("POST",url,true);
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            console.log("DONE");
            fghi();
        }
    }
    http.onerror=function(E)
    {
        alert("error"+ E);
    }
    http.send(data1);*/
