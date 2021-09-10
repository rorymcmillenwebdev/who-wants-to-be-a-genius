let number = 0;

function increment(){
    
    number+=1;
    
    console.log(number);

    let numberDiv = document.getElementById('numberDiv');
    numberDiv.textContent = number


}

function saveName () {


    var userName = document.getElementById('nameEntry').value;

    document.getElementById('yourName').textContent = userName;

    console.log(userName);

  
   
   


    let nameDiv = document.getElementById('yourName');
    nameDiv.style.display = 'block';

}




console.log('Who Wants To Be A Genius?');