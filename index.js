function scuberGreetingForFeet(someFeet){
  // Write your code

  if (someFeet <= 400){
          return "This one is on me!";
  }
  else if (someFeet > 2000 && someFeet < 2500){
      return "I will gladly take your thirty bucks.";
  }
  else if(someFeet> 2500){
      return "No can do.";
  }

}

function ternaryCheckCity(someCity){
  // Write your code here!

    if (someCity === "NYC") {
        return "Ok, sounds good.";
    }
    else{
        return "No go.";
    }
}




function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip==='generous'){
    return "Thank you so much.";
  }
  else if(tip==="not as generous"){
    return "Thank you.";
  }
  else { 
  return "Bye.";
  }
}


