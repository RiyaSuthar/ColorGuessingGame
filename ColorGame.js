var numSq = 6;

var colors = generateRandomColors(numSq);



var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");

var msgDisplay = document.getElementById("msg");

var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function() {
	// body...
	//alert("Easy button clicked");
	numSq = 3;
	hard.classList.remove("selected");
	easy.classList.add("selected");
	colors = generateRandomColors(numSq);
	pickedColor = pickColor() ;
	colorDisplay.textContent = pickedColor;
	for ( var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
})

hard.addEventListener("click", function() {
	// body...
	//alert("Hard button clicked");
	numSq = 6;
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors = generateRandomColors(numSq);
	pickedColor = pickColor() ;
	colorDisplay.textContent = pickedColor;
	for ( var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}
})

resetButton.addEventListener("click", function()
{
	//alert("Button clicked");
	colors = generateRandomColors(numSq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor ;
	for(var i =0 ; i < squares.length ; i++)
	{
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	msgDisplay.textContent = "";
	this.textContent = "New Colors";
}
)

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		//alert("Clicked a square");
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor)
		{
			//alert("Correct!");
			msgDisplay.textContent = "Correct";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			//alert("Wrong!!!");
			this.style.background = "black";
			msgDisplay.textContent = "Try Again";

		}
	});

}

function changeColor(color)
{
	for(var i =0 ; i < squares.length ; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = []
	for(var i = 0; i < num ; i++)
	{
		arr.push(randomColor())
	}
	return arr;

}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}