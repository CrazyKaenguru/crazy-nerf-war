//#region Buttons
var getIput=false;
var submitvar=false;
var deleteinput=false;
var submitinput=true;
function add1()
{  if(getIput==true)
    document.getElementById("Display").innerHTML+="1";
}
function add2()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="2";
}
function add3()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="3";
}
function add4()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="4";
}
function add5()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="5";
}
function add6()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="6";
}
function add7()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="7";
}
function add8()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="8";
}
function add9()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="9";
}
function add0()
{if(getIput==true)
    document.getElementById("Display").innerHTML+="0";
}
function deleteInput()
{if(deleteinput==true)
    document.getElementById("Display").innerHTML="";
}
function submit()
{if(submitinput==true)
 submitvar=true;
}
//#endregion
//#region DisplayLogic

//#endregion
//#region BombLogic
var password="0000"
window.onload=Update;


function Update()
{
Setupfunction();
setTimeout(Update, 500);
FuseBomb();
ExpTimer();
Defuse();

}

var SetupComleted =false;
function Setupfunction()
{
    if(SetupComleted==false)
    {
if(submitvar==true)
{
    document.getElementById("Display").innerHTML="";
getIput=true;
submitvar=false;
deleteinput=true;
submitinput=false;
}
if(document.getElementById("Display").innerHTML.length==4)
{
    password=document.getElementById("Display").innerHTML;
    clearDisp();
    document.getElementById("Display").innerHTML="press '→' and put in password to fuse";
    deleteinput=false;
    getIput=false;
    SetupComleted=true;
    submitinput=true;
    
}
}
}
var Fused=false;
function clearDisp()
{
    document.getElementById("Display").innerHTML="";
}
function FuseBomb()
{if(SetupComleted==true)
    {
    if(submitvar==true&&Fused==false)
    {
     clearDisp();
     deleteinput=true;
    getIput=true;
    submitvar=false;
    }
    if(document.getElementById("Display").innerHTML == password&&Fused==false)
    {
        document.getElementById("Display").innerHTML="Bomb fused!"
        deleteinput=false;
         getIput=false;
        setTimeout(Fused=true,700);
    }
}
}
var Defusing=false;
var Defused=false;
function Defuse()
{
    console.log("Fused:"+ Fused);
 if(Fused==true&&submitvar==true)
 {
     console.log("Defusing");
     Defusing=true;
     submitvar=false;
     document.getElementById("Display").innerHTML="";
     
 }
 if(Defusing==true)
 {
     console.log("Defusing");
    getIput=true;
    deleteinput=true;
    console.log(Defusing);
    if(document.getElementById("Display").innerHTML==password)
    {
        Fused=false;
        document.getElementById("Display").innerHTML="Bomb defused";
        getIput=false;
    deleteinput=false;
    Defusing=false;
    console.log("Defused");
    Defused=true;
    
    }
    //if(document.getElementById("Display").innerHTML!=password)
   // {
   //     Defusing=false;
    //    document.getElementById("Display").innerHTML="Error";
    //    console.log("error");
   // }
 }
}

var ReamTime=5;
var Detonated=false;
var soundstartet=false;
function changeReamTime()
{
    ReamTime=document.getElementById("ReamTimeInput").value;
    console.log(ReamTime);
}
//#region Timers
function ExpTimer()
{
    
 if(Fused==true&&Detonated==false)
 {
     if(soundstartet==false)
    {
    PlaySound();
    soundstartet=true;
    }
     ReamTimemin1();
     if(Defusing==false)
     {
     document.getElementById("Display").innerHTML="Detonation in "+ReamTime+" press → to defuse";
     }
     if(ReamTime==0)
     {
         Detonate();
     }
 }
}
var bleep = new Audio("beep-02.mp3");
var explosion = new Audio("explosion.wav");
function ReamTimemin1()
 {
     ReamTime-=0.5;
 }
 function PlaySound()
 {if(Detonated==false&&Defused==false)
    {
     console.log("playedSound");
    
    bleep.play();
    setTimeout(PlaySound,1100);
    }
 }
//#endregion
//#region Detonate

function Detonate()
{
    Detonated=true;
    document.getElementById("Display").innerHTML="----------";
    bleep.pause();
    explosion.play();
    getIput=false;

}

//#endregion
//#endregion
//#region VisualStuff


function HideSettings()
{
   document.getElementById("settings").style.visibility="hidden";
}
function showsettings()
{
    document.getElementById("settings").style.visibility="visible";
}
visible=false;
function changesettingsvisibility()
{
    if(visible==false)
    {
        showsettings();
        visible=true;
    }
    else
    {
        HideSettings();
        visible=false;
    }
}
//#endregion
