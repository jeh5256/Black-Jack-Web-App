/*Author: Justin Hughes
 *Comp Sci 3410 Final Project
 *Liberaries Used
 http://ocanvas.org/ - canvas
 http://codepen.io/cheeriottis/pen/inluv - buttons
 https://en.wikipedia.org/wiki/Standard_52-card_deck - cards
 */




var canvas = oCanvas.create({
	canvas: "#canvas",
	bg: "http://webbox.cs.du.edu/~jushughe/FinalProject/images/cardtable.png"
});


//varibles
var playerBet = 100;
var playerMoney = 5000;
var cardValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
				  11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
				  11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
				  11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var playerAceCount = 0;
var dealerAceCount = 0;
var playerCards = 0;
var dealerCards = 0;
var hitCount = 0;
var dHitCount = 0;
var fdCard;
var num;
var pFlag = false;
var dFlag = false;

//setup the board
function init() {
	document.getElementById("hit").disabled = true;
	document.getElementById("stand").disabled = true;
	document.getElementById("double").disabled = true;
	
	var cardDeck = canvas.display.sprite({
		x: 144,
		y: 137,
		image: "/~jushughe/FinalProject/images/back.png",
		generate: true,
		width: 160,
		height: 200,
		origin: {x: 121, y: -47}
		});
	canvas.addChild(cardDeck);
}

//functions

function deal() {
     playerBet = (document.getElementById("bet").value);
	console.log(playerBet);
	
	if (!isNaN(Number(playerBet)) && playerBet != "" && playerBet <= playerMoney) {
        console.log("good");
		playerBet = Number(playerBet);
		document.getElementById("errorText").innerHTML = '';
		
		document.getElementById("hit").disabled = false;
		document.getElementById("stand").disabled = false;
        document.getElementById("double").disabled = false;
		document.getElementById("deal").disabled = true;
		
		num = Math.floor(Math.random() * (52))
		card = imageArray[num];
		playerCards += cardValues[num]
		
		var check = cardValues[num];
		
		if (check == 11) {
            playerAceCount = 1;
        }

		var playerCard1 = canvas.display.sprite({
		x: 144,
		y: 137,
		image: card,
		generate: true,
		width: 160,
		height: 200,
		origin: {x: 121, y: -47}
		});
		
		num = Math.floor(Math.random() * (52))
		card = imageArray[num];
		playerCards += cardValues[num]
		check = cardValues[num];
		
		if (check == 11){
			if (playerAceCount > 0) {
                playerAceCount = 2;
				playerCards -= 10;
            }
			else{
				playerAceCount = 1;
			}
        }
		
		var playerCard2 = canvas.display.sprite({
		x: 144,
		y: 137,
		image: card,
		generate: true,
		width: 160,
		height: 200,
		origin: {x: 121, y: -47}
		});
		
		num = Math.floor(Math.random() * (52));
		card = imageArray[num];
		dealerCards += cardValues[num];
		document.getElementById("playerCards").innerHTML = "Player Cards: " + playerCards;
		check = cardValues[num];
		
		if (check == 11) {
            dealerAceCount = 1;
        }
		
		var dealerCard1 = canvas.display.sprite({
		x: 144,
		y: 137,
		image: card,
		generate: true,
		width: 160,
		height: 200,
		origin: {x: 121, y: -47},
		
		});
		
		num = Math.floor(Math.random() * (52))
		fdCard = imageArray[num];
		dealerCards += cardValues[num];
		check = cardValues[num];
		
		if (check == 11){
			if (dealerAceCount > 0) {
                dealerAceCount = 2;
				dealerCards -= 10;
            }
			else{
				dealerAceCount = 1;
			}
        }
		
		var dealerCard2 = canvas.display.sprite({
		x: 144,
		y: 137,
		image: "/~jushughe/FinalProject/images/back.png",
		generate: true,
		width: 160,
		height: 200,
		origin: {x: 121, y: -47}
		});
		
		//This just makes sure there are no face up cards when cards are being dealt
		var cardDeck = canvas.display.sprite({
		x: 144,
		y: 137,
		image: "/~jushughe/FinalProject/images/back.png",
		generate: true,
		width: 160,
		height: 200,
		//origin: {x: 135, y: -60}
		origin: {x: 121, y: -47}
		});
	
		canvas.addChild(playerCard1);
		canvas.addChild(playerCard2);
		canvas.addChild(dealerCard1);
		canvas.addChild(dealerCard2);
		canvas.addChild(cardDeck);
		
		playerCard1.animate({
			x: playerCard1.currentPosition === "left" ? 121 : 320,
			y: playerCard1.currentPosition === "top" ? -60 : 292
			}, {
		easing: "ease-in-out-cubic",
		
		});
		
	
		playerCard2.delay(1000);
		dealerCard1.delay(3000);
		dealerCard2.delay(2000);
		
		playerCard2.animate({
			x: playerCard2.animate.currentPosition === "left" ? 121 : 498,
			y: playerCard2.animate.currentPosition === "top" ? -60 : 292
			}, {
			easing: "ease-in-out-cubic",
	
		});
		dealerCard1.animate({
			x: dealerCard1.currentPosition === "left" ? 121 : 320,
			y: dealerCard1.currentPosition === "top" ? -60 : -36
			}, {
		easing: "ease-in-out-cubic",
		
		});
				
		dealerCard2.animate({
			x: dealerCard2.currentPosition === "left" ? 121 : 498,
			y: dealerCard2.currentPosition === "top" ? -60 : -36
			}, {
			easing: "ease-in-out-cubic",
	
		});
		
		setTimeout(function(){
			
		document.getElementById("playerCards").innerHTML = "Player Cards: " + playerCards;
		//document.getElementById("dealerCards").innerHTML = dealerCards;
		
		//check if dealer has black jack
		if (dealerCards == 21) {
			var dealerCard2 = canvas.display.sprite({
			x: 144,
			y: 137,
			image: fdCard,
			generate: true,
			width: 160,
			height: 200,
			origin: {x: -234, y: 125}
			});
		
		canvas.addChild(dealerCard2);
		dealerCard2.fadeIn("long", "ease-in-out-cubic");
            var buttonText = canvas.display.text({
			x: 650,
			y: 275,
			origin: { x: "center", y: "center" },
			align: "center",
			font: "bold 40px sans-serif",
			text: "Dealer has Black Jack!",
			fill: "#fff"
		});
			
			canvas.addChild(buttonText);
			buttonText.animate({
			y: buttonText.currentPosition === "top" ? 400 : 275
			}, {
				easing: "ease-in-out-cubic"
				});
			buttonText.delay(5000);
			
			document.getElementById("hit").disabled = true;
			document.getElementById("stand").disabled = true;
			document.getElementById("double").disabled = true;
			document.getElementById("deal").disabled = false;
			
			playerMoney -= playerBet;
			document.getElementById("playerMoney").innerHTML = playerMoney;
			setTimeout(resetGame, 4000);
        }
		
		else if (playerCards == 21){
            
			var buttonText = canvas.display.text({
			x: 650,
			y: 0,
			origin: { x: "center", y: "center" },
			align: "center",
			font: "bold 40px sans-serif",
			text: "Player has Black Jack!",
			fill: "#fff"
		});
			
			canvas.addChild(buttonText);
			buttonText.animate({
			y: buttonText.currentPosition === "top" ? 400 : 275
			}, {
				easing: "ease-in-out-cubic"
				});
			buttonText.delay(5000);
			document.getElementById("hit").disabled = true;
			document.getElementById("stand").disabled = true;
			document.getElementById("double").disabled = true;
			document.getElementById("deal").disabled = false;
			
			playerMoney += 1.5 * playerBet;
			document.getElementById("playerMoney").innerHTML = "Player Money: " + playerMoney;
			setTimeout(resetGame, 4000);
        }
		
		
	},4500);
	}
	
	else if (playerMoney == 0) {
        setTimeout(function(){window.location.reload();}, 4000);
		document.getElementById("errorText").innerHTML = "You've run out of money. Restarting game.";
    }
	else{
		document.getElementById("errorText").style.color = "#ff0000";
		document.getElementById("errorText").style.textShadow = "1px 1px 1px #999";
		document.getElementById("errorText").innerHTML = "Please Enter A Valid Bet"
	}
}

function hit() {

	num = Math.floor(Math.random() * (52))
	card = imageArray[num];
	playerCards += cardValues[num];
	
	aceCounter();
	document.getElementById("playerCards").innerHTML = "Player Cards: " + playerCards;

	switch (hitCount) {
        case 0:
			
			var playerCard3 = canvas.display.sprite({
			x: 144,
			y: 137,
			image: card,
			generate: true,
			width: 160,
			height: 200,
			origin: {x: 121, y: -47}
			});
	
			canvas.addChild(playerCard3);
		
			playerCard3.animate({
				x: playerCard3.currentPosition === "left" ? 121 : 675,
				y: playerCard3.currentPosition === "top" ? -60 : 292
				}, {
			easing: "ease-in-out-cubic",
			
			});
			hitCount += 1;
			checkPlayerCardCount();
			break;
		
			case 1:

				var playerCard4 = canvas.display.sprite({
				x: 144,
				y: 137,
				image: card,
				generate: true,
				width: 160,
				height: 200,
				origin: {x: 121, y: -47}
				});
		
				canvas.addChild(playerCard4);
			
				playerCard4.animate({
					x: playerCard4.currentPosition === "left" ? 121 : 855,
					y: playerCard4.currentPosition === "top" ? -60 : 292
					}, {
				easing: "ease-in-out-cubic",
				
				});
				hitCount += 1;
				checkPlayerCardCount();
				break;
			
			case 2:
				
				var playerCard5 = canvas.display.sprite({
				x: 144,
				y: 137,
				image: card,
				generate: true,
				width: 160,
				height: 200,
				//origin: {x: 135, y: -60}
				origin: {x: 121, y: -47}
				});
		
				canvas.addChild(playerCard5);
			
				playerCard5.animate({
					x: playerCard5.currentPosition === "left" ? 121 : 1027,
					y: playerCard5.currentPosition === "top" ? -60 : 292
					}, {
				easing: "ease-in-out-cubic",
				
				});
				
				canvas.addChild(playerCard5);
		
				hitCount += 1;
				checkPlayerCardCount();
				break;
    }
    
}

function doubleDown() {
    playerBet *= 2;
	
	num = Math.floor(Math.random() * (52))
	card = imageArray[num];
	playerCards += cardValues[num];
	document.getElementById("playerCards").innerHTML = "Player Cards: " + playerCards;
	
	document.getElementById("hit").disabled = true;
	document.getElementById("stand").disabled = true;
	document.getElementById("double").disabled = true;

		
	var playerCard3 = canvas.display.sprite({
			x: 144,
			y: 137,
			image: card,
			generate: true,
			width: 160,
			height: 200,
			origin: {x: 121, y: -47}
			});
	
			canvas.addChild(playerCard3);
		
			playerCard3.animate({
				x: playerCard3.currentPosition === "left" ? 121 : 675,
				y: playerCard3.currentPosition === "top" ? -60 : 292
				}, {
			easing: "ease-in-out-cubic",
			
			});
			checkPlayerCardCount();
			dealerDeal();
			
}

function dealerDeal() {
    
	
		var dealerCard2 = canvas.display.sprite({
		x: 144,
		y: 137,
		image: fdCard,
		generate: true,
		width: 160,
		height: 200,
		origin: {x: -234, y: 125}
	});
		
		canvas.addChild(dealerCard2);
		dealerCard2.fadeIn("long", "ease-in-out-cubic");
		
	while (dealerCards <= 17) {
        console.log(dHitCount);
		
		num = Math.floor(Math.random() * (52))
		card = imageArray[num];
		dealerCards += cardValues[num];
		dAceCounter();
		document.getElementById("dealerCards").innerHTML = "Dealer Cards: " + dealerCards;
		
		switch (dHitCount) {
            case 0:
			
			var dealerCard3 = canvas.display.sprite({
			x: 144,
			y: 137,
			image: card,
			generate: true,
			width: 160,
			height: 200,
			origin: {x: 121, y: -47}
			});
	
			canvas.addChild(dealerCard3);
		
			dealerCard3.animate({
				x: dealerCard3.currentPosition === "left" ? 121 : 675,
				y: dealerCard3.currentPosition === "top" ? -60 : -36
				}, {
			easing: "ease-in-out-cubic",
			
			});
			dHitCount += 1;
		
			break;
		
			case 1:

				var dealerCard4 = canvas.display.sprite({
				x: 144,
				y: 137,
				image: card,
				generate: true,
				width: 160,
				height: 200,
				origin: {x: 121, y: -47}
				});
		
				canvas.addChild(dealerCard4);
			
				dealerCard4.animate({
					x: dealerCard4.currentPosition === "left" ? 121 : 855,
					y: dealerCard4.currentPosition === "top" ? -60 : -36
					}, {
				easing: "ease-in-out-cubic",
				
				});
				dealerCard4.delay(2000);
				dHitCount += 1;
				
				break;
			
			case 2:
				
				var dealerCard5 = canvas.display.sprite({
				x: 144,
				y: 137,
				image: card,
				generate: true,
				width: 160,
				height: 200,
				origin: {x: 121, y: -47}
				});
		
				canvas.addChild(dealerCard5);
			
				dealerCard5.animate({
					x: dealerCard5.currentPosition === "left" ? 121 : 1027,
					y: dealerCard5.currentPosition === "top" ? -60 : -36
					}, {
				easing: "ease-in-out-cubic",
				
				});
				dHitCount += 1;
				break;
    }
        }
    checkDealerCardCount();
}

function checkPlayerCardCount() {
	
		if (playerCards > 21) {
            var buttonText = canvas.display.text({
			x: 650,
			y: 0,
			origin: { x: "center", y: "center" },
			align: "center",
			font: "bold 40px sans-serif",
			text: "Bust!",
			fill: "#fff"
		});
			
			canvas.addChild(buttonText);
			buttonText.animate({
			y: buttonText.currentPosition === "top" ? 400 : 275
			}, {
				easing: "ease-in-out-cubic"
				});
			
			playerMoney -= playerBet;
			console.log(playerBet);
			document.getElementById("playerMoney").innerHTML = "Player Money: " + playerMoney;
			
			setTimeout(resetGame, 4000);
        }
	
}

function stand() {
    var dealerCard2 = canvas.display.sprite({
		x: 144,
		y: 137,
		image: fdCard,
		generate: true,
		width: 160,
		height: 200,
		origin: {x: -234, y: 125}
	});
		
		canvas.addChild(dealerCard2);
		dealerCard2.fadeIn("long", "ease-in-out-cubic");
		document.getElementById("dealerCards").innerHTML = "Dealer Cards: " + dealerCards;
		
	dealerDeal();
}
function resetGame(playerCard1) {
		document.getElementById("hit").disabled = true;
		document.getElementById("stand").disabled = true;
		document.getElementById("double").disabled = true;
		document.getElementById("deal").disabled = false;
		document.getElementById("playerCards").innerHTML = "Player Cards: ";
		document.getElementById("dealerCards").innerHTML = "Dealer Cards: ";
		playerCards = 0;
		dealerCards = 0;
		hitCount = 0;
		playerAceCount = 0;
		dealerAceCount = 0;
		dHitCount = 0;
		pFlag = false;
		dFlag = false;
		
		try {
          canvas.destroy();
        } catch(e) {
            alert(e);
        }	
}

function checkDealerCardCount() {
	console.log(playerCards);
		console.log(dealerCards);
	
		if (dealerCards > 21 && playerCards > 21) {
            var buttonText = canvas.display.text({
			x: 650,
			y: 0,
			origin: { x: "center", y: "center" },
			align: "center",
			font: "bold 40px sans-serif",
			text: "Dealer Bust!",
			fill: "#fff"
		});
			
			canvas.addChild(buttonText);
			buttonText.animate({
			y: buttonText.currentPosition === "top" ? 400 : 275
			}, {
				easing: "ease-in-out-cubic"
				});
			setTimeout(resetGame, 4000);
			
			playerMoney += playerBet;
			document.getElementById("playerMoney").innerHTML = "Player Money: " + playerMoney;
        }
			
			else if (playerCards > dealerCards && dealerCards < 21) {
                var winText = canvas.display.text({
					x: 650,
					y: 0,
					origin: { x: "center", y: "center" },
					align: "center",
					font: "bold 40px sans-serif",
					text: "Player Wins!",
					fill: "#fff"
				});
			
				canvas.addChild(winText);
				winText.animate({
				y: winText.currentPosition === "top" ? 400 : 275
				}, {
					easing: "ease-in-out-cubic"
					});
				
				setTimeout(resetGame, 4000);
				
				playerMoney += playerBet;
				document.getElementById("playerMoney").innerHTML = "Player Money: " + playerMoney;
            }
			
			else if (playerCards == dealerCards) {
                var buttonText = canvas.display.text({
					x: 650,
					y: 0,
					origin: { x: "center", y: "center" },
					align: "center",
					font: "bold 40px sans-serif",
					text: "Draw!",
					fill: "#fff"
				});
			
				canvas.addChild(buttonText);
				buttonText.animate({
				y: buttonText.currentPosition === "top" ? 400 : 275
				}, {
					easing: "ease-in-out-cubic"
					});
				setTimeout(resetGame, 4000);
            }
			
			else if(playerCards < dealerCards && playerCards < 21){
				var buttonText = canvas.display.text({
					x: 650,
					y: 0, //275
					origin: { x: "center", y: "center" },
					align: "center",
					font: "bold 40px sans-serif",
					text: "Dealer Wins!",
					fill: "#fff"
				});
			
				canvas.addChild(buttonText);
				buttonText.animate({
				y: buttonText.currentPosition === "top" ? 400 : 275
				}, {
					easing: "ease-in-out-cubic"
					});
				console.log(playerBet);
				playerMoney -= playerBet;
				document.getElementById("playerMoney").innerHTML = "Player Money: " + playerMoney;
				
				setTimeout(resetGame, 6000);
			}
			
}

function aceCounter() {
	
	var check =  cardValues[num];
	console.log(check)
    if (playerCards > 21 && playerAceCount > 0) {
        if (check == 11) {
            playerCards -= 10
        }
		
		else if (playerAceCount == 1) {
            if (pFlag == false) {
                playerCards -= 10;
				pFlag = true;
            }
        }
    }
	
	else if (check == 11 && playerCards > 21 && playerAceCount == 0) {
		console.log("-10")
         playerCards -= 10
    }
}

function dAceCounter() {

	var check =  cardValues[num];
    if (dealerCards > 21 && dealerAceCount > 0) {
        if (check == 11) {
            dealerCards -= 10
        }
		
		else if (dealerAceCount == 1) {
            if (dFlag == false) {
                dealerCards -= 10;
				dFlag = true;
            }
        }
    }
	
	else if (check == 11 && dealerCards > 21 && dealerAceCount == 0) {
         dealerCards -= 10
    }
}