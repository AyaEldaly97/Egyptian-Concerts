// * side bar
$(".openIcon").on("click", function(){
    $(".open").css("left" , "0")
})

$(".close").on("click", function(){
    $(".open").css("left" , "-240px")
})

// * Singers section

$(".singer-name").on("click", function(){
    $(this).next().slideToggle()

    $(".singers p").not($(this).next()).slideUp() 
    //! not() to select all paragraphs except the one next to the clicked h3
})



// * Countdown

window.onload = function() {
    countDownToTime("1 january 2026 9:56:00");
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {
        countDownToTime(countTo);
    }, 1000);
    }



// * Text area

var maxLength = 100;
$("textarea").on("keyup",(function(){
    let textLength = $(this).val().length;
    let textRemaining = maxLength - textLength; 
    if (textRemaining <= 0){
        $("#textNum").text("You've reached the maximum amount of characters available.")
        $("#remainMsg").text("")
    } else{
        $("#textNum").text(
            textRemaining 
        )
    }

}))
