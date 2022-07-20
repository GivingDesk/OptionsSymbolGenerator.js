
function genOptionsSymbol(symbol, date, type, strike){
  var formDate = new Date(date)
  var month = (formDate.getMonth()+1).toString()
  var monthForm =  ("0" + month).slice(-2)
  var newDateForm= "O:"+symbol+ formDate.getFullYear().toString().split('20')[1]+ ""+ monthForm +""+ formDate.getDate()  ;
  var strikeForm = parseFloat(parseFloat(strike).toFixed(2))*1000
  var newStrikeForm = ("0000000" + strikeForm).slice(-8);
  var res = newDateForm+type.toUpperCase().slice(0,1)+newStrikeForm;
  return res;
}
