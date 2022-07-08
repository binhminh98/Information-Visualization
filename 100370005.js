$(function () {

	// Dashboard title
	var dashboard_title = 'AFRICA HUNGER AND FOOD INSECURITY';

	// chart 1
	// Data
	dataset_11 = [{
			name: 'Food Price Index',
			data: [76.3,75.8,76.7,71.8,80.0,83.4,86.1,82.2,78.7,68.5,67.1,71.8,70.2,72.6,77.1,76.9,80.7,98.8,114.3,95.1,106.8,118.8,111.5,109.5,106.3,95.1,97.8,100.8,94.3,95.6,99.2,125.1,142.3],
			color: '#B30000'
			// accessibility: {
			// }
	}];

	dataset_12 = [{
		name: 'Food Price Index',
		data: [76.3,75.8,76.7,71.8,80.0,83.4,86.1,82.2,78.7,68.5,67.1,71.8,70.2,72.6,77.1,76.9,80.7,98.8,114.3,95.1,106.8,118.8,111.5,109.5,106.3,95.1,97.8,100.8,94.3,95.6,99.2,125.1,142.3],
		color: '#B30000'
		// accessibility: {
		// }
	}, {
		name: 'Meat Price Index',
		data: [98.7,98.5,92.9,85.8,90.0,92.1,93.0,91.8,80.1,76.7,75.8,80.7,72.9,73.3,79.5,81.9,78.5,80.6,87.7,84.2,91.0,94.9,95.3,96.8,103.7,98.9,96.8,100.5,93.3,100.6,96.6,107.2,113.0],
		dashStyle: 'Dash',
	}
	];

	dataset_13 = [{
		name: 'Food Price Index',
		data: [76.3,75.8,76.7,71.8,80.0,83.4,86.1,82.2,78.7,68.5,67.1,71.8,70.2,72.6,77.1,76.9,80.7,98.8,114.3,95.1,106.8,118.8,111.5,109.5,106.3,95.1,97.8,100.8,94.3,95.6,99.2,125.1,142.3],
		color: '#B30000'
		// accessibility: {
		// }
	}, {
		name: 'Dairy Price Index',
		data: [51.6,55.5,65.7,56.3,56.7,68.3,68.4,69.2,67.9,60.0,68.5,79.5,60.9,68.5,82.2,88.1,81.3,128.3,128.7,94.8,112.0,117.0,101.3,128.5,120.3,89.1,87.9,111.0,105.4,103.4,102.9,118.5,136.8],
		dashStyle: 'ShortDot',
	},
	];

	dataset_14 = [{
		name: 'Food Price Index',
		data: [76.3,75.8,76.7,71.8,80.0,83.4,86.1,82.2,78.7,68.5,67.1,71.8,70.2,72.6,77.1,76.9,80.7,98.8,114.3,95.1,106.8,118.8,111.5,109.5,106.3,95.1,97.8,100.8,94.3,95.6,99.2,125.1,142.3],
		color: '#B30000'

		// accessibility: {
		// }
	}, {
		name: 'Cereals Price Index',
		data: [70.3,70.7,73.1,68.4,74.0,77.1,92.8,77.4,71.7,65.9,64.7,67.7,73.5,74.6,75.3,69.3,79.2,105.8,133.9,100.8,107.5,128.1,124.7,117.7,107.0,98.0,94.0,93.5,99.1,97.2,104.2,130.5,148.7],
		dashStyle: 'Dash',
	},
	];

	dataset_15 = [{
		name: 'Food Price Index',
		data: [76.3,75.8,76.7,71.8,80.0,83.4,86.1,82.2,78.7,68.5,67.1,71.8,70.2,72.6,77.1,76.9,80.7,98.8,114.3,95.1,106.8,118.8,111.5,109.5,106.3,95.1,97.8,100.8,94.3,95.6,99.2,125.1,142.3],
		color: '#B30000'
		// accessibility: {
		// }
	}, {
		name: 'Oils Price Index',
		data: [55.0,59.9,63.5,62.5,85.9,87.0,77.6,82.3,102.1,72.3,53.9,55.5,72.9,78.7,81.9,73.5,78.5,112.5,137.2,97.9,122.0,141.0,125.5,108.9,102.2,92.0,105.8,104.8,86.3,83.7,100.5,164.0,207.5],
		dashStyle: 'ShortDot',
	},
	];

	dataset_16 = [{
		name: 'Food Price Index',
		data: [76.3,75.8,76.7,71.8,80.0,83.4,86.1,82.2,78.7,68.5,67.1,71.8,70.2,72.6,77.1,76.9,80.7,98.8,114.3,95.1,106.8,118.8,111.5,109.5,106.3,95.1,97.8,100.8,94.3,95.6,99.2,125.1,142.3],
		color: '#B30000'
		// accessibility: {
		// }
	}, {
		name: 'Sugar Price Index',
		data: [94.0,67.8,67.2,71.9,89.5,89.5,82.1,82.0,67.2,48.2,63.6,69.9,56.4,55.1,52.2,69.8,101.7,65.4,77.0,116.4,131.8,145.0,121.0,99.8,97.2,85.0,118.8,101.9,76.1,79.1,80.4,108.8,111.2],
		dashStyle: 'ShortDash',
	}
	];

	dataset_17 = [{
		name: 'Food Price Index',
		data: [76.3,75.8,76.7,71.8,80.0,83.4,86.1,82.2,78.7,68.5,67.1,71.8,70.2,72.6,77.1,76.9,80.7,98.8,114.3,95.1,106.8,118.8,111.5,109.5,106.3,95.1,97.8,100.8,94.3,95.6,99.2,125.1,142.3],
		color: '#B30000'
		// accessibility: {
		// }
	}, {
		name: 'Meat Price Index',
		data: [98.7,98.5,92.9,85.8,90.0,92.1,93.0,91.8,80.1,76.7,75.8,80.7,72.9,73.3,79.5,81.9,78.5,80.6,87.7,84.2,91.0,94.9,95.3,96.8,103.7,98.9,96.8,100.5,93.3,100.6,96.6,107.2,113.0],
		dashStyle: 'Dash',
	}, {
		name: 'Dairy Price Index',
		data: [51.6,55.5,65.7,56.3,56.7,68.3,68.4,69.2,67.9,60.0,68.5,79.5,60.9,68.5,82.2,88.1,81.3,128.3,128.7,94.8,112.0,117.0,101.3,128.5,120.3,89.1,87.9,111.0,105.4,103.4,102.9,118.5,136.8],
		dashStyle: 'ShortDot',
	}, {
		name: 'Cereals Price Index',
		data: [70.3,70.7,73.1,68.4,74.0,77.1,92.8,77.4,71.7,65.9,64.7,67.7,73.5,74.6,75.3,69.3,79.2,105.8,133.9,100.8,107.5,128.1,124.7,117.7,107.0,98.0,94.0,93.5,99.1,97.2,104.2,130.5,148.7],
		dashStyle: 'Dash',
	}, {
		name: 'Oils Price Index',
		data: [55.0,59.9,63.5,62.5,85.9,87.0,77.6,82.3,102.1,72.3,53.9,55.5,72.9,78.7,81.9,73.5,78.5,112.5,137.2,97.9,122.0,141.0,125.5,108.9,102.2,92.0,105.8,104.8,86.3,83.7,100.5,164.0,207.5],
		dashStyle: 'ShortDot',
	}, {
		name: 'Sugar Price Index',
		data: [94.0,67.8,67.2,71.9,89.5,89.5,82.1,82.0,67.2,48.2,63.6,69.9,56.4,55.1,52.2,69.8,101.7,65.4,77.0,116.4,131.8,145.0,121.0,99.8,97.2,85.0,118.8,101.9,76.1,79.1,80.4,108.8,111.2],
		dashStyle: 'ShortDash',
	}
	];

	var ncol = 2;
	var i = 3;
	index = 'Food Price Index Worldwide'
	addChart1(ncol,i,dataset_11,index);

	// chart 3
	i = 0;
	var renderto = makeChartBox(i,ncol);
	addChart3(renderto);

	// chart 2
	makeChartBox(2,2);
	addChart2()

	// chart 4
	var World_Average_4 = [
		{name: "Moderate Food Insecurity", data: [14.3,14.7,15.3,16.2,16.3,16.5,18.5],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [8.3,8.1,8.3,8.7,9.6,10.1,11.9],color: '#BB1C1C'},
	]
	var African_Average_4 = [
		{name: "Moderate Food Insecurity", data: [29.6,29.7,31.1,32,32.1,32.3,33.7],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [17.7,18.3,19.8,20.5,20.6,21.9,25.9],color: '#BB1C1C'},
	]
	var Nigeria_4 = [
		{name: "Moderate Food Insecurity", data: [29.9,30.8,31.5,32.3,36.3],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [6.6,9.3,12.1,14.8,21.4],color: '#BB1C1C'},
	]
	var Ethiopia_4 = [
		{name: "Moderate Food Insecurity", data: [41.7,43.3,44.6,43.8,39.9],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [14.5,15,14.8,14.1,16.4],color: '#BB1C1C'},
	]
	var Egypt_4 = [
		{name: "Moderate Food Insecurity", data: [19.4,21.2,24.5,23.8,21.1],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [8.4,8.7,8.6,7.4,6.7],color: '#BB1C1C'},
	]
	var Congo_4 = [
		{name: "Moderate Food Insecurity", data: [39.4,39.2,38.2,37.1,36.6],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [42.6,46.1,49.7,51.1,51.7],color: '#BB1C1C'},
	]
	var Tanzania_4 = [
		{name: "Moderate Food Insecurity", data: [30,31.2,31.2,31.2,31.7],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [22,23.8,23.8,23.8,24.7],color: '#BB1C1C'},
	]
	var South_Africa_4 = [
		{name: "Moderate Food Insecurity", data: [18,18.4,18.6,19,19.3],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [24.9,24,25.1,25.4,25.6],color: '#BB1C1C'},
	]
	var Kenya_4 = [
		{name: "Moderate Food Insecurity", data: [35.7,37.4,39.2,41,42.8],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [17.3,19.2,21.2,23.3,25.7],color: '#BB1C1C'},
	]
	var Uganda_4 = [
		{name: "Moderate Food Insecurity", data: [40.5,42.2,43.9,45.7,47.5],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [17.5,18.5,19.5,20.6,21.7],color: '#BB1C1C'},
	]
	var Algeria_4 = [
		{name: "Moderate Food Insecurity", data: [9.9,8.8,8.3,8.3,10.7],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [13,12.7,11.4,9.3,6.9],color: '#BB1C1C'},
	]
	var Sudan_4 = [
		{name: "Moderate Food Insecurity", data: [28,29.5,31,32.5,32.6],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [13.4,14.4,15.4,16.4,16.8],color: '#BB1C1C'},
	]
	var Angola_4 = [
		{name: "Moderate Food Insecurity", data: [45.5,45.7,45.8,46.1,46.6],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [21,22,23.5,24,26.9],color: '#BB1C1C'},
	]
	var Mozambique_4 = [
		{name: "Moderate Food Insecurity", data: [25,26.3,26.8,27.7,30.6],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [39.3,39,40.2,40.7,40.5],color: '#BB1C1C'},
	]
	var Ghana_4 = [
		{name: "Moderate Food Insecurity", data: [41.7,41.7,41.7,41.7,41.6],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [7.6,7.9,8.1,8.3,8.6],color: '#BB1C1C'},
	]
	var Cameroon_4 = [
		{name: "Moderate Food Insecurity", data: [29.1],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [26.7],color: '#BB1C1C'},
	]
	var Burkina_Faso_4 = [
		{name: "Moderate Food Insecurity", data: [31.8,32.1,31.2,30.2,32.5],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [10,10.9,11.7,12.6,15.4],color: '#BB1C1C'},
	]
	var Malawi_4 = [
		{name: "Moderate Food Insecurity", data: [30.1,30.2,30.2,30.3,30.4],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [51.8,51.7,51.6,51.5,51.4],color: '#BB1C1C'},
	]
	var Zambia_4 = [
		{name: "Moderate Food Insecurity", data: [42.9,44.6,44.5,43.9,46.6],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [21.8,22.1,22.5,22.8,23.2],color: '#BB1C1C'},
	]
	var Senegal_4 = [
		{name: "Moderate Food Insecurity", data: [24.8,25.1,25.5,25.8,27.3],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [14.5,15.7,12.5,13.9,13.6],color: '#BB1C1C'},
	]
	var Guinea_4 = [
		{name: "Moderate Food Insecurity", data: [28.2,26.3,24.4,24.4,24.4],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [44.3,47.1,49.7,49.7,49.7],color: '#BB1C1C'},
	]
	var Tunisia_4 = [
		{name: "Moderate Food Insecurity", data: [9.1,10.1,10.9,12.4,14.4],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [9.1,9.3,9.1,9.7,10.7],color: '#BB1C1C'},
	]
	var Sierra_Leone_4 = [
		{name: "Moderate Food Insecurity", data: [48,48.4,48.7,49.1,52.1],color: '#C6883F'},
		{name: "Severe Food Insecurity", data: [30.4,30.8,31.2,31.5,31.8],color: '#BB1C1C'},
	]

	var dataset_4 = African_Average_4;
	i = 1;
	country = "African";
	addChart4(ncol,i,dataset_4,country);

// CHART 1

	function addChart1(ncol,i,dataset_1,index){
		//console.log('142', seriesY.title)
		$('header').empty();
		$('header').append(dashboard_title);
		addMenuItems();
		addMenuItems2()
		var renderto = makeChartBox(i, ncol);
		makeChart1(renderto,dataset_1,index);
	};

	function makeChartBox(i, ncol){
		// calculate chart width and height - fixed ratio
		var x = $('#displayarea').width();
		var w = Math.floor(x/ncol);	
		var h = Math.floor(w*9/16);
		//console.log('158 x= ',x, 'w= ',w,'h= ', h, 'i= ',i, 'ncol= ',ncol)
		
		// calculate the column and row numbers for this chart
		var col = i%ncol;
		var row = Math.floor(i/ncol);

		// calculate the space to leave on left and at top of chart
		var leftspace = (4+w)*col;
		var topspace = (8+h)*row;
		
		// append the chart to the display area
		$('#displayarea').append('<div id="chart'+i+'" class="chartbox"></div>');
		
		// add CSS rules to position the chart
		$('#chart'+i).css('height', h+'px');
		$('#chart'+i).css('width', w+'px');
		$('#chart'+i).css('left', leftspace+'px');
		$('#chart'+i).css('top', topspace+'px');
		
		return ('#chart'+i);
	};

	function addMenuItems(){
	// populates the menu area
		//console.log('183 ncol=', ncol);
		
		// ncol is the default number of columns
		// clear the menu of existing content
		$('#menubox').empty();

		//add the select button
		//$('#menubox').append('<button name="select" onclick="getMenuChoices()">Select series</button> ');
		$('#menubox').append('<p><button name="select" id="menuListSelect">Display changes</button></p>');

		// add the test about displaying selected charts
		$('#menubox').append('Select the chart to display<br>');	

		$('#menubox').append('<input type="radio" name="country" value="World">World</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="African">African</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Nigeria">Nigeria</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Ethiopia">Ethiopia</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Egypt">Egypt</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Congo">Congo</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Tanzania">Tanzania</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="South_Africa">South_Africa</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Kenya">Kenya</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Uganda">Uganda</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Algeria">Algeria</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Sudan">Sudan</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Angola">Angola</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Mozambique">Mozambique</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Ghana">Ghana</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Cameroon">Cameroon</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Burkina_Faso">Burkina_Faso</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Malawi">Malawi</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Zambia">Zambia</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Senegal">Senegal</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Guinea">Guinea</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Tunisia">Tunisia</input><br />');
		$('#menubox').append('<input type="radio" name="country" value="Sierra_Leone">Sierra_Leone</input><br />');

		// $('#menubox').append('<select size="1" name="cdata" id="datas"  ></select><br>');
		// $('#datas').append('<option value="Demand">demand_uk</option>');
		// $('#datas').append('<option value="Supply">supply_uk</option>');
		$('#menuListSelect').on( 'click', function() {
			$('input[name="country"]:checked').each(function(){
				if ($(this).val() === 'World'){
					var dataset_4 = World_Average_4;
				} else if($(this).val() === 'African'){
					var dataset_4 = African_Average_4;
				} else if($(this).val() === 'Nigeria'){
					var dataset_4 = Nigeria_4;
				} else if($(this).val() === 'Ethiopia'){
					var dataset_4 = Ethiopia_4;
				} else if($(this).val() === 'Egypt'){
					var dataset_4 = Egypt_4;
				} else if($(this).val() === 'Congo'){
					var dataset_4 = Congo_4;
				} else if($(this).val() === 'Tanzania'){
					var dataset_4 = Tanzania_4;
				} else if($(this).val() === 'South_Africa'){
					var dataset_4 = South_Africa_4;
				} else if($(this).val() === 'Kenya'){
					var dataset_4 = Kenya_4;
				} else if($(this).val() === 'Uganda'){
					var dataset_4 = Uganda_4;
				} else if($(this).val() === 'Algeria'){
					var dataset_4 = Algeria_4;
				} else if($(this).val() === 'Sudan'){
					var dataset_4 = Sudan_4;
				} else if($(this).val() === 'Morocco'){
					var dataset_4 = Morocco_4;
				} else if($(this).val() === 'Angola'){
					var dataset_4 = Angola_4;
				} else if($(this).val() === 'Mozambique'){
					var dataset_4 = Mozambique_4;
				} else if($(this).val() === 'Ghana'){
					var dataset_4 = Ghana_4;
				} else if($(this).val() === 'Madagascar'){
					var dataset_4 = Madagascar_4;
				} else if($(this).val() === 'Cameroon'){
					var dataset_4 = Cameroon_4;
				} else if($(this).val() === 'Côte_dIvoire'){
					var dataset_4 = Côte_dIvoire_4;
				} else if($(this).val() === 'Niger'){
					var dataset_4 = Niger_4;
				} else if($(this).val() === 'Burkina_Faso'){
					var dataset_4 = Burkina_Faso_4;
				} else if($(this).val() === 'Mali'){
					var dataset_4 = Mali_4;
				} else if($(this).val() === 'Malawi'){
					var dataset_4 = Malawi_4;
				} else if($(this).val() === 'Zambia'){
					var dataset_4 = Zambia_4;
				} else if($(this).val() === 'Chad'){
					var dataset_4 = Chad_4;
				} else if($(this).val() === 'Senegal'){
					var dataset_4 = Senegal_4;
				} else if($(this).val() === 'Guinea'){
					var dataset_4 = Guinea_4;
				} else if($(this).val() === 'Rwanda'){
					var dataset_4 = Rwanda_4;
				} else if($(this).val() === 'Benin'){
					var dataset_4 = Benin_4;
				} else if($(this).val() === 'Burundi'){
					var dataset_4 = Burundi_4;
				} else if($(this).val() === 'Tunisia'){
					var dataset_4 = Tunisia_4;
				} else if($(this).val() === 'Sierra_Leone'){
					var dataset_4 = Sierra_Leone_4;
				} else if($(this).val() === 'Togo'){
					var dataset_4 = Togo_4;
				} else {
					var dataset_4 = African_Average_4
				};
			addChart4(ncol,i,dataset_4,$(this).val());
			});
		});
	};

	function addMenuItems2(){
		// populates the menu area
			//console.log('183 ncol=', ncol);
			
			// ncol is the default number of columns
			// clear the menu of existing content
			$('#menubox2').empty();

			//$('#menubox').append('<button name="select" onclick="getMenuChoices()">Select series</button> ');
			$('#menubox2').append('<p><button name="select" id="menuListSelect2">Display changes</button></p>');
	
			// add the test about displaying selected charts
			$('#menubox2').append('Select the index to display<br>');	
	
			$('#menubox2').append('<input type="radio" name="country" value="All">All Index</input><br />');
			$('#menubox2').append('<input type="radio" name="country" value="Food Price Index">Food Price Index</input><br />');
			$('#menubox2').append('<input type="radio" name="country" value="Meat Price Index">Meat Price Index</input><br />');
			$('#menubox2').append('<input type="radio" name="country" value="Dairy Price Index">Dairy Price Index</input><br />');
			$('#menubox2').append('<input type="radio" name="country" value="Cereals Price Index">Cereals Price Index</input><br />');
			$('#menubox2').append('<input type="radio" name="country" value="Oils Price Index">Oils Price Index</input><br />');
			$('#menubox2').append('<input type="radio" name="country" value="Sugar Price Index">Sugar Price Index</input><br />');

	
			// $('#menubox').append('<select size="1" name="cdata" id="datas"  ></select><br>');
			// $('#datas').append('<option value="Demand">demand_uk</option>');
			// $('#datas').append('<option value="Supply">supply_uk</option>');
			$('#menuListSelect2').on( 'click', function() {
				$('input[name="country"]:checked').each(function(){
					if ($(this).val() === 'All'){
						var dataset_1 = dataset_17;
					} else if($(this).val() === 'Food Price Index'){
						var dataset_1 = dataset_11;
					} else if($(this).val() === 'Meat Price Index'){
						var dataset_1 = dataset_12;
					} else if($(this).val() === 'Dairy Price Index'){
						var dataset_1 = dataset_13;
					} else if($(this).val() === 'Cereals Price Index'){
						var dataset_1 = dataset_14;
					} else if($(this).val() === 'Oils Price Index'){
						var dataset_1 = dataset_15;
					} else if($(this).val() === 'Sugar Price Index'){
						var dataset_1 = dataset_16;
					}
					else {var dataset_1 = dataset_11};
				addChart1(ncol,i+2,dataset_1,$(this).val());
				});
			});
		};
	
	function makeChart1(renderto,data,index){
		$(renderto).highcharts({
			chart: {
				type: 'line',
				zoomType: 'xy'
			},
			title: {
				text: index,
				style: {fontSize: '30px'},
			},
			subtitle: {
				text: 'Source: <a href="https://www.fao.org/worldfoodsituation/foodpricesindex/en/">Food and Agriculture Organization (FAO)</a>'
			},
			xAxis: {
				categories: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
				tickInterval: 4,
			},
			yAxis: {
				min:0,
				title: {
				}
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: false
					},
					enableMouseTracking: true
				}
			},
			legend: {
				layout: 'vertical',
				align: 'left',
				verticalAlign: 'top',
				x: 70,
				y: 85,
				floating: true,
				borderWidth: 1,
				backgroundColor:
					Highcharts.defaultOptions.legend.backgroundColor || '#F3F0E9',
				shadow: true
			},
			series: data,
			responsive: {
				rules: [{
					condition: {
						maxWidth: 550
					},
					chartOptions: {
						chart: {
							spacingLeft: 3,
							spacingRight: 3
						},
						legend: {
							itemWidth: 150
						},
						xAxis: {
							categories: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
							title: ''
						},
						yAxis: {
							visible: false
						}
					}
				}]
			}
		});
	}		

// CHART 2

	function addChart2(){
		var year = 2001;
		var start = 2001;
		var finish = 2017;
		var seriesPath = 'https://raw.githubusercontent.com/binhminh98/Information-Visualization/main/Data/undernorished.json';
		//var seriesPath = 'http://visdemos.projects.cmp.uea.ac.uk/data/OECD_GDP_head_all.json';
		//var seriesPath = 'localhost:8081/resources/data/OECD_GDP_head_all.json';
		//var seriesPath = 'data/OECD_GDP_head_all.json';

		localStorageTest();
		clearStorage();

		// addMapMenuItems(start, finish);
		addSlider(start, finish, year);
		runSeries(start, finish, year);
		getMapSeries(year, seriesPath);


		function prepMapData(year){
			// Prepare data

			var allData = getObject('allData');
			var selectedData = [];
			// OECD series runs from 1980 =>
				for (var i=0; i<allData[0].length; i++){
					// need to generate: {"iso-a3": "xxx", "value": nnnnn}
					selectedData.push({"x":allData[year-2001][i][0].x, "y":allData[year-2001][i][0].y, "z": allData[year-2001][i][0].y, "name": allData[year-2001][i][0].name,"country":allData[year-2001][i][0].country, "color":allData[year-2001][i][0].color,"value":allData[year-2001][i]});
					// console.log({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-1980]});
				};
			console.log(JSON.stringify(selectedData));
			return selectedData;
		};

		function drawMap(year, selectedData){
			// Initiate the chart
			$('#chart2').highcharts({
				chart: {
					type: 'bubble',
					plotBorderWidth: 1,
					zoomType: 'xy'
				},
			
				legend: {
					enabled: false
				},
			
				title: {
					text: 'Prevalence of undernourishment <br> vs GDP per capita in '+year,
					style: {fontSize: '30px'},
				},
				subtitle: {
					text: 'Source: <a href="https://ourworldindata.org/hunger-and-undernourishment#undernourishment">Ourworldindata</a> and <a href="https://datacatalog.worldbank.org/search/dataset/0037712">Worldbank</a>'
				},
			
				accessibility: {
					point: {
						valueDescriptionFormat: '{index}. {point.name}, : % Undernourishment{point.x}g, GDP per capita: {point.y}g, GDP per capita: {point.z}%.'
					}
				},
			
				xAxis: {
					min: 0,
					max: 100,
					gridLineWidth: 1,
					title: {
						text: 'Share of the population who are undernourished'
					},
					labels: {
						format: '{value} %'
					},
					plotLines: [{
						color: 'black',
						dashStyle: 'dot',
						width: 2,
						value: 18.17,
						label: {
							rotation: 0,
							y: 15,
							style: {
								fontStyle: 'italic'
							},
							text: 'African average undernorished percentages: 18%'
						},
						zIndex: 3
					}],
					accessibility: {
						rangeDescription: 'Range: 0 to 100%.'
					}
				},
			
				yAxis: {
					min: 0,
					startOnTick: false,
					endOnTick: false,
					tickInterval: 2000,
					title: {
						text: 'GDP per capita'
					},
					labels: {
						format: '{value} $'
					},
					maxPadding: 0.2,
					plotLines: [{
						color: 'black',
						dashStyle: 'dot',
						width: 2,
						value: 3691.09,
						label: {
							align: 'right',
							style: {
								fontStyle: 'italic'
							},
							text: 'African average <br> GDP per capita: 3691$',
							x: -10
						},
						zIndex: 3
					}],
					accessibility: {
						rangeDescription: 'African average GDP per capita: 3691$ '
					}
				},
			
				tooltip: {
					useHTML: true,
					headerFormat: '<table>',
					pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
						'<tr><th>Undernorished percentages:</th><td>{point.x} %</td></tr>' +
						'<tr><th>GDP per capita:</th><td>{point.y} $</td></tr>',
					footerFormat: '</table>',
					followPointer: true
				},
			
				plotOptions: {
					series: {
						dataLabels: {
							enabled: true,
							format: '{point.name}'
						}
					}
				},
			
				series: [{
					data: selectedData
				}]
			});
		};

		function getMapSeries(year, seriesPath){
		// fetch the series data from the server
			console.log('getting series '+seriesPath);
			$.getJSON(seriesPath, function (data) {
				console.log(seriesPath, JSON.stringify(data));
				clearObject('allData');
				setObject('allData', data);
				drawMap(year, prepMapData(year));
			})
			.fail(function(jqXHR, textStatus, errorThrown) { 
				console.log('getJSON request failed! ' + textStatus); 
			});	
		};
		
		function addSlider(start, finish, year) {
			console.log(start, finish, year);
			$('#sliderbox2').empty();

			$('#sliderbox2').append('<div id="slider2"></div>');
			$('#sliderbox2').append('<div id="sliderStartVal2"></div>');
			$('#sliderbox2').append('<div id="sliderEndVal2"></div>');
			$('#sliderStartVal2').append(start);
			$('#sliderEndVal2').append(finish);

			$('#slider2').append('<div id="custom-handle2" class="ui-slider-handle"></div>');
			//$('#sliderbox').append(finish);
			var handle = $('#custom-handle2');
			$('#slider2').slider({
				min: start,
				max: finish,
				value: year,
				create: function() {
					handle.text($(this).slider('value') );
				},
				slide: function(event, ui) {
					handle.text(ui.value);
					//console.log (ui.value);	
					drawMap(ui.value, prepMapData(ui.value));
				}
			});		
		};

		function runSeries(start, finish){
			$('#sliderbox2').append('<button type="button" id="runSeries2">&gtcc;</button>');
			$('#runSeries2').on('click', function() {
				addChart2()
				var i = start;
				var intervalID = setInterval(function () {
					addSlider(start, finish, i);
					drawMap(i, prepMapData(i));
					i++;
					if (i > finish){
						clearInterval(intervalID);
						// need to put the runSeries button back at the end
						runSeries(start, finish);
					}
				}, 100);
			});
		
		};
		
	};

// CHART 3

	function addChart3(renderto){
	var year = 2012;
	var start = 2012;
	var finish = 2021;
	var seriesPath = 'https://raw.githubusercontent.com/binhminh98/Information-Visualization/main/Data/food_security_index.json';
	//var seriesPath = 'http://visdemos.projects.cmp.uea.ac.uk/data/OECD_GDP_head_all.json';
	//var seriesPath = 'localhost:8081/resources/data/OECD_GDP_head_all.json';
	//var seriesPath = 'data/OECD_GDP_head_all.json';

	localStorageTest();
	clearStorage();

	// addMapMenuItems(start, finish);
	addSlider(start, finish, year,renderto);
	runSeries(start, finish, year,renderto);
	getMapSeries(year, seriesPath,renderto);


	function prepMapData(year){
	// Prepare data

	var allData = getObject('allData');
	var selectedData = [];

	// OECD series runs from 1980 =>
	for (var i=0; i<allData.length; i++){
		// need to generate: {"iso-a3": "xxx", "value": nnnnn}
		selectedData.push({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-2012]});
		//console.log({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-1980]});
	};
	console.log(JSON.stringify(selectedData));
	return selectedData;
	};

	function drawMap(year, selectedData,renderto){
	// Initiate the chart
	$(renderto).highcharts('Map', {
		title: {
			text: 'Global Food Security Index (GFSI) '+year,
			style: {fontSize: '30px'},
		},
		subtitle: {
			text: 'Source: <a href="https://impact.economist.com/sustainability/project/food-security-index/Index">The Economist Group</a>'
		},
		legend: {
			title: {
				text: 'Global Food Security Index',
				style: {
					color: ( // theme
						Highcharts.defaultOptions &&
						Highcharts.defaultOptions.legend &&
						Highcharts.defaultOptions.legend.title &&
						Highcharts.defaultOptions.legend.title.style &&
						Highcharts.defaultOptions.legend.title.style.color
					) || 'black'
				}
			},
			align: 'right',
			y : -50,
			verticalAlign: 'bottom',
			floating: true,
			layout: 'vertical',
			valueDecimals: 0,
			backgroundColor: ( // theme
				Highcharts.defaultOptions &&
				Highcharts.defaultOptions.legend &&
				Highcharts.defaultOptions.legend.backgroundColor
			) || 'rgba(255, 255, 255, 0.85)',
			symbolRadius: 0,
			symbolHeight: 14
		},
		mapNavigation: {
			enabled: true,
			buttonOptions: {
				verticalAlign: 'bottom'
			}
		},
		colorAxis: {
			minColor: '#B30000',
			maxColor: '#CEA0A0',
			dataClasses: [{
				name: "Severe (<40)",
				from: 0,
				to: 40
			}, {
				name: "Moderate (40 -> 60)",
				from: 40,
				to: 60
			},{
				name: "Above average (60-100)",
				from: 60,
				to: 100
			},
			]
		},
		series: [{
			data: selectedData,
			mapData: Highcharts.maps['custom/africa'],
			joinBy: 'iso-a3',
			name: 'Global food security index'+year,
			states: {
				hover: {
					color: 'palegreen'
				}
			},
			dataLabels: {
				enabled: true,
				format: '{point.name}'
			}
		}]
	});
	};

	function getMapSeries(year, seriesPath,renderto){
	// fetch the series data from the server
	console.log('getting series '+seriesPath);
	$.getJSON(seriesPath, function (data) {
		console.log(seriesPath, JSON.stringify(data));
		clearObject('allData');
		setObject('allData', data);
		drawMap(year, prepMapData(year),renderto);
	})
	.fail(function(jqXHR, textStatus, errorThrown) { 
		console.log('getJSON request failed! ' + textStatus); 
	});	
	};

	function addSlider(start, finish, year,renderto) {
	console.log(start, finish, year);
	$('#sliderbox').empty();

	$('#sliderbox').append('<div id="slider"></div>');
	$('#sliderbox').append('<div id="sliderStartVal"></div>');
	$('#sliderbox').append('<div id="sliderEndVal"></div>');
	$('#sliderStartVal').append(start);
	$('#sliderEndVal').append(finish);

	$('#slider').append('<div id="custom-handle" class="ui-slider-handle"></div>');
	//$('#sliderbox').append(finish);
	var handle = $('#custom-handle');
	$('#slider').slider({
		min: start,
		max: finish,
		value: year,
		create: function() {
			handle.text($(this).slider('value') );
		},
		slide: function(event, ui) {
			handle.text(ui.value);
			//console.log (ui.value);
			drawMap(ui.value, prepMapData(ui.value),renderto);
		}
	});		
	};

	function runSeries(start, finish,year,renderto){
	$('#sliderbox').append('<button type="button" id="runSeries">&gtcc;</button>');
	$('#runSeries').on('click', function() {
		addChart3(renderto)
		var i = start;
		var intervalID = setInterval(function () {
			addSlider(start, finish, i);
			drawMap(i, prepMapData(i),renderto);
			i++;
			if (i > finish){
				clearInterval(intervalID);
				// need to put the runSeries button back at the end
				runSeries(start, finish,year,renderto);
			}
		}, 100);
	});

	};

	};

// CHART 4

	function addChart4(ncol,i,data,country){
		var renderto = makeChartBox(i, ncol);
		makeChart4(renderto,data,country);
	};

	function makeChart4(renderto,data,country){
		$(renderto).highcharts({
			chart: {
				type: 'column',
				zoomType: 'xy',
			},
			title: {
				text: 'Moderate or severe food insecurity<br> population percentages of '+country, 
				style: {fontSize: '30px'},
			},
			subtitle: {
				layout: 'vertical',
				align: 'center',
				verticalAlign: 'top',
				y: 90,
				text: 'Source: <a href="https://www.fao.org/faostat/en/#data/FS">Food and Agriculture Organization (FAO)</a>'
			},
			xAxis: {
				categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
				min: 0
			},
			yAxis: {
				min: 0,
				max: 100,
				title: {
					text: 'Percentages'
				},
				stackLabels: {
					enabled: true,
					formatter: function () {
						return this.total;
					},
					style: {
						fontWeight: 'bold',
						color: ( // theme
							Highcharts.defaultOptions.title.style &&
							Highcharts.defaultOptions.title.style.color
						) || 'gray'
					}
				}
			},
			tooltip: {
				headerFormat: '<b>{point.x}</b><br/>',
				pointFormat: '{series.name}: {point.y}%<br/>Total: {point.stackTotal}%'
			},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: true,
					}
				}
			},
			series: data
		});
	};
});