function lifetimeSupplyCalc(age, maxage, foodpreday) {
    var food = '';
    if(foodpreday== 0.5){
        food ='chocolate';
    } else if (foodpreday==2) {
        food ='fruits';
    } else{
        food = 'nuts';
    }
    var eatfood = ((maxage) - parseInt(age)) * 365 * parseFloat(foodpreday) + 'kg ' + food + ' would be enough until I am ' + maxage + ' years old.';
    console.log(eatfood);
}

lifetimeSupplyCalc(38, 118, 0.5);
lifetimeSupplyCalc(20, 87, 2);
lifetimeSupplyCalc(16, 102, 1.1);