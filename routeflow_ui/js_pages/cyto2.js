window.onload = test_cyto();

function test_cyto() {
   	
		var div_id = "cytotest";
                
                var networ_json = {
                    data: {
                        nodes: [ { id: "1" }, { id: "2" } ],
                        edges: [ { id: "2to1", target: "1", source: "2" } ]
                    }
                };
                
                var options = {
                    swfPath: "/swf/CytoscapeWeb",
                    flashInstallerPath: "/swf/playerProductInstall"
                };
                
                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                vis.draw({ network: networ_json });
};


function update_cyto() {


         // var network_json = JSON.parse(resp); 
         //document.getElementById("note").innerHTML += "<p>" + resp + "</p>";
         var network_json = { 
                        data: {
			    nodes: [
                                    { id: "A" },
                                    { id: "B" }, 
                                    { id: "C" }, 
                                    { id: "D" },
                                    { id: "E" },
                                    { id: "F" },
                                    { id: "G" },
                                    { id: "H" },
                                    { id: "I" }
                            ],
			    edges: [
                                        { source: "A", target: "B" },
                                        { source: "A", target: "C" },
                                        { source: "B", target: "C" },
                                        { source: "B", target: "F" },
                                        { source: "C", target: "D" },
                                        { source: "D", target: "F" },
                                        { source: "D", target: "G" },
                                        { source: "E", target: "F" },
                                        { source: "E", target: "G" },
                                        { source: "E", target: "H" },
                                        { source: "E", target: "I" },
                                        { source: "G", target: "I" },
                                        { source: "H", target: "I" }
                                        ]
				}
				};

	  var json = { 
			data: {
                            nodes: [ 
                                     { id: "RouteFlow A" },
				     { id: "RouteFlow B" },
				     { id: "RouteFlow C" },
				     { id: "RouteFlow D" },	
                                     { id: "100", parent: "RouteFlow A" },
                                     { id: "3", parent: "RouteFlow A" },
				     { id: "4", parent: "RouteFlow A" },
				     { id: "49", parent: "RouteFlow A" },
                                     { id: "5", parent: "RouteFlow B" },
                                     { id: "6", parent: "RouteFlow B" },
				     { id: "11", parent: "RouteFlow C" },
                                     { id: "12", parent: "RouteFlow C" },
                                     { id: "15", parent: "RouteFlow D" },
				     { id: "16", parent: "RouteFlow D" },
                                     { id: "17", parent: "RouteFlow D" },
                                     { id: "18", parent: "RouteFlow D" },
				     { id: "CIC" },
                                     { id: "Indiana Gigapop" },
                            ],
                            edges: [ 
                                    { target: "100", source: "5" },
                                    { target: "3", source: "12" },
                                    { target: "4", source: "18" },
                                    { target: "6", source: "16" },
                                    { target: "11", source: "17" },
                                    { target: "49", source: "CIC" },
			            { target: "15", source: "Indiana Gigapop" },
				 ]
				}
				};



    var div_id = "cytoscapeweb";


    var visual_style = {
	nodes: {
                        compoundShape: "RECTANGLE",
                        label: { passthroughMapper: { attrName: "id" } } ,
                        compoundLabel: { passthroughMapper: { attrName: "id" } } ,
                        borderWidth: 2,
                        compoundBorderWidth: 1,
                        borderColor: "#666666",
                        compoundBorderColor: "#999999",
                        size: 25,
                        compoundColor: "#eaeaea",
                }
	  };
	
       var options = {
                    swfPath: "/swf/CytoscapeWeb",
                    flashInstallerPath: "/swf/playerProductInstall",
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
			  var rrdfile = target.data["rrd"];
                         print(target.data["id"] + " RRD: " + rrdfile); 

			// Clear old graph
			 document.getElementById("traffic_graph").innerHTML = "";
	          	 
			 // Create new graph
			 setupMeasurementGraph(rrdfile);

                    }
                    
                    function clear() {
                        document.getElementById("note").innerHTML = "";
                    }
                
                    function print(msg) {
                        document.getElementById("note").innerHTML += "<p>" + msg + "</p>";
                    }
                });

	   // draw options
	    var draw_options = {
		network: json,
		panZoomControlVisible: true,
		visualStyle: visual_style
	    };

	    vis.draw(draw_options);
}        



