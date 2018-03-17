var canvas = document.getElementById('box');
var ctx = canvas.getContext('2d');
var key =[];

createBackground(ctx);
canvas.addEventListener('touchstart',function(event){
	var p = getTouchPos(event);
	drawCircle(ctx,p);
});

canvas.addEventListener('touchmove',function(event){
	var p = getLastPos(event);
	clearCtx(ctx);
	if(turePos(p)&&key.length>1)
	{
		drawLine(ctx,key[key.length-2],key[key.length-1]);
	}
	else
	{
		drawLine(ctx,key[key.length-1],p);	
	}
	drawCircle(ctx,p);
});

canvas.addEventListener('touchend',function(event){
	console.log(key);

});

//画背景
function createBackground(ctx)
{
	var x=0;
	var y=0;
	for(var i=0;i<9;i++)
	{
		x=i%3;
		y=parseInt(i/3);
		ctx.beginPath();
		ctx.lineWidth=4;
		ctx.strokeStyle ="#6CF";
		ctx.arc((x*4)*50+100,(y*4)*50+100,50,0,2*Math.PI);
		ctx.stroke();
	}
}


function getTouchPos(e)
{
	var p = 
	{
		x:e.touches[0].clientX,
		y:e.touches[0].clientY
	};
	return p;
}

function getLastPos(e)
{
	var p = 
	{
		x:e.touches[e.touches.length-1].clientX,
		y:e.touches[e.touches.length-1].clientY
	};
	return p;
}

function turePos(p)
{
	var x=0;
	var y=0;
	var flag=0;
	for(var i=0;i<9;i++)
	{
		x=i%3;
		y=parseInt(i/3);

		if(x*200+50< p.x && p.x< x*200+150 && y*200+50< p.y && p.y < y*200+150)
		{
			if(key.length==0||key[key.length-1].x!=x*200+100 || key[key.length-1].y!=y*200+100)
			{
				var p = 
				{
					x:x*200+100,
					y:y*200+100
				};
				key.push(p);
			
				flag=1;
				return flag;
			}
		}
	}
}

function drawCircle(ctx,p)
{
	var x=0;
	var y=0;
	for(var i=0;i<9;i++)
	{
		x=i%3;
		y=parseInt(i/3);

		if(x*200+50< p.x && p.x< x*200+150 && y*200+50< p.y && p.y < y*200+150)
		{
			  ctx.beginPath();
			  ctx.fillStyle = "#6CF";
			  ctx.arc((x*4)*50+100,(y*4)*50+100,25,0,2*Math.PI,true);			ctx.fill();
			  ctx.stroke();	
			  console.log(p.x,p.y);
	
		      break;
		 }
	}
}


function drawLine(ctx,p1,p2)
{
	ctx.beginPath();
	ctx.lineWidth=4;
	ctx.strokeStyle = "#6CF";
  	ctx.moveTo(p1.x, p1.y);
  	ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.closePath();	
}


function clearCtx(ctx)
{
	ctx.clearRect(0,0,600,600);
	createBackground(ctx);
	for(var i=0;i<key.length;i++)
	{
		drawCircle(ctx,key[i]);
		if(i>=1)
		{
			drawLine(ctx,key[i-1],key[i]);
		}
	}
	
}