    function validate(onClick) { 
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    cc = year.substring(0,2);
    yy = year.substring(2,4);
    
    var genderInput = document.querySelector('input[name="gender"]:checked').value;
    var weekDay = math.floor( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7

    const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","kwame"]

    if (genderInput==male) {
        alert("Your name is " + maleNames[weekDay])
    }
    else (genderInput==female) {
        alert("your name is" +  femaleNames[weekDay])
    }

    }