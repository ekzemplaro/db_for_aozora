// -----------------------------------------------------------------------
//	persons.js
//
//					Jun/19/2015
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").html
		("*** persons *** start *** Jun/19/2015 ***");

	var data_text = "";

	var file_in = "./persons.json";

	gen_table_proc (file_in);

	jQuery("#outarea_hh").html
		("*** persons *** end *** Jun/19/2015 ***");

});

// -----------------------------------------------------------------------
