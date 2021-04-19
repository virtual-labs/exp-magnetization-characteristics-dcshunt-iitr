// -----------------
var rightconnection=false;
var offstate=true;
function changeImage()
{
  if(rightconnection==false)
  {
    alert("Complete The Connections, Then Try Again!")
  }
  else {

      if(offstate==true)
      {
        offstate=false;
          document.getElementById("MCB-Off").src='assets/MCB-On.png';
          document.getElementById("MCB-Off").disabled = false;
          document.getElementById("push1").src='assets/push2.png';
          document.getElementById("push1_2").src='assets/push2.png';
          document.getElementById("push1_1").src='assets/push2.png';
          document.getElementById("addToTable").disabled = false;

      }
      else
      {
        offstate=true;
        document.getElementById("MCB-Off").src='assets/MCB-Off.png';
        document.getElementById("push1").src='assets/push1.png';
        document.getElementById("push1_2").src='assets/push1.png';
        document.getElementById("push1_1").src='assets/push1.png';
        changeImage();
        document.getElementById("addToTable").disabled = true;
      }


  }
}

var deg1 = 2; // starting
var deg2 = -2
var rotation_diff = 5;

var rotation;

function start()
{
   if(offstate==false)
   {
     rotation=1;
     myFunction();
   }


}

function stop()
{
    rotation=0;
}
function disabled() {
  document.getElementById('range_1').disabled=true;
  document.getElementById('range_1').value="0";
  document.getElementById('show').value="0";
  document.getElementById('show2').value="0";
  document.getElementById('addToTable').disabled=true;

}

function myFunction()
{
    var img1 = document.querySelector('.rotate');
    var img2 = document.querySelector('.rotate2');


    img1.style.transform = "rotate("+deg1+"deg)";


    if(rotation==1) {

    setTimeout("myFunction()",10);   }
    deg1 = deg1 + rotation_diff;
    deg2 = deg2 + rotation_diff;
  }

// --------------------

var rangeClock = document.getElementById('speedometer-needle-png-3');
var rangeClock2 = document.getElementById('speedometer-needle-png-3_1');
var rangeMeter = document.getElementById('range_1');
var values = [142,138,135,133,131,129,126,120,118,115];
var value =  [0.16,0.17,0.18,0.20,0.21,0.22,0.23,0.24,0.28,0.30];
var addToTable = document.querySelector('#addToTable');
var table = document.querySelector('table');
var createGraph = document.querySelector('.createGraph');

function rangeChange() {
  var rotateClock =  rangeMeter.value;
  var rotateClock2 =  rangeMeter.value;


  rangeClock.style.transform = 'rotate(' + (-59 + ((rotateClock * 115) / 100)) + 'deg)';
  rangeClock2.style.transform = 'rotate(' + (-59 + ((rotateClock * 115) / 100)) + 'deg)';

}

rangeMeter.addEventListener('input', rangeChange);

jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,225)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

        endpoint1= {
           anchor: [0.5, 0.5, 0, -1],
           connectorStyle: { strokeWidth: 4, stroke: "rgba(225,0,0)" },
           endpointsOnTop: true,
           isSource: true,
           maxConnections:3,
           isTarget: true,
           dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
       },

       prepare1 = function (elId) {
           initAnimation(elId);

           return instance.addEndpoint(elId, endpoint1);
       },


       endpoint2 = {
          anchor: [0.5, 0.5, 0, -1],
          connectorStyle: { strokeWidth: 4, stroke: "rgba(0,225,0)" },
          endpointsOnTop: true,
          isSource: true,
          maxConnections: 3,
          isTarget: true,
          dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
      },

      prepare2 = function (elId) {
          initAnimation(elId);

          return instance.addEndpoint(elId, endpoint2);
      },


    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: -90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),//red
            e2 = prepare1("ld2"),//red
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare2("ld10"),//green
            e11 = prepare2("ld11"),//green
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),
            e19 = prepare("ld19"),

            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

        var correct_connections_1_10 = [
            {
                "source": "ld1",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld1"
            }
        ];

        var correct_connections_1_16 = [
            {
                "source": "ld1",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld1"
            }
        ];

        var correct_connections_1_17 = [
            {
                "source": "ld1",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld1"
            }
        ];

        var correct_connections_2_3 = [
            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            }
        ];

        var correct_connections_4_12 = [
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            }
        ];

        var correct_connections_5_11 = [
            {
                "source": "ld5",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld5"
            }
        ];
        var correct_connections_6_14 = [
            {
                "source": "ld6",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld6"
            }
        ];

        var correct_connections_7_18 = [
            {
                "source": "ld7",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld7"
            }
        ];
        var correct_connections_8_15 = [
            {
                "source": "ld8",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld8"
            }
        ];

        var correct_connections_9_19 = [
            {
                "source": "ld9",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld9"
            }
        ];

        var correct_connections_10_13 = [
            {
                "source": "ld10",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld10"
            }
        ];


        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld10"
            },


            {
                "source": "ld10",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld1"
            },

            {
                "source": "ld1",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld1"
            },

            {
                "source": "ld2",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld2"
            },

            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            },

            {
                "source": "ld5",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld5"
            },

            {
                "source": "ld6",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld6"
            },

            {
                "source": "ld7",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld7"
            },

            {
                "source": "ld8",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld8"
            },

            {
                "source": "ld9",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld9"
            },

            {
                "source": "ld10",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld10"
            },
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_10 = false;
        var is_connected_1_16 = false;
        var is_connected_1_17 = false;
        var is_connected_2_3 = false;
        var is_connected_4_12 = false;
        var is_connected_5_11 = false;
        var is_connected_6_14 = false;
        var is_connected_7_18 = false;
        var is_connected_8_15 = false;
        var is_connected_9_19 = false;
        var is_connected_10_13 = false;
        var unallowed_connection_present = false;

        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_10){
                is_connected_1_10 = correct_connections_1_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present =!( allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_16){
                is_connected_1_16 = correct_connections_1_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

    //    checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_17){
                is_connected_1_17 = correct_connections_1_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }


            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        //checking for 4_9 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_3){
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

        });
        //checking for 4_9 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_12){
                is_connected_4_12 = correct_connections_4_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

        });

        //checking for 4_9 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_11){
                is_connected_5_11 = correct_connections_5_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

        });
        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_14){
                is_connected_6_14 = correct_connections_6_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }


            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_18){
                is_connected_7_18 = correct_connections_7_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }


            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_15){
                is_connected_8_15 = correct_connections_8_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }


            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        //checking for 4_9 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_19){
                is_connected_9_19 = correct_connections_9_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

        });

        //checking for 4_9 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_13){
                is_connected_10_13 = correct_connections_10_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

        });

        if (is_connected_1_10 && is_connected_1_16 && is_connected_1_17 && is_connected_2_3 && is_connected_4_12 && is_connected_5_11 && is_connected_6_14 && is_connected_7_18 && is_connected_8_15 && is_connected_9_19 && is_connected_10_13 && !unallowed_connection_present) {
            rightconnection=true;
            alert("correct connection");
            document.getElementById("MCB-Off").disabled=false;
            document.getElementById("range_1").disabled=false;
            disable_all();

            } else {
              rightconnection=false;
               document.getElementById("MCB-Off").disabled=true;
               document.getElementById("range_1").disabled=true;
               alert("WRONG CONNECTION");
                return;
            }
    });
});



function disable_all()
{


  jsPlumb.ready(function () {

      var instance,
          discs = [],

          addDisc = function (evt) {
              var info = createDisc();
              var e = prepare(info.id);
              instance.draggable(info.id);
              discs.push(info.id);
              evt.stopPropagation();
              evt.preventDefault();
          },

          reset = function (e) {
              for (var i = 0; i < discs.length; i++) {
                  var d = document.getElementById(discs[i]);
                  if (d) d.parentNode.removeChild(d);
              }
              discs = [];
              e.stopPropagation();
              e.preventDefault();
          },

          initAnimation = function (elId) {
              var el = document.getElementById(elId);

              instance.on(el, 'click', function (e, ui) {
                  if (el.className.indexOf("jsPlumb_dragged") > -1) {
                      jsPlumb.removeClass(elId, "jsPlumb_dragged");
                      return;
                  }

              });
          },

      // notice there are no dragOptions specified here, which is different from the
      // draggableConnectors2 demo.  all connections on this page are therefore
      // implicitly in the default scope.
           endpoint = {
              anchor: [0.5, 0.5, 0, -1],
              connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,225)" },
              endpointsOnTop: true,
              isSource: false,
              maxConnections: 10,
              isTarget: true,
              dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
          },

          prepare = function (elId) {
              initAnimation(elId);

              return instance.addEndpoint(elId, endpoint);
          },

      // this is overridden by the YUI demo.
          createDisc = function () {
              var d = document.createElement("div");
              d.className = "bigdot";
              document.getElementById("animation-demo").appendChild(d);
              var id = '' + ((new Date().getTime()));
              d.setAttribute("id", id);
              var w = screen.width - 162, h = screen.height - 200;
              var x = (5 * w) + Math.floor(Math.random() * (10 * w));
              var y = (5 * h) + Math.floor(Math.random() * (10 * h));
              d.style.top = y + 'px';
              d.style.left = x + 'px';
              return {d: d, id: id};
          };

      // get a jsPlumb instance, setting some appropriate defaults and a Container.
      instance = jsPlumb.getInstance({
          DragOptions: { cursor: 'wait', zIndex: 20 },
          Endpoint: [ "Image", { url: "littledot.png" } ],
          Connector: [ "Bezier", { curviness: -90 } ],
          Container: "canvas"
      });

      // suspend drawing and initialise.
      instance.batch(function () {
          var e1 = prepare("ld1"),
              e2 = prepare("ld2"),
              e3 = prepare("ld3"),
              e4 = prepare("ld4"),
              e5 = prepare("ld5"),
              e6 = prepare("ld6"),
              e7 = prepare("ld7"),
              e8 = prepare("ld8"),
              e9 = prepare("ld9"),
              e10 = prepare("ld10"),
              e11 = prepare("ld11"),
              e12 = prepare("ld12"),
              e13 = prepare("ld13"),
              e14 = prepare("ld14"),
              e15 = prepare("ld15"),
              e16 = prepare("ld16"),
              e17 = prepare("ld17"),
              e18 = prepare("ld18"),
              e19 = prepare("ld19"),

              clearBtn = jsPlumb.getSelector("#anim-clear"),
              addBtn = jsPlumb.getSelector("#add");

           var detachLinks = jsPlumb.getSelector(".littledot .detach");
              instance.on(detachLinks, "click", function (e) {
                  instance.deleteConnectionsForElement(this.getAttribute("rel"));
                  jsPlumbUtil.consume(e);
              });

              instance.on(document.getElementById("clear"), "click", function (e) {
                  instance.detachEveryConnection();
                  showConnectionInfo("");
                  jsPlumbUtil.consume(e);
              });
      });

      jsPlumb.fire("jsPlumbDemoLoaded", instance);

      document.getElementById("check-button").addEventListener("click", function () {
          //var d = instance.exportData();
          //console.log(instance.getAllConnections());

          var correct_connections_1_10 = [
              {
                  "source": "ld1",
                  "target": "ld10"
              },

              {
                  "source": "ld10",
                  "target": "ld1"
              }
          ];

          var correct_connections_1_16 = [
              {
                  "source": "ld1",
                  "target": "ld16"
              },

              {
                  "source": "ld16",
                  "target": "ld1"
              }
          ];

          var correct_connections_1_17 = [
              {
                  "source": "ld1",
                  "target": "ld17"
              },

              {
                  "source": "ld17",
                  "target": "ld1"
              }
          ];

          var correct_connections_2_3 = [
              {
                  "source": "ld2",
                  "target": "ld3"
              },

              {
                  "source": "ld3",
                  "target": "ld2"
              }
          ];

          var correct_connections_4_12 = [
              {
                  "source": "ld4",
                  "target": "ld12"
              },

              {
                  "source": "ld12",
                  "target": "ld4"
              }
          ];

          var correct_connections_5_11 = [
              {
                  "source": "ld5",
                  "target": "ld11"
              },

              {
                  "source": "ld11",
                  "target": "ld5"
              }
          ];
          var correct_connections_6_14 = [
              {
                  "source": "ld6",
                  "target": "ld14"
              },

              {
                  "source": "ld14",
                  "target": "ld6"
              }
          ];

          var correct_connections_7_18 = [
              {
                  "source": "ld7",
                  "target": "ld18"
              },

              {
                  "source": "ld18",
                  "target": "ld7"
              }
          ];
          var correct_connections_8_15 = [
              {
                  "source": "ld8",
                  "target": "ld15"
              },

              {
                  "source": "ld15",
                  "target": "ld8"
              }
          ];

          var correct_connections_9_19 = [
              {
                  "source": "ld9",
                  "target": "ld19"
              },

              {
                  "source": "ld19",
                  "target": "ld9"
              }
          ];

          var correct_connections_10_13 = [
              {
                  "source": "ld10",
                  "target": "ld13"
              },

              {
                  "source": "ld13",
                  "target": "ld10"
              }
          ];


          //a connection outside this will invalidate the circuit
          var allowed_connections = [
              {
                  "source": "ld1",
                  "target": "ld10"
              },


              {
                  "source": "ld10",
                  "target": "ld1"
              },

              {
                  "source": "ld1",
                  "target": "ld16"
              },

              {
                  "source": "ld16",
                  "target": "ld1"
              },

              {
                  "source": "ld1",
                  "target": "ld17"
              },

              {
                  "source": "ld17",
                  "target": "ld1"
              },

              {
                  "source": "ld2",
                  "target": "ld3"
              },

              {
                  "source": "ld3",
                  "target": "ld2"
              },

              {
                  "source": "ld4",
                  "target": "ld12"
              },

              {
                  "source": "ld12",
                  "target": "ld4"
              },

              {
                  "source": "ld5",
                  "target": "ld11"
              },

              {
                  "source": "ld11",
                  "target": "ld5"
              },

              {
                  "source": "ld6",
                  "target": "ld14"
              },

              {
                  "source": "ld14",
                  "target": "ld6"
              },

              {
                  "source": "ld7",
                  "target": "ld18"
              },

              {
                  "source": "ld18",
                  "target": "ld7"
              },

              {
                  "source": "ld8",
                  "target": "ld15"
              },

              {
                  "source": "ld15",
                  "target": "ld8"
              },

              {
                  "source": "ld9",
                  "target": "ld19"
              },

              {
                  "source": "ld19",
                  "target": "ld9"
              },

              {
                  "source": "ld10",
                  "target": "ld13"
              },

              {
                  "source": "ld13",
                  "target": "ld10"
              },
          ];

          var actual_connections = instance.getAllConnections();

          var is_connected_1_10 = false;
          var is_connected_1_16 = false;
          var is_connected_1_17 = false;
          var is_connected_2_3 = false;
          var is_connected_4_12 = false;
          var is_connected_5_11 = false;
          var is_connected_6_14 = false;
          var is_connected_7_18 = false;
          var is_connected_8_15 = false;
          var is_connected_9_19 = false;
          var is_connected_10_13 = false;
          var unallowed_connection_present = false;

          //checking for 1_3 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_1_10){
                  is_connected_1_10 = correct_connections_1_10.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                    });
              }

             if(!unallowed_connection_present){
                  unallowed_connection_present =!( allowed_connections.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                  }));
              }
              // if this_connection exists in correct_connections
              // remove this connection from correct ones
              // continue
              // else
              // return false
          });

          //checking for 1_3 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_1_16){
                  is_connected_1_16 = correct_connections_1_16.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                    });
              }

              // if this_connection exists in correct_connections
              // remove this connection from correct ones
              // continue
              // else
              // return false
          });

      //    checking for 1_3 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_1_17){
                  is_connected_1_17 = correct_connections_1_17.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                    });
              }


              // if this_connection exists in correct_connections
              // remove this connection from correct ones
              // continue
              // else
              // return false
          });
          //checking for 4_9 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_2_3){
                  is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
              }

          });
          //checking for 4_9 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_4_12){
                  is_connected_4_12 = correct_connections_4_12.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
              }

          });

          //checking for 4_9 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_5_11){
                  is_connected_5_11 = correct_connections_5_11.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
              }

          });
          //checking for 1_3 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_6_14){
                  is_connected_6_14 = correct_connections_6_14.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                    });
              }


              // if this_connection exists in correct_connections
              // remove this connection from correct ones
              // continue
              // else
              // return false
          });

          //checking for 1_3 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_7_18){
                  is_connected_7_18 = correct_connections_7_18.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                    });
              }


              // if this_connection exists in correct_connections
              // remove this connection from correct ones
              // continue
              // else
              // return false
          });

          //checking for 1_3 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_8_15){
                  is_connected_8_15 = correct_connections_8_15.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                    });
              }


              // if this_connection exists in correct_connections
              // remove this connection from correct ones
              // continue
              // else
              // return false
          });

          //checking for 4_9 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_9_19){
                  is_connected_9_19 = correct_connections_9_19.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
              }

          });

          //checking for 4_9 connection
          actual_connections.forEach(function (connection) {
              var this_connection = {
                  "source": connection.sourceId,
                  "target": connection.targetId
              };

              if(!is_connected_10_13){
                  is_connected_10_13 = correct_connections_10_13.find(function (conn) {
                      return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
              }

          });

          if (is_connected_1_10 && is_connected_1_16 && is_connected_1_17 && is_connected_2_3 && is_connected_4_12 && is_connected_5_11 && is_connected_6_14 && is_connected_7_18 && is_connected_8_15 && is_connected_9_19 && is_connected_10_13 && !unallowed_connection_present) {
              rightconnection=true;
              alert("correct connection");
              document.getElementById("MCB-Off").disabled=false;
              document.getElementById("range_1").disabled=false;
              disable_all();

              } else {
                rightconnection=false;
                 document.getElementById("MCB-Off").disabled=true;
                 document.getElementById("range_1").disabled=true;
                 alert("WRONG CONNECTION");
                  return;
              }
      });
  });

}
