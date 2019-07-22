//pseudo code
//Generate a random number and assign it as computer generated number between 19 to 120
//create four gem stones and assign random number to them between 1 to 12
//A click on a stone should add the value of that stone to the previous count.
//When the sum of stone clicks matches computer generated number mark as win else continue untill it reaches the value
//or goes past the number and mark as lost.
//Reset the game and follow the cycle again from step 2.



let random_result;
let wins=0;
let lost=0;
let previousNum=0;

random_result=Math.floor(Math.random()*101)+19;

 $("#result").html('Random Result: '+ random_result);

for(i=0;i<4;i++){
    var random = Math.floor(Math.random()*11)+1;
    //console.log(random)
    var crystal=$("<div>");
    crystal.attr({
        "class":'crystal',
        "data-random":random});
    $(".crystals").append(crystal);
}
 $(".crystal").on('click',function(){
var num= parseInt($(this).attr('data-random'));

previousNum += num;
console.log(previousNum);

if (previousNum>random_result){
lost++;
$("#lost").html(lost);
}
else if(previousNum===random_result){
    wins++;

$("#wins").html(wins);
}


 });