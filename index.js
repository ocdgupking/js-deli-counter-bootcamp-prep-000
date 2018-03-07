var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeli = katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " +  (katzDeliLine.length) + " in line.")
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length > 0 )
    {
      return 'Currently serving ' + katzDeliLine.shift() + '.'
      
    }
  else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++)
  return "The line is currently: " + i + '. ' + katzDeliLine
}
  else {
    return "The line is currently empty."
  }
}