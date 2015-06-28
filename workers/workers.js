// -----------------------------------------------------------------------
//	workers.js
//
//					Jun/19/2015
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").html
		("*** workers *** start *** Jun/19/2015 ***");

	var data_text = "";

	var file_in = "./workers_filtered.json";

	gen_table_proc (file_in);

	jQuery("#outarea_hh").html
		("*** workers *** end *** Jun/19/2015 ***");

});

// -----------------------------------------------------------------------
