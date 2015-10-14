var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit){
        console.log("Good job, you hit the dragon and did " + damageThisRound +" damage!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("You slew the dragon!")
            slaying = false
        }else{
            youHit = Math.floor(Math.random()*2);
        }
    }else{
        console.log("Dun dun dun! You have been defeated by the dragon.")
        slaying = false;
    }
}