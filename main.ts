let numa = 0
input.onButtonPressed(Button.A, function() { 
  numa  = randint(1, 3)
   if(numa == 1){
       basic.showIcon(IconNames.SmallSquare)
   }
   if(numa == 2){
       basic.showIcon(IconNames.Scissors)
   }
   if(numa == 3){
       basic.showIcon(IconNames.Square)
   }
})
let numb = 0
input.onButtonPressed(Button.B, function () {
    numb  = randint(1, 3)
    if (numb == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (numb == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (numb == 3) {
        basic.showIcon(IconNames.Square)
    }
    if(numb == numa){
        basic.showString("0")
    }
   else if(numb == 2 && numa == 3){
        basic.showString("B")
    }
   else if(numb == 1 && numa == 2){
        basic.showString("B")
    }
   else  if(numb == 3 && numa == 1){
        basic.showString("B")
    }
    else{
        basic.showString("A")
    }
})
