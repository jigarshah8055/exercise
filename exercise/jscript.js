
    $("button").click(function(e){
        e.preventDefault();
    
        var userObj={};
        var flag=0;
        var ips=$(':input').serializeArray();
        jQuery.each(ips,function(i,ip){

            if(ip.value == "")
            {
                alert(ip.name + " Required!");
            }
            else if(ip.value != "") 
            {
                if((ip.name == 'FirstName') && (ip.value[0]>=0 && ip.value[0]<=9))
                {
                    alert("First Name should start with charatcter");
                }
                else if((ip.name == 'MiddleName') && (ip.value[0]>=0 && ip.value[0]<=9))
                {
                    alert("Middle Name should start with charatcter");
                }
                else if((ip.name == 'LastName') && (ip.value[0]>=0 && ip.value[0]<=9))
                {
                    alert("Last Name should start with charatcter");
                }
                else if ((ip.name == 'Password') && (ip.value.length <= 6)) 
                {
                    alert("Password is small");
                    flag = 1;
                }
                else
                {
                    userObj[ip.name] = ip.value;
                }
            }
        });
        if(JSON.stringify(userObj) != '{}' && flag == 0 ){
            $("#t1").append('<tr><td>'+userObj.FirstName+'</td>'+
            '<td>'+userObj.LastName+'</td>'+
            '<td>'+userObj.MiddleName+'</td>'+
            '<td>'+userObj.Email+'</td>'+
            '<td>'+userObj.Password+'</td>'+
            '<td>'+userObj.gndr+'</td>'+
            '<td>'+userObj.Hobbies+'</td></tr>');
        }
    });
    