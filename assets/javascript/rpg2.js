// make document ready

var charSelected = false;

$(document).ready(function() {

    // Click pic & move places
    // console.log(charSelected);
    $(".char").on("click", function() {
        // choose your character
        if(!charSelected) {
            console.log(this.className + " selected character class name");
            var selectYourChar = $("<div>");
            selectYourChar.addClass("yourCharChoice");
            selectYourChar.html($(this));
            $(".selectedChar").append(selectYourChar);
            
            // $(".CharAvailable").contents().each( function () {
            //     $(".enemyChar").append($(this));
            //     $(this).addClass("enemies");
            //     $(this).removeClass("char");
            //     console.log(this.className);
            // })
        }
        var theRest = $(".CharAvailable").children();
        $(".enemyChar").append(theRest);
        $(".enemyChar").children().each( function() {
            console.log(this.className + " enemy name");
            $(this).removeClass("char");
            $(this).addClass("enemies");
            console.log(this.className + " I have changed");
    })

        charSelected = true;
        console.log(charSelected);
    })

    $(".enemies").on("click", function() {
        console.log(this.className);
        console.log("hey");
        // choose your defender
        if(charSelected) {
            console.log("yooo");
            var selectYourDefender = $("<div>");
            selectYourDefender.addClass("yourDefChoice");
            selectYourDefender.html($(this));
            $(".defenderChar").append(selectYourDefender);
        }
    })

});


// if(choose1) {
//     var defender = $("<div>");
//     defender.addClass("char");
//     defender.html($(this));
//     $(".defenderChar").append(defender);
//     console.log("changed to true");
// }


// create a function when I select 1 block, the rest go to the enemy
// when one is chose, make a condition so that the others cannot be chosen again

// attribute each character attacking power
