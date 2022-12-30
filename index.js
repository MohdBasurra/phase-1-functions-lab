function distanceFromHqInBlocks(number){
number =number-42;
    return Math.abs(number);

}

function distanceFromHqInFeet(num){
    let numOfFeet= distanceFromHqInBlocks(num);
    let final= numOfFeet *264;
    return final;
    
}

function distanceTravelledInFeet(num1, num2){

   let finall= num2-num1;
   finall=Math.abs(finall);
   finall=finall*264;
   return finall;
}
function calculatesFarePrice(start,desti) {
	const distance = distanceTravelledInFeet(start,desti)
	if (distance < 400) {
		return 0;
	}
	else if (distance >= 400 && distance <= 2000) {
		return (distance - 400) * .02;
	}
	else if (distance > 2000 && distance < 2500) {
		return 25;
	}
	else {
		return 'cannot travel that far';
	}
}
