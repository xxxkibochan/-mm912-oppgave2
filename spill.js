<!DOCTYPE html>
<!-- saved from url=(0051)file:///C:/Users/94ann/Downloads/index%20guess.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oppgave</title>
     <style>
        #guess-button {
            background-color: #4CAF50; 
            color: white; 
            padding: 20px 20px; 
            font-size: 16px; 
            border: none; 
            cursor: pointer; 
        }

        #guess-button:hover {
            background-color: #45a049;
        }

     #user-input {
         paddin: 20px 20px;
         font-size: 16px; 
     }
         #game-message {
              color: blue;
             margin-top: 10px;
              }
    
    </style>
    
</head>

<body><style>/* (A) SHARED CLASS */
.box {
  margin: 10px;
  padding: 10px;
  font-size: 18px;
}
    /* (B2) WARNING BOX */
.warn {
  color: darkmagenta;
  background: lightpink;
  border: 1px solid darkred;
}
    
</style>

    
<div class="box warn">
  ⚠ Sorry - Rant incoming
</div>
 
<p style="padding: 10px; border: 2px solid blueviolet;">I accidently pressed F5 after 3 hours.. and now it's been 6 hours almost. 
THE GOOD NEWS IS - I had a lot of fun learning about HTLM and CSS🐱‍🐉 
BAD NEWS IS - My brain spent 6 hours on that, procrastinating the fact that I actually had to write the js code and somehow magically poof - Works with the input box and button! I have a feeling it's not that hard, but you know.. It was a little motivating, and I didn't have a sigarette even this whole time..

  <img src="./skoleoppgave_files/992116782dbdeb46a3eed47fa46ac1c8.gif">
</p>
<div style="
            background: #8383ff8c;
            font-size: 20px;
            padding: 17px;
            border: 93cm deeppink;
            margin: 26px;
            ">
  ~ Guess a number between 1 and 100 ~
</div>
    
    <input type="number" id="user-input" min="1" max="100">
     <p <button="" id="guess-button">Guess</p>


    <script>//ChatGPT and teachers original code after giving up.

        const MAX_NUMBER = 100;
        const MIN_NUMBER = 1;
        const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

        const gameMessage = document.getElementById('game-message');
        const userInput = document.getElementById('user-input');
        const guessButton = document.getElementById('guess-button');

        let isPlaying = true;

        function displayMessage(message) {
            gameMessage.textContent = message;
        }

        function checkGuess() {
            const answer = parseInt(userInput.value);

            if (isNaN(answer) || answer < MIN_NUMBER || answer > MAX_NUMBER) {
                displayMessage('Please enter a valid number between 1 and 100.');
            } else if (answer === randomNumber) {
                displayMessage('You guessed it!');
                isPlaying = false;
            } else if (answer < randomNumber) {
                displayMessage('Too low');
            } else {
                displayMessage('Too high');
            }
        }

        guessButton.addEventListener('click', checkGuess);

        // You can also add an event listener for the Enter key to submit the guess.
        userInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                checkGuess();
            }
        });
    </script>













</body></html>