// -----------------------------------------------------------------------
//	in_progress.js
//
//					Jun/27/2015
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").html
		("*** in_progress *** start *** Jun/27/2015 ***");

	var array_status = display_select_proc ();

	var data_text = "";

	var file_json = "./inp_person.json";

	gen_table_progress_proc (file_json,array_status);

	jQuery("#outarea_hh").html
		("*** in_progress *** end *** Jun/27/2015 ***");

});

// -----------------------------------------------------------------------
function display_select_proc ()
{
	var array_status = [
		"全部",
  		"入力予約",
		"入力中",
		"入力取り消し",
	"校正待ち(点検前)",
	"校正予約(点検前)",
	"校正予約(点検済み)",
	"校正待ち(点検済み)",
	"校正中",
	"校了",
	"公開",
	"非公開",
	"翻訳中"
];
	var str_out = display_select_box_proc ('select','status',array_status);


	jQuery("#area_status").html (str_out);

	return array_status;
}

// -----------------------------------------------------------------------
function display_select_box_proc (class_in,id_select,array_in)
{
	var str_out = "<select class=\"" + class_in + "\" id=\"" + id_select + "\" name=\"" + id_select + "\">";
	str_out += "<option selected>" + array_in[0] + "</option>";

	for (var it=1; it< array_in.length; it++)
		{
		str_out += "<option>" + array_in[it] +" </option>";
		}
	str_out += "</select>";

	str_out += '&nbsp&nbsp';

	return	str_out;
}

// -----------------------------------------------------------------------
