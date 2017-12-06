score = 0;
	var time_left = 30;
var timerMusic = new Audio("sounds/timerSoundBackground.wav"); //timer music
var applause = new Audio("sounds/applause.wav"); //applause when score shown
var moleHit = new Audio("sounds/moleHit.wav"); // mole sound when clicked
	$(function() {
		 $("#gamespace").on( "click", "img", function(){
		 $(this).fadeOut("fast");
			incScore();
		});
		$("#start_button").click(function(){
		beginGame();

		timerMusic.loop = true;
		timerMusic.play();
		});
	});
		function beginGame(){
			$("#timer").show();
			updateTimer();
			addMole();

			}

		function randPosX() {
			return Math.floor(Math.random() * 450);
		}

		function randPosY(){
			return Math.floor(Math.random() * 300);
			}
		function incScore(){
			score +=1;
moleHit.play();
			$("#score").html(score + " points");

			}

			function updateTimer() {
			// Decrement seconds

			if (time_left <= 0) {

				timerMusic.pause();
				applause.play();
			clearTimeout(timeout);
			alert("Game Over! Your Score is " + score + " points!");
			reloadPage();
			}

			else{
				// Update the timer HTML
			$("#timer").html(time_left + " seconds left");

			time_left -=1;

			timeout = setTimeout(updateTimer, 1000);


			}

			}

		function randomMole(){
			return Math.floor(Math.random() * 1500);
			}

		function addMole(){

			if (time_left <=0) {
			return;
			}

			else{
			var xPos = randPosX();
			var yPos = randPosY();
			var x=randomMole();
			var imgArray = ["img/mole.jpg","img/mole2.gif","img/mole3.png","img/mole4.jpg","img/mole5.png"];
			var imgNum = Math.floor(Math.random() * (imgArray.length));
			var randomImage = imgArray[imgNum];
			//console.log('<img src="'+ randomImage + '" style="top:'+yPos+'px;left:'+xPos+'px;"/>');
			let tempString = '<img src="'+ randomImage + '" style="top:'+yPos+'px;left:'+xPos+'px;"/>';
			document.getElementById('gamespace').ondragstart = function() { return false; };
			$("#gamespace").append(tempString);
			$("img").hide(Math.random() * 3000);
			var timeout = setTimeout("addMole()", x);
			}

			}
		function reloadPage() {
			location.reload();
			alert("Click Start to Play Again!");
		}
