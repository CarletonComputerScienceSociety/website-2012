

function sectionsInit()
{	
	
	$('#div1').load("/sections/1/1.html");

	$('#div2').load("/sections/2/2.html");

	$('#div3').load("/sections/3/3.html");
}


function openSection(num)
{
	var left = false;

	if (num % 2 == 0)
	{
		left = true;
	}

	if (left == true)
	{
		$('#img' + num).transition( {x: $(this).width()} );
		$('#open' + num + "a").transition( {y: ($('#img' + num).height() * 0.3)});	
	}

	else
	{
		$('#img' + num).transition( {x: -$(this).width()} );
		$('#open' + num + "a").transition( {y: ($('#img' + num).height() * 0.3)});
	}

	$('#open' + num + "a").unbind("click");
	
	$('#open' + num + "a").click(function()
	{
		closeSection(num);
	});
	
}

function closeSection(num)
{
	$('#img' + num).transition( {x: 0} );
	$('#open' + num + "a").transition( {y: 0});

	$('#open' + num + "a").unbind("click");
	
	$('#open' + num + "a").click(function()
	{
		openSection(num);
	});
}


function peekSection(num)
{
	var left = false;

	if (num % 2 == 0)
	{
		left = true;
	}

	if (left == true)
	{
		$('#img' + num).transition( {x: 20} );
		$('#open' + num + "a").transition( {x: -20});	

		setTimeout(function()
		{
			$('#img' + num).transition( {x: 0} );
			$('#open' + num + "a").transition( {x: 0, y:0});
		}, 500);
	}

	else
	{
		$('#img' + num).transition( {x: -20} );
		$('#open' + num + "a").transition( {x: 20});

		setTimeout(function()
		{
			$('#img' + num).transition( {x: 0} );
			$('#open' + num + "a").transition( {x: 0, y: 0});
		}, 500);
	}
}
