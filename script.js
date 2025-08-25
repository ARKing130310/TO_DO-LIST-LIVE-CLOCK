 function liveclock()
{
    let time = new Date();

    let hour = time.getHours();
    let Minute = time.getMinutes();
    let period = time.getHours()>=12 ? 'PM' : 'AM';
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();


     if(hour>=12)
         {
             hour=hour-12;

             if(hour===0)hour=12;
         }
       hour=hour< 10? '0' +hour:hour;
       Minute=Minute< 10? '0' +Minute:Minute;   


    const monthName=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    document.querySelector('.hours').textContent=hour + ':';
    document.querySelector('.Minutes').textContent=Minute;
    document.querySelector('.period').textContent=period + '';
    document.querySelector('.days').textContent=dayName[day] + ',';
    document.querySelector('.date').textContent=date + ',';
    document.querySelector('.month').textContent=monthName[month];
    
    let currenthour = time.getHours();
    let Message = "";

    if (currenthour < 12)
    {
        Message = "Good Morning 🌅"
    }
    else if (currenthour < 18)
    {
        Message = "Good Afternoon⛅";
    }
    else {
        Message = "Good Night 🌙";
    }
    document.querySelector('.good-message').textContent=Message;
}
setInterval(liveclock, 1000);
liveclock();