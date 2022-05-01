//#region BlueTimeLogic
var timeBL = 0;
var BLUE = false;
function updateTimeBL() {
    document.getElementById('timeBL').innerHTML = timeBL;
  }
  function addSecondLogicBL() {
      timeBL +=1;
      updateTimeBL();
      addSecondBL();
  }
  function addSecondBL() {
      if(BLUE==true)
      {
    setTimeout(addSecondLogicBL, 1000);
      }
    updateTimeBL();
  }
  function pauseBL()
  {
   BLUE=false;
  }
  function goBL()
  {
   BLUE=true;
   addSecondBL()
  }
  window.onload = updateTimeBL;
  window.onload = addSecondBL;
  //#endregion
  //#region BlueTimeLogic
var timeRE = 0;
var RED = false;
function updateTimeRE() {
    document.getElementById('timeRE').innerHTML = timeRE;
  }
  function addSecondLogicRE() {
      timeRE +=1;
      updateTimeRE();
      addSecondRE();
  }
  function addSecondRE() {
      if(RED==true)
      {
    setTimeout(addSecondLogicRE, 1000);
      }
    updateTimeRE();
  }
  function pauseRE()
  {
   RED=false;
  }
  function goRE()
  {
   RED=true;
   addSecondRE()
  }
  window.onload = updateTimeRE;
  window.onload = addSecondRE;
  //#endregion
  //#region ButtonLogic
  window.onload =checkButtons;
  function checkButtons()
  {
  document.getElementById('pauseGame').addEventListener('click', ()=>{
    pauseBL();
    pauseRE();
});
document.getElementById('resetGame').addEventListener('click', ()=>{
    document.getElementById('resetGame').disabled=true;
    document.getElementById('noresetGame').disabled=false;
    document.getElementById('reallyresetGame').disabled=false;
});
document.getElementById('noresetGame').addEventListener('click', ()=>{
    document.getElementById('resetGame').disabled=false;
    document.getElementById('reallyresetGame').disabled=true;
    document.getElementById('noresetGame').disabled=true;
});
document.getElementById('startGame').addEventListener('click', ()=>{
    if(document.getElementById("team_blue_button").disabled == true)
    {
        goBL();
    }
    if(document.getElementById("team_red_button").disabled == true)
    {
        goRE();
    }
   
});
document.getElementById('team_red_button').addEventListener('click', ()=>{
    console.log("CaptureRED");
    document.getElementById("currentlycapturing").innerHTML="RED";
    goRE();
    pauseBL();
    document.getElementById("team_red_button").disabled = true;
    document.getElementById("team_blue_button").disabled = false;
});
document.getElementById('team_blue_button').addEventListener('click', ()=>{
    document.getElementById("currentlycapturing").innerHTML="BLUE";
    console.log("CaptureBLUE");
    goBL();
    pauseRE();
    document.getElementById("team_blue_button").disabled = true;
    document.getElementById("team_red_button").disabled = false;
});
  }
  //#endregion

