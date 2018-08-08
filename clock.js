function getTime(){

    var d = new Date(); // for now

    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51



    var days = {

        1: "One",

        2: "Two",

        3: "Three",

        4: "Four",

        5: "Five",

        6: "Six",

        7:"Seven",

        8:"Eight",

        9:"Nine",

        10:"Ten",

        11:"Eleven",

        12:"Twelve",

        13: "One",

        14: "Two",

        15: "Three",

        16: "Four",

        17: "Five",

        18: "Six",

        19:"Seven",

        20:"Eight",

        21:"Nine",

        22:"Ten",

        23:"Eleven",

        00:"Twelve",




    }


    var minutes = {
        0: " ",
        1: "One",

        2: "Two",

        3: "Three",

        4: "Four",

        5: "Five",

        6: "Six",

        7:"Seven",

        8:"Eight",

        9:"Nine",

        10:"Ten",

        11:"Eleven",

        12:"Twelve",

        13:"Thirteen",

        14:"Fourteen",
        15:"Fifteen",
        16:"Sixteen",
        17:"Seventeen",
        18:"Eighteen",
        19:"Nineteen",

        20:"Twenty",

        30:"Thirty",

        40:"Forty",
        50: "Fifty",



    }


if(d.getHours()< 12){

    var timeOfDay = "AM";
} else if(d.getHours() >=12 && d.getHours() <=23){

    var timeOfDay = "PM";
}

if(d.getMinutes() >= 20 && d.getMinutes() < 30){

    var conv = d.getMinutes().toString();

    console.log(conv);



    var mins = minutes[20] + minutes[conv.charAt(1)];
} else if(d.getMinutes() >= 30 && d.getMinutes() < 40){

    var conv = d.getMinutes().toString();

    console.log(conv);



    var mins = minutes[30] + " " +  minutes[conv.charAt(1)];
} else if(d.getMinutes() >= 40 && d.getMinutes() < 50){

    var conv = d.getMinutes().toString();

    console.log(conv);



    var mins = minutes[40] +" " +  minutes[conv.charAt(1)];
} else if(d.getMinutes() >= 50 && d.getMinutes() < 60){

    var conv = d.getMinutes().toString();

    console.log(conv);



    var mins = minutes[50] + " " +  minutes[conv.charAt(1)];
} else if(d.getMinutes() == 0) {

    var mins = " ";

}else if(d.getMinutes()<=20 && d.getMinutes() >=10) {

    var mins = minutes[d.getMinutes()];
}else{






}

    var sentence = "Anita: \"It is " + days[d.getHours()] + " " + mins + " " + timeOfDay + ", Wednesday the eighth of August two thousand and eighteen.\"";
    document.getElementById("lol").innerHTML = sentence;

    setTimeout(function(){
        window.location.reload(1);
    }, 1000);
}


