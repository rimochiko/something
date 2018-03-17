//定义标签对象
var tips=[];
var tip=function(contentText,direction,sectionId){
	this.contentText=contentText;
	this.direction=direction;
	this.sectionId=sectionId;
};

var one=new tip("死神片曲","top","tt-life");
tips.push(one);
var two=new tip("2006年小泉德宏执导的爱情电影","top","tt-taiyang");
tips.push(two);
var three=new tip("日本知名公司","top","tt-sony");
tips.push(three);
var four=new tip("Yui的处女作","top","tt-whyme");
tips.push(four);


//创建标签	 
function createTip(tip)
{
	var Div=document.createElement("div");

	Div.className="mck-tooltip "+tip.direction;
	Div.innerHTML="<p>"+tip.contentText+"</p>";

	setPosition(Div,tip);
}

//设置标签位置
function setPosition(Div,tip)
{
	var aimSpan=document.getElementById(tip.sectionId);

	if(tip.direction=="top")
	{
		Div.style.top=aimSpan.offsetTop-50+'px';

    	document.getElementsByTagName("body")[0].appendChild(Div);

    	
    	var divWidth = Div.offsetWidth;
    	var defaultLeft = (aimSpan.offsetLeft+(aimSpan.offsetWidth)/2)-(Div.offsetWidth)/2;

    	if( divWidth+defaultLeft >= document.documentElement.clientWidth)
    	{
    		defaultLeft = aimSpan.offsetLeft -(Div.offsetWidth)/2 +20;
    	}

    	Div.style.left = defaultLeft +'px';
	}
}


//检查是否有该Id模块的标签
function checkTip(id)
{
	for(var i=0;i<tips.length;i++)
	{
		
		if(tips[i].sectionId==id)
		{
			return tips[i];
		}
	}
}