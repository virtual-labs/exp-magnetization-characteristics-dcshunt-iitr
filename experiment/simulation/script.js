var xx = [];
    var yy = [];
    var zz =[];
    var rangeMeter = document.querySelector('#range1');
    //var rangeShow = document.querySelector("#show");
    var rangeClock =  document.querySelector('.meter-clock');
    var meterColor = document.querySelector('.meter-shape');
    //var rangeShow2 = document.querySelector("#show2");
    var rangeClock2 =  document.querySelector('.meter-clock2');
    var meterColor2 = document.querySelector('.meter-shape2');
    //var rangeShow3 = document.querySelector("#show3");
    //var rangeShow4 = document.querySelector("#show4");
    //var rangeClock3 =  document.querySelector('.meter-clock3');
    //var meterColor3 = document.querySelector('.meter-shape3');
    var addToTable = document.querySelector('#addToTable');
    var table = document.querySelector('table');




      // console.log(values[i]);
    for (var i = 0; i < 100; i++) {
      function rangeChange() {
        var rotateClock =  rangeMeter.value;
        
      //  rangeClock.style.transform = 'rotate(' + (-50 + ((rotateClock * 1200) / 100)) + 'deg)';
       // rangeClock2.style.transform = 'rotate(' + (-50 + ((rotateClock * 1100) / 100)) + 'deg)';
        // rangeClock3.style.transform = 'rotate(' + (-50 + ((rotateClock * 1150) / 100)) + 'deg)';
        
        // rangeShow.value = rotateClock;
       /* if (rangeMeter.value <= 9) {
          //rangeShow.value = 400;
          //rangeShow2.value = 8.0;
          //rangeShow3.value = 1200;
          //rangeShow4.value=1250;
          document.getElementById('cirmover2').style.animation="rotation 4.5s infinite linear";
          if(rangeMeter.value <= 8) {
            rangeShow.value = 400;
            rangeShow2.value = 7.5;
            rangeShow3.value = 1160;
            rangeShow4.value=1278;
            document.getElementById('cirmover2').style.animation="rotation 4s infinite linear";
            if (rangeMeter.value <= 7) {
              rangeShow.value = 400;
              rangeShow2.value = 6.9;
              rangeShow3.value = 1100;
              rangeShow4.value=1300;
              document.getElementById('cirmover2').style.animation="rotation 3.5s infinite linear";
              if (rangeMeter.value <= 6) {
                rangeShow.value = 400;
                rangeShow2.value = 6.4;
                rangeShow3.value = 1040;
                rangeShow4.value=1334;
                document.getElementById('cirmover2').style.animation="rotation 3s infinite linear";
                if (rangeMeter.value <= 5) {
                  rangeShow.value = 400;
                  rangeShow2.value = 6.1;
                  rangeShow3.value = 940;
                  rangeShow4.value=1352;
                  document.getElementById('cirmover2').style.animation="rotation 2.5s infinite linear";
                  if (rangeMeter.value <= 4) {
                    rangeShow.value = 400;
                    rangeShow2.value = 5.5;
                    rangeShow3.value = 820;
                    rangeShow4.value=1364;
                    document.getElementById('cirmover2').style.animation="rotation 2s infinite linear";
                    if (rangeMeter.value <= 3) {
                      rangeShow.value = 400;
                      rangeShow2.value = 4.8;
                      rangeShow3.value = 680;
                      rangeShow4.value=1388;
                      document.getElementById('cirmover2').style.animation="rotation 1.5s infinite linear";;
                      if (rangeMeter.value <= 2) {
                        rangeShow.value = 400;
                        rangeShow2.value = 2.9;
                        rangeShow3.value = 140;
                        rangeShow4.value=1454;
                        document.getElementById('cirmover2').style.animation="rotation 1s infinite linear";
                        if (rangeMeter.value <= 1) {
                          rangeShow.value = 400;
                          rangeShow2.value = 2.6;
                          rangeShow3.value = 40;
                          rangeShow4.value=1474;
                          document.getElementById('cirmover2').style.animation="rotation 0.5s infinite linear";
                          if (rangeMeter.value <= 0) {
                            document.getElementById('cirmover2').style.animation="rotation 0s infinite linear";
                            rangeShow.value = 0;
                            rangeShow2.value = 0;
                            rangeShow3.value = 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          // if(rangeMeter.value <= 10) {
          //   rangeShow.value = values[0];
          // }
        }*/

        // else if (10 < rangeMeter.value <= 20) {
        //   rangeShow.value = values[1];
        // }
        
        // else if (20 < rangeMeter.value <= 30) {
        //   rangeShow.value = values[2];
        // }
        // rangeShow.value = values[i];
        
      }     
      rangeMeter.addEventListener('input', rangeChange);
    }  
    var clickcounter=0;
    var count = 1;
    var x = table.insertRow(0);

    var cell1 = x.insertCell(0);
    var cell2 = x.insertCell(1);
    var cell3 = x.insertCell(2);
    var cell4 = x.insertCell(3);

    
    cell1.innerHTML = "SN";
    cell2.innerHTML = "Ammeter";
    cell3.innerHTML = "Wattmeter"
    cell4.innerHTML = "Speed";
    var trace1 = {
        x: [],
        y: [],
        z: [],
        type: 'scatter'
      };
      var resistance=0;
    addToTable.addEventListener('click', () => {
      clickcounter++;

      if(clickcounter<=10)
      {
        var y = table.insertRow(clickcounter);
        var cell1 = y.insertCell(0);
        var cell2 = y.insertCell(1);
        var cell3 = y.insertCell(2);
        var cell4 = y.insertCell(3);
        cell1.innerHTML = "SN";
        cell2.innerHTML = "Ammeter";
        cell3.innerHTML = "Wattmeter"
        cell4.innerHTML = "Speed";
        cell1.innerHTML = count++;
        cell2.innerHTML = rangeShow2.value;
        cell3.innerHTML = rangeShow3.value;
        if(rangeMeter.value==0)
        {
          resistance=0;
          cell4.innerHTML = 0;
        }
        else if(rangeMeter.value==1)
        {
          resistance=1;
          cell4.innerHTML = 1474;
        }
        else if(rangeMeter.value==2)
        {
          resistance=2;
          cell4.innerHTML = 1454;
        }
        else if(rangeMeter.value==3)
        {
          resistance=3;
          cell4.innerHTML = 1388;
        }
        else if(rangeMeter.value==4)
        {
          resistance=4;
          cell4.innerHTML = 1363;
        }
        else if(rangeMeter.value==5)
        {
          resistance=5;
          cell4.innerHTML = 1352;
        }
        else if(rangeMeter.value==6)
        {
          resistance=6;
          cell4.innerHTML = 1334;
        }
        else if(rangeMeter.value==7)
        {
          resistance=7;
          cell4.innerHTML = 1300;
        }
        else if(rangeMeter.value==8)
        {
          resistance=8;
          cell4.innerHTML = 1278;
        }
        else if(rangeMeter.value==9)
        {
          resistance=9;
          cell4.innerHTML = 1250;
        }
      }
      else
      {
        alert("Only maximum 10 readings are allowed.");
      }
      
      trace1.x.push(cell4.innerHTML);
      trace1.y.push(resistance);
      var data = [trace1];
      Plotly.newPlot('myDiv', data, {}, {showSendToCloud: true});
     })
   function graph()
   {
     if(clickcounter<6)
     {
        alert("Alert ! Please take atleast 6 readings.");
     }
     else
     {
        return;
     }
   }
