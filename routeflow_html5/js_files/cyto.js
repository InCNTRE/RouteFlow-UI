$(document).ready(function() { 

		
		var styleObj = {
  			selectors: {
    			"node": {
      				fillColor: "lightgreen",
      				labelText:  {
      						 defaultValue: "",
	                         passthroughMapper: "label"
                         },

      				height: 18,
      				width: 18
    			},
    			"node:selected": {
       				fillColor: "red",
				borderWidth: 3
    			},
    			"edge": {
       				width: 5,
				lineColor: "lightgreen"
    			},
    			"edge:selected": {
       				borderColor: "red",
				borderWidth: 3
    			},
  		   }
		};	
		
		
		var elements = {
                                nodes: [
                                    { data: { id: "A", label: "SEAT", name: "Seattle", lat: 47.614457, long: -122.338413 } },
                                    { data: { id: "B", label: "SALT", name: "Salt Lake City", lat: 40.757603, long: -111.953379 } },
                                    { data: { id: "C", label: "LOSA", name: "Los Angeles", lat: 33.737916, long: -118.295056} },
                                    { data: { id: "D", label: "HOUS", name: "Houston", lat: 29.956909, long: -95.418942 } },
                                    { data: { id: "E", label: "CHIC", name: "Chicago", lat: 41.896504, long: -87.64306 } },
                                    { data: { id: "F", label: "KANS", name: "Kansas", lat: 39.101078, long: -94.582098 } },
                                    { data: { id: "G", label: "ATLA", name: "Atlanta", lat: 33.758537, long: -84.38759 } },
                                    { data: { id: "H", label: "NEWY", name: "New York", lat: 40.720069, long: -74.005199 } },
                                    { data: { id: "I", label: "WASH", name: "Washington DC", lat: 38.908459, long: -77.014891 } }
                                ],
                                edges: [
                                	{ data: { id: "A-B", source: "A", target: "B" } },
                                	{ data: { id: "A-C", source: "A", target: "C" } },
                                	{ data: { id: "B-C", source: "B", target: "C" } },
                                	{ data: { id: "B-F", source: "B", target: "F" } },
                                	{ data: { id: "C-D", source: "C", target: "D" } },
                                	{ data: { id: "D-F", source: "D", target: "F" } },
                                	{ data: { id: "D-G", source: "D", target: "G" } },
                                	{ data: { id: "E-F", source: "E", target: "F" } },
                                	{ data: { id: "E-G", source: "E", target: "G" } },
                                	{ data: { id: "E-H", source: "E", target: "H" } },
                                	{ data: { id: "E-I", source: "E", target: "I" } },
                                	{ data: { id: "G-I", source: "G", target: "I" } },
									{ data: { id: "H-I", source: "H", target: "I" } }
                                	]
                        };
		
		
		$("#cy_fs").cytoscapeweb({
                        renderer: {
                                name: "svg"
                        },
                        layout: {
                                name: "arbor"
                        },
                        style: styleObj,
                        elements: elements, 
                        ready: function(cy){
			    }
                });

		


	  $("#extruderhelp").buildMbExtruder({
          positionFixed:true,
          width:350,
          sensibility:800,
          position:"right",
          });

	  $("#extruderadmin").buildMbExtruder({
          positionFixed:true,
          width:350,
          sensibility:800,
          position:"right",
          });
		
		
	$("#extruderLeft").buildMbExtruder({
          positionFixed:false,
          width:350,
          sensibility:800,
          position:"right",
          });
       		
        $("#extruderLeft2").buildMbExtruder({
          positionFixed:true,
          width:500,
          sensibility:800,
          position:"right",
	  flapDim: "75%",
          });

	$("#extruderLeft3").buildMbExtruder({
          positionFixed:true,
          width:500,
          sensibility:800,
          position:"right",
          });

       		 
});


//$("#cy_fs").cytoscapeweb("get").nodes(":selected").click(function(node) {
//	console.log(node);
//});
