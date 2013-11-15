
function siteInit()
{
	sectionsInit()
	navInit()
	waypointInit()

	$(window).resize(function()
	{
		sectionResize();
	});
}


function waypointInit()
{
	$('#spacer').waypoint(function(up)
	{ 
		closeSection(1);
		closeSection(2);
		closeSection(3);
		$("#headWrapper, #headerLogo").transition( {x: 0} );
		colorMan(0);
	}, {offset: -5});

	$('#spacer').waypoint(function(up)
	{ 
		closeSection(1);
		closeSection(2);
		closeSection(3);
		$("#headWrapper, #headerLogo").transition( {x: 0} );
		colorMan(0);
	});


	$('#img1').waypoint(function(up)
	{
		openSection(1, 520, true);
		colorMan(1);
		
	}, {offset : 50} );


	$('#img2').waypoint(function(up)
	{
		openSection(2, 520, true);
		colorMan(2);
		
	}, {offset : 100} );

	$('#img3').waypoint(function(up)
	{
		openSection(3, 520, true);
		colorMan(3);
		
	}, {offset : 100} );

	$('#sideWrapper').append("<p class='console'> Waypoint...check </p>");
	
}

function colorMan(num)
{
	if(num == 1)
	{
		$('#link1').css("color", "#99cc00");
		$('#link2').css("color", "#ffffff");
		$('#link3').css("color", "#ffffff");
	}

	else if(num == 2)
	{
		$('#link2').css("color", "#33b5e5");
		$('#link1').css("color", "#ffffff");
		$('#link3').css("color", "#ffffff");
	}

	else if(num == 3)
	{
		$('#link3').css("color", "#ff4444");
		$('#link2').css("color", "#ffffff");
		$('#link1').css("color", "#ffffff");
	} 
	else if(num == 0)
	{
		$('#link1').css("color", "#ffffff");
		$('#link2').css("color", "#ffffff");
		$('#link3').css("color", "#ffffff");
	}
}
