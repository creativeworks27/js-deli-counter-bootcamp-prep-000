function takeANumber(katzDeliLine){
  var number = 0;
  number++;
  katzDeliLine.push(number);
  let message = "Welcome, you are number " + number + " in line.";
  return message;
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  let nowServing = katzDeliLine[0];
  katzDeliLine.shift();
  return "Currently serving " + nowServing + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine){
  let currentLine = katzDeliLine.length;
  if (katzDeliLine > 0);
  for (var i=0; i < katzDeliLine.length; i++){
    return "The line is currently: " + currentLine + ". " + katzDeliLine[i] + ".";
  }

}