function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5p9KwfQHBy8":
        Script1();
        break;
      case "6BVfWWnBMyM":
        Script2();
        break;
  }
}

function Script1()
{
  var randomnumber1 = Math.floor((Math.random()*99)+1); 
var randomnumber2 = Math.floor((Math.random()*99)+1); 
var player = GetPlayer(); 
player.SetVar("numeroazar1",randomnumber1); 
player.SetVar("numeroazar2",randomnumber2); 
var x = player.GetVar("numeroazar1"); 
var y = player.GetVar("numeroazar2"); 
var z = x+y; 
player.SetVar("resultado",z);
}

function Script2()
{
  var randomnumber1 = Math.floor((Math.random()*99)+1); 
var randomnumber2 = Math.floor((Math.random()*99)+1); 
var player = GetPlayer(); 
player.SetVar("numeroazar1",randomnumber1); 
player.SetVar("numeroazar2",randomnumber2); 
var x = player.GetVar("numeroazar1"); 
var y = player.GetVar("numeroazar2"); 
var z = x+y; 
player.SetVar("resultado",z);
}

