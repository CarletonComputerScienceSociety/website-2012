

function navInit()
{	
	$('#link3').css("right", $(window).width() * 0.1 + 50 + "px");

	$('#link2').css("right", $(window).width() * 0.1 + 70 + $('#link3').width() + "px");

	$('#link1').css("right", $(window).width() * 0.1 + 90 + $('#link3').width() + $('#link2').width() + "px");	


	$('#link1').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $("#div1").offset().top
    	}, 500);
		
	});


	$('#link2').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $("#div2").offset().top
    	}, 500);

	});


	$('#link3').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $("#div3").offset().top
    	}, 500);

	});

	$('#headerLogo').click(function()
	{
		$('html, body').animate(
		{
       		scrollTop: $('body').offset().top
    	}, 500);
	});
}