
while (len>0) {
    $('#list').append('<li onclick="test11()">'+'<a'+' '+'href="#" id='+newArr[len-1].ProspectID+' class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+newArr[len-1].Name+'<br>'+'<p'+' '+'class="aaaa">'+newArr[len-1].TechStack+'</p>'+'</a>'+'</li>');
           length_local=data123.length;


    while(length_local>0){
        idd=JSON.parse(data123[length_local-1]);
        flag=0;
        if(idd.ProspectID==newArr[len-1].ProspectID){
            alert(idd.ProspectID);
            alert(idd.pinn);
            flag=1;

                data11 = {'ProspectID':idd.ProspectID,'pinn':idd.pinn};
                pinned[y]=JSON.stringify(data11);
                y++;
            break;

    }

        length_local--;
        }

    len--;

}