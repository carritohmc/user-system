


function fizzBuzz(n){
    for (let i=0; i<n; i++){
        let answer="";
        if(i%3==0) {
            answer="fizz";
        } else if(i%5==0){
            answer="Buzz";
        } else if((i%5==0) && (i%3==0)){
            answer="Fizzbuzz";
        } else {
            console.log('number:'+ i);
            //alert(answer);
        }

           
        
    }


}

fizzBuzz(55);