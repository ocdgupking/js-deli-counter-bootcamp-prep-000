var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeli = katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " +  (katzDeliLine.length) + " in line.")
}

function nowServing(){

  if (katzDeli.length > 0 )
    {
      return (katzDeli[0])
    }
  else {
    return ("There is nobody waiting to be served!")
  }
}