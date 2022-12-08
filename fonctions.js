nb_clic = 0;
function ma_fonction(message){
      // alert(message);
      //console.log();
      nb_clic++;
      document.getElementById('paragraphe').innerHTML= ' Vous avez cliquez :  ' + message + ' ' + nb_clic + 'fois'; 
  }
  function supprimer(){
      nb_clic = 0;
      message = '';
      document.getElementById('paragraphe').innerHTML= 'Vous avez remis à zéro';
  }
  /* function plus(){
      nb_clic++;
      document.getElementById('paragraphe').innerHTML= ' Vous avez cliquez :  ' + nb_clic + ' fois'; 
  }
  function moins(){
      nb_clic--;
      document.getElementById('paragraphe').innerHTML= ' Vous avez cliquez :  ' + nb_clic + ' fois'; 
  } */
  elem=document.getElementById('paragraphe');
  function updown(onclick){
      if (onclick=='plus'){
          nb_clic++;
      }
      else {
          nb_clic--;
      }
      elem.innerHTML= ' Vous avez cliquez :  ' + nb_clic + ' fois';
  }

  /*function dire_bonjour(){
  prenom = document.getElementById('prenom').value;
  
  //document.getElementById('paragraphe2').innerHTML="Bonjour " + prenom;   
}*/


  function in_title(){
      prenom = document.getElementById('prenom').value;
      document.getElementById('titre').innerHTML= prenom;
      document.getElementById('paragraphe3').innerHTML="Bonjour " + civ  + ' ' + prenom;
  }

  function change_civilite(){
      //paragraphe3 = document.getElementById('civ').value;
      //prenom = document.getElementById('prenom').value;
      civ = document.getElementById('civ').value; 
      prenom = document.getElementById('prenom').value;
      document.getElementById('paragraphe3').innerHTML= "Bonjour " + ' ' + civ + ' ' + prenom;
  }

  div_modifiable = document.getElementById('div_modifiable');
  
  function note_interface(){      
      note = document.getElementById('note').value;
      document.getElementById('paragraphe4').innerHTML= "Vous attribuez le score de  " + note + '/100 à cette magnifique interface' ;
      div_modifiable.style.width=note + "%";
      div_modifiable.innerHTML=note + "%";
  }

  //function rgb(){
      //rouge = document.getElementById('noter').value;
      //vert = document.getElementById('notev').value;
      //bleu = document.getElementById('noteb').value;
      //opacite = document.getElementById('opacite').value;
      //document.getElementById('div_bg').style.backgroundColor='rgba(' + rouge + ',' + vert  + ',' + bleu + ',' + opacite +')';
    
    //   document.getElementById('prouge').innerHTML= rouge/16;
    //   document.getElementById('pvert').innerHTML= vert/16;
    //   document.getElementById('pbleu').innerHTML= bleu/16;
    //   document.getElementById('popacite').innerHTML= opacite;
    //}

function choixcoul(){
    rouge = document.getElementById('noter').value;
      vert = document.getElementById('notev').value;
      bleu = document.getElementById('noteb').value;
      opacite = document.getElementById('opacite').value;

    document.getElementById('test').style.color='rgba(' + 255 + ',' + 255  + ',' + 255 + ',' + 1 +')';
    document.getElementById('div_bg').style.backgroundColor='rgba(' + 255 + ',' + 255  + ',' + 255 + ',' + 1 +')';
      
    choixmodif = document.getElementById('choixmodif').value;

    if(choixmodif == 'para'){
        document.getElementById('test').style.color='rgba(' + rouge + ',' + vert  + ',' + bleu + ',' + opacite +')';

    }else if (choixmodif == 'bg'){
        document.getElementById('div_bg').style.backgroundColor='rgba(' + rouge + ',' + vert  + ',' + bleu + ',' + opacite +')';
    }


}
//document.getElementById('test').style.color='rgba(' + rouge + ',' + vert  + ',' + bleu + ',' + opacite +')';
//document.getElementById('div_bg').style.backgroundColor='rgba(' + rouge + ',' + vert  + ',' + bleu + ',' + opacite +')';

function supprimer2(){
      rouge = document.getElementById('noter');
      vert = document.getElementById('notev');
      bleu = document.getElementById('noteb');
      opacite = document.getElementById('opacite');
      
      //document.getElementById('test').style.color='rgba(' + 255 + ',' + 255  + ',' + 255 + ',' + 1 +')';
      //document.getElementById('div_bg').style.backgroundColor='rgba(' + 255 + ',' + 255  + ',' + 255 + ',' + 1 +')';
      
      rouge.value=0;
      vert.value=0;
      bleu.value=0;
      opacite.value=1;

      document.getElementById('test').style.color='rgba(' + 255 + ',' + 255  + ',' + 255 + ',' + 255 +',' + 1 + ')';
      document.getElementById('div_bg').style.backgroundColor='rgba(' + 255 + ',' + 255  + ',' + 255 + ',' + 1 +')';

}

//supprimer2();
choixcoul();
change_civilite();