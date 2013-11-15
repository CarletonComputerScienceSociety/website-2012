

function navInit()
{
	$('#link1').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $("#img1").offset().top
    	}, 1000);
		
		setTimeout(function()
		{
			openSection(1, 520, true);
			colorMan(1);
		}, 1001);
    	

	});


	$('#link2').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $("#img2").offset().top
    	}, 1000);

    	setTimeout(function()
		{
			openSection(2, 520, true);
			colorMan(2);
		}, 1001);
	});

	$('#link2Sub1').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $("#img2").offset().top
    	}, 1000);

		setTimeout(function()
		{
			openSection(2, 520, true);
			fullSection(2);
			colorMan(2);
		}, 1001);
    	
	});


	$('#link3').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $("#img3").offset().top
    	}, 1000);

    	setTimeout(function()
		{
			openSection(3, 520, true);
			colorMan(3);
		}, 1001);
	});

	$('#headerLogo').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $("#spacer").offset().top
    	}, 500);
	});

	$('#sideWrapper').append("<p class='console'> Navigation...check </p>");
}