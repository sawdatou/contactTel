/*document.addEventListener("deviceready", onDeviceReady, false);

function loadContacts(){
  let options=new ContactFindOptions();
  options.filter="";
  options.multiple="true";

  let fields=['*'];
  navigator.contacts.find(fields,showContacts,onError,options)
}

function showContacts(contacts){
  console.log(contacts);
}

function onError(error){
  console.log(error);
}*/


var tabContact=[];
function addContact() {
 	let newContact="<li data-icon='info'><a href='#infos' onclick='show(this)'><img src='img/avatarneutre.png' alt='avatar-contact'><h2>"+prenom.value+" "+nom.value+ "</h2><p class='numero'>"+num.value+"</p></a></li>";
 	contactList.innerHTML+=newContact;
 	num.select();
 	num.focus();
 	$('#contactList').listview('refresh');
  tabContact.push({"prenom":prenom.value, "nom":nom.value,"numero":num.value, "email":email.value})
} 

var idCont={};
function show(){
 	$('#contactList').on('click', function(){
      var num=event.target.innerHTML;
      for (var i = 0; i < tabContact.length; i++) {
          if((tabContact[i]['numero'])==num){
            var showcont="<img src='img/avatarneutre.png' alt='avatar-contact'><table><tr><td>Prenom </td><td><h2>"+tabContact[i]["prenom"]+"</h2></td></tr><tr><td>Nom</td><td><h2> "+tabContact[i]["nom"]+ "</h2></td></tr><tr><td>Numero</td><td><h2>"+tabContact[i]["numero"]+"</h2></td></tr><tr><td>Email</td><td><h3>"+tabContact[i]["email"]+"</h3></td></tr></table>"; 
            document.getElementById('more').innerHTML=showcont;
            idCont['index']=i;        
          }
        }
	});
}


function affichermodif(){
  var contModif=tabContact[idCont['index']];
  var contactModif="<input type='text' id='nomModif' placeholder='Nom' value='"+contModif['nom']+"'><br><input type='text' id='prenomModif' placeholder='Prenom' value='"+contModif['prenom']+"'><br><input type='text' id='numModif' placeholder='Numero' value='"+contModif['numero']+"'><br><input type='text' id='emailModif' placeholder='Email' value='"+contModif['email']+"'>";
  document.getElementById('modif').innerHTML=contactModif+'<a href="#Liste" data-role="button" data-inline="true" data-transition="flip" class="ui-link ui-btn ui-shadow ui-corner-all" role="button" onclick="modifierContact()">Modifier</a>'
}


function modifierContact(){
  var nomM=nomModif.value;
  var prenomM=prenomModif.value;
  var numM=numModif.value;
  var emailM=emailModif.value;
  contactList.innerHTML+="<li data-icon='info'><a href='#infos' onclick='show(this)'><img src='img/avatarneutre.png' alt='avatar-contact'><h2>"+prenomM+" "+nomM+ "</h2><p class='numero'>"+numM+"</p></a></li>";
  var ind=[idCont['index']];
  tabContact.splice(ind,1,{"prenom":prenomM, "nom":nomM,"numero":numM, "email":emailM});
  var numeroListView=document.getElementById('contactList').getElementsByClassName('numero');
  for (var i = 0; i < numeroListView.length; i++) {
      if(i==ind){
        $('#contactList li').remove();
        for (var j= 0; j < tabContact.length; j++) {
          contactList.innerHTML+="<li data-icon='info'><a href='#infos' onclick='show(this)'><img src='img/avatarneutre.png' alt='avatar-contact'><h2>"+tabContact[j]['prenom']+" "+tabContact[j]['nom']+ "</h2><p class='numero'>"+tabContact[j]['numero']+"</p></a></li>";
        }
        $('#contactList').listview('refresh');
      }
  }


}



function supprimerContact(){
  var ind=[idCont['index']];
  tabContact.splice(ind,1); 
  $('#contactList  li').remove(); 
  for (var j= 0; j < tabContact.length; j++) {      
    contactList.innerHTML+="<li data-icon='info'><a href='#infos' onclick='show(this)'><img src='img/avatarneutre.png' alt='avatar-contact'><h2>"+tabContact[j]['prenom']+" "+tabContact[j]['nom']+ "</h2><p class='numero'>"+tabContact[j]['numero']+"</p></a></li>";
   }
  $('#contactList').listview('refresh');
      
 }



 