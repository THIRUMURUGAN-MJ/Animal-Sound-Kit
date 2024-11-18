
var numberOfButtons=document.querySelectorAll("button").length;
console.log(numberOfButtons);
for(var i=0;i<numberOfButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",work);
    function work()
    {
        var name= this.classList[0];
        console.log(name);
        var song=new Audio("./sounds/"+name+".mp3");
        song.play();
    }
}