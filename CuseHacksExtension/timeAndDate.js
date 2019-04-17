function updateClock() 
{
var now = new Date();
var time;
if(now.getMinutes() < 10)
    time = ':0' + now.getMinutes();
else
    time = ':' + now.getMinutes();

if(now.getHours() === 0)
    time = '12' + time + ' AM';
else
{
if(now.getHours() === 12)
    time = '12' + time + ' PM';
else
    {
    if(now.getHours() < 12)
        time = now.getHours() + time + ' AM';
    else
        time = (now.getHours() - 12) + time + ' PM';
    }
}
var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()].join('/');
document.getElementById('time').innerHTML = time.fontcolor("#FFFFFF").fontsize(7);
document.getElementById('date').innerHTML = date.fontcolor("#FFFFFF").fontsize(5);
setTimeout(updateClock, 1000);
}
updateClock();