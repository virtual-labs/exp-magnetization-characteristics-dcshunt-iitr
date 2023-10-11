var r = 400;
		var circles = document.querySelectorAll('.circle');
		var total_circles = circles.length;
		for (var i = 0; i < total_circles; i++) {
		    circles[i].setAttribute('r', r);
		}

		var meter_dimension = (r * 2) + 100;
		var wrapper = document.querySelector('#wrapper');
		wrapper.style.width = meter_dimension + 'px';
		wrapper.style.height = meter_dimension + 'px';

		var cf = 2 * Math.PI * r;
		var semi_cf = cf / 2;
		
		document.querySelector('#outline_curves')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
		document.querySelector('#circle_main')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
		document.querySelector('#mask')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
			
			
			var slider = document.querySelector('#slider');
		var lbl = document.querySelector("#lbl");
		var mask = document.querySelector('#mask');
		var meter_needle =  document.querySelector('#meter_needle');
		
			
			
			
		var circles1 = document.querySelectorAll('.circle1');
		var total_circles1 = circles1.length;
		for (var i = 0; i < total_circles1; i++) {
		    circles1[i].setAttribute('r', r);
		}
		var meter_dimension1 = (r * 2) + 100;
		var wrapper = document.querySelector('#wrapper1');
		wrapper.style.width = meter_dimension1 + 'px';
		wrapper.style.height = meter_dimension1 + 'px';

		var cf1 = 2 * Math.PI * r;
		var semi_cf1 = cf1 / 2;
		
		document.querySelector('#outline_curves1')
		    .setAttribute('stroke-dasharray', semi_cf1 + ',' + cf1);
		document.querySelector('#circle_main1')
		    .setAttribute('stroke-dasharray', semi_cf1 + ',' + cf1);
		document.querySelector('#mask1')
		    .setAttribute('stroke-dasharray', semi_cf1 + ',' + cf1);	
			
			
		
		
		var mask1 = document.querySelector('#mask1');
		var meter_needle1 =  document.querySelector('#meter_needle1');
		    var createGraph = document.querySelector('.createGraph');
				   var trace1 = {
        x: [],
        y: [],
        type: 'scatter'
      };
		function range_change_event1() {
			var percent = slider.value;
	var db1="5";
	var db2="7";
	var db3="11";
	var db4="13";
	var db5="17";
	var db6="19";
	var db7="20";
	var db8="23";
	var db9="6";
	var db10="30";
		
		if(percent==1)
	  {
		percent=db1;
	  }
	  else if(percent==2)
	  {
	  percent = db2;
	  }
	  else if(percent==3)
	  {
	  percent = db3;
	  }
	  else if(percent==4)
	  {
	  percent = db4;
	  }
	  else if(percent==5)
	  {
	  percent = db5;
	  }
	  else if(percent==6)
	  {
	  percent = db6;
	  }
	  else if(percent==7)
	  {
	  percent = db7;
	  }
	  else if(percent==8)
	  {
	  percent = db8;
	  }
	  else if(percent==9)
	  {
	  percent = db9;
	  }
	  else if(percent==10)
	  {
	  percent = db10;
	  }
		    var meter_value = semi_cf - ((percent * semi_cf) / 33.3);
		    mask.setAttribute('stroke-dasharray', meter_value + ',' + cf);
		    meter_needle.style.transform = 'rotate(' + (270 + ((percent * 180) / 33.3)) + 'deg)';
			
		    var percent1 = slider.value;
			var db1="1";
			var db2="6";
			var db3="8";
			var db4="13";
			var db5="20";
			var db6="25";
			var db7="28";
			var db8="30";
			var db9="32";
			var db10="33.3";
				
		if(percent1==1)
	  {
		percent1=db1;
	  }
	  else if(percent1==2)
	  {
	  percent1 = db2;
	  }
	  else if(percent1==3)
	  {
	  percent1 = db3;
	  }
	  else if(percent1==4)
	  {
	  percent1 = db4;
	  }
	  else if(percent1==5)
	  {
	  percent1 = db5;
	  }
	  else if(percent1==6)
	  {
	  percent1 = db6;
	  }
	  else if(percent1==7)
	  {
	  percent1 = db7;
	  }
	  else if(percent1==8)
	  {
	  percent1 = db8;
	  }
	  else if(percent1==9)
	  {
	  percent1 = db9;
	  }
	  else if(percent1==10)
	  {
	  percent1 = db10;
	  }
			
			
			
		    var meter_value1 = semi_cf1 - ((percent1 * semi_cf1) / 33.3);
		    mask1.setAttribute('stroke-dasharray', meter_value1 + ',' + cf1);
		    meter_needle1.style.transform = 'rotate(' + (270 + ((percent1 * 180) / 33.3)) + 'deg)';
		    lbl.textContent = slider.value;
		}
		slider.addEventListener('input', range_change_event1);
		
		
        
		
		function btn_table(){
var percent = slider.value;
			var db1="5";
	var db2="7";
	var db3="11";
	var db4="13";
	var db5="17";
	var db6="19";
	var db7="20";
	var db8="23";
	var db9="6";
	var db10="30";
		
		if(percent==1)
	  {
		percent=db1;
	  }
	  else if(percent==2)
	  {
	  percent = db2;
	  }
	  else if(percent==3)
	  {
	  percent = db3;
	  }
	  else if(percent==4)
	  {
	  percent = db4;
	  }
	  else if(percent==5)
	  {
	  percent = db5;
	  }
	  else if(percent==6)
	  {
	  percent = db6;
	  }
	  else if(percent==7)
	  {
	  percent = db7;
	  }
	  else if(percent==8)
	  {
	  percent = db8;
	  }
	  else if(percent==9)
	  {
	  percent = db9;
	  }
	  else if(percent==10)
	  {
	  percent = db10;
	  }
	  
		 var percent1 = slider.value;
			var db1="1";
			var db2="6";
			var db3="8";
			var db4="13";
			var db5="20";
			var db6="25";
			var db7="28";
			var db8="30";
			var db9="32";
			var db10="33.3";
				
		if(percent1==1)
	  {
		percent1=db1;
	  }
	  else if(percent1==2)
	  {
	  percent1 = db2;
	  }
	  else if(percent1==3)
	  {
	  percent1 = db3;
	  }
	  else if(percent1==4)
	  {
	  percent1 = db4;
	  }
	  else if(percent1==5)
	  {
	  percent1 = db5;
	  }
	  else if(percent1==6)
	  {
	  percent1 = db6;
	  }
	  else if(percent1==7)
	  {
	  percent1 = db7;
	  }
	  else if(percent1==8)
	  {
	  percent1 = db8;
	  }
	  else if(percent1==9)
	  {
	  percent1 = db9;
	  }
	  else if(percent1==10)
	  {
	  percent1 = db10;
	  }
	
	var table = document.getElementById("mytable");
                    var row = table.insertRow(-1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
					cell1.innerHTML = slider.value;
                    cell2.innerHTML = percent;

      
			trace1.x.push(cell1.innerHTML);
			  trace1.y.push(cell2.innerHTML);
			          var data = [trace1];
        Plotly.newPlot('myDiv', data,{}, {showSendToCloud: true});

}
function creategraph()
{
	trace1.x.push(cell1.innerHTML);
			  trace1.y.push(cell2.innerHTML);
			          var data = [trace1];
        Plotly.newPlot('myDiv', data,{}, {showSendToCloud: true});
	
}



      


	