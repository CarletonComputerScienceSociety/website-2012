

function sectionsInit()
{	
	// for(var i = 1; i < 4; i++)
	// {
	// 	$('#img' + i).attr("src", "/sections/" + i + "/" + i + ".jpg");
	// }

	
	$('#div1').width("500px");
	$('#div1').load("/sections/1/1.html");
	$('#div1').height( $('#img1').height() + "px" );

	$('#div2').width( $(window).width() +"px");
	$('#div2').load("/sections/2/2.html");
	$('#div2').height( $('#img2').height() + "px" );
	

	$('#div3').width("500px");
	$('#div3').load("/sections/3/3.html");
	$('#div3').height( $('#img3').height() + "px" );
	

	for(var i = 1; i < 4; i++)
	{
		var space = $('#spacer').height();

		for(var j = 1; j < i; j++)
		{
			space += $('#img' + j).height();
		}
		
		$('#div' + i).css("top", ""+space)
		$('#sideWrapper').append("<p class='console'> Section " + i + "...check </p>");
	}

	

	$('#div1, #div3').css("right", "0px");
	$('#div2').css("left", "0px");

	$('#sideWrapper').append("<p class='console'> All Sections...check </p>");
}


function openSection(num, size, closeOthers)
{
	var left = false;

	if (num % 2 == 0)
	{
		left = true;
	}

	if (left == true)
	{
		$('#img' + num).transition( {x: size} );
		$("#headWrapper, #headerLogo").transition( {x: size} );
		$('#sideWrapper').transition({x: $(window).width() - $('#sideWrapper').width() - $(window).width()*0.05});
	}

	if (left == false)
	{
		$('#img' + num).transition( {x: -size} );
		$("#headWrapper").transition( {x: -size} );
		$('#sideWrapper, #headerLogo').transition( {x : 0} );
	}

	if(closeOthers == true)
		{
			for(var i = 1; i < 4; i++)
			{
				if (i != num)
				{
					closeSection(i);
				}
			}
		}
	
}

function closeSection(num)
{
	$('#img' + num).transition( {x: 0} );
}


function sectionResize()
{
	$('#div1').height( $('#img1').height() + "px" );
	$('#div2').height( $('#img2').height() + "px" );
	$('#div3').height( $('#img3').height() + "px" );

	for(var i = 1; i < 4; i++)
	{
		var space = $('#spacer').height();

		for(var j = 1; j < i; j++)
		{
			space += $('#img' + j).height();
		}
		
		$('#div' + i).css("top", ""+space);
	}

}

function fullSection(num)
{
	var left = false;

	if (num % 2 == 0)
	{
		left = true;
	}

	if (left == true)
	{
		$('#img' + num).transition({x: $(window).width() - 150});
	}

	else if (left == false)
	{
		$('#img' + num).transition({x: -($(window).width() - 150)});
	}
	
}
