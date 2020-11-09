const dayE1=document.getElementById("days");
const hourE2=document.getElementById("hour");
const minuteE3=document.getElementById("min");
const secondE4=document.getElementById("sec");



const newYears ='1 Jan 2021';


function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate=new Date();

    const totalSeconds=(newYearDate-currentDate)/1000;
    
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds= Math.floor(totalSeconds) % 60;



    dayE1.innerHTML=days;
    hourE2.innerHTML=formatTime(hours);
    minuteE3.innerHTML=formatTime(minutes);
    secondE4.innerHTML=formatTime(seconds);


    if (totalSeconds < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hour").innerHTML = "" 
        document.getElementById("min").innerHTML = ""
        document.getElementById("sec").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }

}


function formatTime(time){
    return time<10? ("0"+ time): time;
   
}
countdown();

setInterval(countdown,1000);