
function siteInit()
{
	sectionsInit();

	navInit();

	if($(window).width() > 1024)
	{
		waypointInit();
	}
	
}


function waypointInit()
{

	$('#div1').waypoint(function(down)
	{
		peekSection(1);
		colorMan(1);
		
	}, {offset : -10} );

	$('#div1').waypoint(function(down)
	{
		colorMan(1);
		
	}, {offset : 60} );


	$('#div2').waypoint(function(down)
	{
		peekSection(2);

		closeSection(1);

		colorMan(2);
		
	}, {offset : 200} );


	$('#div3').waypoint(function(down)
	{
		peekSection(3);

		closeSection(2);

		colorMan(3);
		
	}, {offset : 200} );


}


function colorMan(num)
{
	if(num == 1)
	{
		$('#title1').css("color", "#ff4444");
		$('#title2').css("color", "#ffffff");
		$('#title3').css("color", "#ffffff");
	}

	else if(num == 2)
	{
		$('#title2').css("color", "#33b5e5");
		$('#title1').css("color", "#ffffff");
		$('#title3').css("color", "#ffffff");
	}

	else if(num == 3)
	{
		$('#title3').css("color", "#649302");
		$('#title2').css("color", "#ffffff");
		$('#title1').css("color", "#ffffff");
	} 
	else if(num == 0)
	{
		$('#title1').css("color", "#ffffff");
		$('#title2').css("color", "#ffffff");
		$('#title3').css("color", "#ffffff");
	}
}
