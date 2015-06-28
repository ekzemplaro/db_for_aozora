// -----------------------------------------------------------------------
//	public_works.js
//
//					Jun/27/2015
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").html
		("*** public_works *** start *** Jun/27/2015 ***");

	var file_json = "./public_works.json";

	gen_table_proc (file_json);

	jQuery("#outarea_hh").html
		("*** public_works *** end *** Jun/27/2015 ***");

});

// -----------------------------------------------------------------------
