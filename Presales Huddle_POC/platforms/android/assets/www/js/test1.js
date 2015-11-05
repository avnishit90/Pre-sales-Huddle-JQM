var pinned1=[];



function pinning(){
    var lcl=localStorage.getItem("pin1");
    var data123=JSON.parse(lcl);
    var length_local=data123.length;
    var idd=JSON.parse(data123[0]);


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
                    if(tech_home==1){

                        while (len > 0) {
                            if(newArr[len-1].ProspectID==id){
                                $("#aname").val(newArr[len-1].Name);
                                document.getElementById("aname").readOnly = true;
                                $("#adate").val(newArr[len-1].CreateDate);

                                $("#atech").val(newArr[len-1].TechStack);
                                document.getElementById("atech").readOnly = true;
                                $("#adomain").val(newArr[len-1].Domain);
                                document.getElementById("adomain").readOnly = true;
                                $("#asize").val(newArr[len-1].DesiredTeamSize);
                                document.getElementById("asize").readOnly = true;
                                viewpanel();
                                break;
                            }
                            len--;
                        }



                    }
                    else{
                        while (len > 0) {
                            if(newArr[len-1].ProspectID==id){
                                $("#aname").val(newArr[len-1].Name);
                                $("#adate").val(newArr[len-1].CreateDate);
                                $("#atech").val(newArr[len-1].TechStack);
                                $("#adomain").val(newArr[len-1].Domain);
                                $("#asize").val(newArr[len-1].DesiredTeamSize);
                                viewpanel();
                                break;
                            }
                            len--;
                        }

                    }
            /*        while (len > 0) {
                        if(newArr[len-1].ProspectID==id){
                            $("#aname").val(newArr[len-1].Name);
                            $("#adate").val(newArr[len-1].CreateDate);
                            $("#atech").val(newArr[len-1].TechStack);
                            $("#adomain").val(newArr[len-1].Domain);
                            $("#asize").val(newArr[len-1].DesiredTeamSize);
                            viewpanel();
                            break;
                        }
                        len--;
                    }*/
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

    var t = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(responseText) {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Block starts here
            var obj = JSON.parse(xmlhttp.responseText);
            var str = JSON.stringify(obj);
            var newArr = JSON.parse(str);
            var len = newArr.length;

            while (len > 0) {
                if(newArr[len-1].ProspectID==id){
                    $('#specialCont').append('<label'+' '+'class="ui-btn ui-corner-all ui-btn-inherit" style="text-align: left;background-color:#E0D1D1;font-weight:bold;word-wrap:break-word;text-wrap:normal !important;white-space:pre-wrap;">QUESTION:-&nbsp;'+newArr[len-1].Query+'<br><br>'+'ANSWER:-&nbsp;'+newArr[len-1].Answer+'</lable>');
                }
                len--;
            }
            /*ddate();*/
        }                                                       // Block ends here
    }
    xmlhttp.onerror = function(E) {
        alert("error" + E);
    }
    xmlhttp.open("GET","https://172.24.212.39:8080/discussion/view/",true);
    xmlhttp.send();
}

function ddate(){

    var today=new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd=dd.toString();
        dd='0'+dd;
    }
    else{
        dd=dd.toString();
    }
    if(mm<10){
        mm=mm.toString();
        mm='0'+mm
    }
    else{
        mm=mm.toString();
    }
    yyyy=yyyy.toString();
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("adate").max = today;
}

function ddate2(){

    var today=new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd=dd.toString();
        dd='0'+dd;
    }
    else{
        dd=dd.toString();
    }
    if(mm<10){
        mm=mm.toString();
        mm='0'+mm
    }
    else{
        mm=mm.toString();
    }
    yyyy=yyyy.toString();
    today = yyyy+'-'+mm+'-'+dd;

    $.mobile.pageContainer.pagecontainer("change","add_prospects.html");
    $(document).on('pageshow',"#add", function (event, data) {

        document.getElementById("adate1").value = today;
        document.getElementById("adate1").max = today;
       /* document.getElementById("adate1").value = today;*/
      });

}

function update(){
    this.paname = document.addProspect.pname.value;
    this.pdate=document.addProspect.date.value;
    this.ptechstack=document.addProspect.TechStack.value;
    this.pContacts =document.addProspect.Contacts.value;
    this.pDomain=document.addProspect.Domain.value;
    this.pComposition=document.addProspect.Composition.value;
    this.pnumber=document.addProspect.Size.value;
    this.pStatus=document.addProspect.Status.value;
    this.pnotes=document.addProspect.notes.value;
    var n = parseInt(aid,10);
    var size=parseInt(this.pnumber,10);
    this.pin=document.getElementById('flip-min').value;
    var data1={ProspectID:n,Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:size,Notes:this.pnotes,CreateDate:this.pdate,pinned:this.pin};
    localStorage[pinned]=new Array();
    pinned[y]=data1;
    y++;
    if(this.pin=='on'){
        localStorage[pinned]=JSON.stringify(pinned);
        var store=JSON.parse(localStorage[pinned]);
    }
    var data={ProspectID:n,Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:size,Notes:this.pnotes,CreateDate:this.pdate};
    var data1=JSON.stringify(data);
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

function xyz(){
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

    var lcl=localStorage.getItem("pin1");
    var data123=JSON.parse(lcl);
    var length_local=data123.length;
    var idd=JSON.parse(data123[0]);


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
    var lcl=localStorage.getItem("pin1");
    var data123=JSON.parse(lcl);
    var length_local=data123.length;
    var idd=JSON.parse(data123[0]);
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
    if(this.pin=='on'){
        while(length_local>0){
            idd=JSON.parse(data123[length_local-1]);
            if(idd.ProspectID==aid){
                if(idd.pinn=='false') {
                    idd.pinn='true';
                    data123[length_local].pinn='true';
                    data11 = {'ProspectID':idd.ProspectID,'pinn':'true'};
                    pinned[z]=JSON.stringify(data11);
                    z++;
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
        /*fghi();*/
    }

    else{
        while(length_local>0){
            idd=JSON.parse(data123[length_local-1]);
            if(idd.ProspectID==aid){
                if(idd.pinn=='true') {
                    idd.pinn='false';
                    data11 = {'ProspectID':idd.ProspectID,'pinn':'false'};
                    pinned[z]=JSON.stringify(data11);
                    z++;
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
      /*  fghi();*/

    }
    var data={ProspectID:n,Name:this.paname,TechStack:this.ptechstack,Domain:this.pDomain,DesiredTeamSize:size,Notes:this.pnotes,CreateDate:this.pdate};
    var data1=JSON.stringify(data);
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
function fghi(){
    if(tech_home==1){
        var t=null;
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function(responseText)
        {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                var obj = JSON.parse(xmlhttp.responseText);
            var str=JSON.stringify(obj);
            var newArr = JSON.parse(str);
            var len=newArr.length;
            $.mobile.pageContainer.pagecontainer( "change","tech_home.html");
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
    else{
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
    /*var t=null;
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(responseText)
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            var obj = JSON.parse(xmlhttp.responseText);
        var str=JSON.stringify(obj);
        var newArr = JSON.parse(str);
        var len=newArr.length;
        $.mobile.pageContainer.pagecontainer( "change","sales_home.html");
        *//*$.mobile.pageContainer.pagecontainer("change", "sales_home2121.html");*//*
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
    xmlhttp.send();*/
}
