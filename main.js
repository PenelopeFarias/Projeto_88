
var canvas = new fabric.Canvas("myCanvas"); 

bolaY= 0;
bolaX= 0;
buracoY= 400;
buracoX= 800;

velX = 10;
velY = 10;

function loadImg()
{
	fabric.Image.fromURL("golf.png", function(Img)
	{
		buraco = Img;
		buraco.scaleToWidth(50);
		buraco.scaleToHeight(50);
		buraco.set
		({
			top:buracoY,
			left:buracoX
		});
        canvas.add(buraco); 

	});
	       newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img){
		bola = Img;
		bola.scaleToWidth(50);
		bola.scaleToHeight(50);
		bola.set 
		({
			top:bolaY,
			left:bolaX
		});
		canvas.add(bola);
	})
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if ((bolaX==buracoX)&&(bolaY==buracoY))
	{
		canvas.remove(bola);
		console.log("Você atingiu o objetivo!!!");
		document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}

	else
	{
		if(keyPressed == '87')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '83')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '65')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '68')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bolaY >=5)
		{
		bolaY = bolaY - velY;
		console.log("Altura da imagem do bloco t = " + velY);
		console.log("Quando a tecla direcional cima é pressionada, X = " + bolaX + " , Y = " + bolaY);
		canvas.remove(bola);
		newImage();
		}
	}

	function down()
	{
		 if(bolaY <=450)
		 {
		 bolaY = bolaY + velY;
		 console.log("Altura da imagem do bloco t = " + velY);
		 console.log("Quando a tecla direcional baixo é pressionada, X = " + bolaX + " , Y = " + bolaY);
		 canvas.remove(bola);
		 newImage();
		 }
	}

	function left()
	{
		if(bolaX >5)
		{
		bolaX = bolaX - velX;
		 console.log("Altura da imagem do bloco t = " + velX);
		 console.log("Quando a tecla direcional esquerda é pressionada, X = " + bolaX + " , Y = " + bolaY);
		 canvas.remove(bola);
		 newImage();
		}
	}

	function right()
	{
		if(bolaX <=1050)
		{
		bolaX = bolaX + velX;
		 console.log("Altura da imagem do bloco t = " + velX);
		 console.log("Quando a tecla direcional direita é pressionada, X = " + bolaX + " , Y = " + bolaY);
		 canvas.remove(bola);
		 newImage();
		}
	}
	
}

