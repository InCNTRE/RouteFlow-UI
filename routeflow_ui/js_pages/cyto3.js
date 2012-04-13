function init_cyto() {

	var oButtonGroup1 = new YAHOO.widget.ButtonGroup("buttongroup1") 


         // var network_json = JSON.parse(resp); 
         //document.getElementById("note").innerHTML += "<p>" + resp + "</p>";
         var network_json = { 
                        data: {
                            nodes: [ 
                                     { id: "RouteFlow Z" },
				     { id: "RouteFlow B" },
				     { id: "RouteFlow C" },
				     { id: "RouteFlow D" },	
                                     { id: "2", parent: "RouteFlow A" },
                                     { id: "3", parent: "RouteFlow A" },
				     { id: "4", parent: "RouteFlow A" },
				     { id: "49", parent: "RouteFlow A" },
                                     { id: "5", parent: "RouteFlow B" },
                                     { id: "6", parent: "RouteFlow B" },
				     { id: "11", parent: "RouteFlow C" },
                                     { id: "12", parent: "RouteFlow C" },
			             { id: "13", parent: "RouteFlow C" },
                                     { id: "15", parent: "RouteFlow D" },
				     { id: "16", parent: "RouteFlow D" },
                                     { id: "17", parent: "RouteFlow D" },
                                     { id: "18", parent: "RouteFlow D" },
				     { id: "CIC" },
                                     { id: "Indiana Gigapop" },
                            ],
                            edges: [ 
                                    { target: "2", source: "5" },
                                    { target: "3", source: "12" },
                                    { target: "4", source: "18" },
                                    { target: "6", source: "16" },
                                    { target: "11", source: "17" },
                                    { target: "49", source: "CIC" },
			            { target: "15", source: "Indiana Gigapop" },
				 ]
				}
				};


    var div_id = "cytotest2";


    var visual_style = {

	edges: {
		   width: 10,
		   color: {
                            discreteMapper: {
                                attrName: "target",
                                entries: [ 
                                    { attrValue: 2, value: "#4D57E8" },
                                    { attrValue: 3, value: "#4D57E8" },
                                    { attrValue: 4, value: "#4D57E8" },
				    { attrValue: 6, value: "#4D57E8" },
                                    { attrValue: 11, value: "#4D57E8" },
                                    { attrValue: 15, value: "red" }
				    
				    
				]
				}
			}
		},
	nodes: {
		   color: {
                            discreteMapper: {
                                attrName: "id",
                                entries: [
                                    { attrValue: 2, value: "#25E86D" },
                                    { attrValue: 3, value: "#25E86D" },
                                    { attrValue: 4, value: "#25E86D" },
				    { attrValue: 49, value: "#F28F96" },
                                    { attrValue: 5, value: "#23E86D" },
                                    { attrValue: 6, value: "#25E86D" },
				    { attrValue: 11, value: "#25E86D" },
                                    { attrValue: 12, value: "#25E86D" },
                                    { attrValue: 15, value: "#25E86D" },
				    { attrValue: 16, value: "#25E86D" },
                                    { attrValue: 17, value: "#25E86D" },
                                    { attrValue: 18, value: "#25E86D" },
				    { attrValue: "CIC", value: "#F28F96" },
                                    { attrValue: "Indiana Gigapop", value: "#25E86D" },
                                ]
                            }
                        },
                        compoundShape: "RECTANGLE",
                        label: { passthroughMapper: { attrName: "id" } } ,
                        compoundLabel: { passthroughMapper: { attrName: "id" } } ,
                        borderWidth: 2,
                        compoundBorderWidth: 1,
			compoundCentralGravitation: 10000,
			gravitation: -10,
                        borderColor: "#666666",
                        compoundBorderColor: "#999999",
                        size: 25,
                        compoundColor: "#eaeaea",
                }
	  };
	
       var options = {
                    swfPath: "/swf/CytoscapeWeb",
                    flashInstallerPath: "/swf/playerProductInstall",
		    points: [ { id: "RouteFlow A", x: 10, y:  10},
			      { id: "2", x: 12, y:  12},
			      { id: "3", x: 14, y:  12},
			      { id: "4", x: 14, y:  14},
              		      { id: "RouteFlow B", x: 50, y:  10},
			      { id: "RouteFlow C", x: 10, y:  50},
			      { id: "RouteFlow D", x: 50, y:  50} ]
                };


	 var vis = new org.cytoscapeweb.Visualization(div_id, options);
	  // callback when Cytoscape Web has finished drawing
	   vis.ready(function() {
		   vis.addListener("click", "nodes", function(event) {
                        handle_click(event);
                    })
                    .addListener("click", "edges", function(event) {
                        handle_click(event);
                    });
                    
                    function handle_click(event) {
                         var target = event.target;
                         
                         clear();
			  var rrdfile = "192.12.206.231_" + target.data["id"] + ".rrd";
                         //print(target.data["parent"] + ":" + target.data["id"]); 
			 //print ("foo");
			 document.getElementById("note").innerHTML = target.data["parent"] + " Port:" + target.data["id"];

			//Clear old graph
			 document.getElementById("traffic_graph").innerHTML = "";
	          	 
			 // Create new graph
			 setupMeasurementGraph(rrdfile);

                    }
                    
                    function clear() {
                        document.getElementById("note").innerHTML = "";
			//document.getElementById("switch").innerHTML = "";
			//document.getElementById("port").innerHTML = "";
                    }
                
                    function print(msg) {
                        document.getElementById("note").innerHTML += "<p>" + msg + "</p>";
                    }
                });

	   // draw options
	    var draw_options = {
		network: network_json,
		panZoomControlVisible: true,
		layout: "CompoundSpringEmbedder",
		visualStyle: visual_style
	    };

	    vis.draw(draw_options);

            };

	var myTabs = new YAHOO.widget.TabView("demo");

