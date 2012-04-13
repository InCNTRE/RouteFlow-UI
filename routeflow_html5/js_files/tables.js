$(document).ready(function() {
    $('interfaces').dataTable( {
         "bProcessing": true,
        "sAjaxSource": '../webservice/interfaces.txt'
    } );
} );

