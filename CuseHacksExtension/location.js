var lat, lon;
if (navigator.geolocation) {
    setWeather();
}

function setWeather()
{
navigator.geolocation.getCurrentPosition(function (position) 
{
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    $.getJSON
    (
        "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=a9a989dd961c88bcd744adf275742f05",function(json)
        {
        console.log(json['main']['temp']);
        var temp = Math.round(9/5 * (json ['main']['temp'] - 273) + 32);
        var des = json['weather'][0]['description'];
        des = des.substring(0, 1).toUpperCase() + des.substring(1, des.length);
        var count = 1;
        while(des.length > count)
        {
            if(des.substring(count, count + 1) === ' ')
                des = des.substring(0, count + 1) + des.substring(count + 1, count + 2).toUpperCase() + des.substring(count + 2, des.length);
            count++;
        }
        document.getElementById('location').innerHTML = (temp + "F, " + des).fontcolor("#FFFFFF").fontsize(6);
        }
    );
setTimeout(setWeather(), 1000);
});
}
