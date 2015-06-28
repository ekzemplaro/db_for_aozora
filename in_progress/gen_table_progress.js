// -----------------------------------------------------------------------
//	gen_table_progress.js
//
//					Jun/27/2015
//
// -----------------------------------------------------------------------
function gen_table_progress_proc (file_in,array_status)
{
	jQuery.getJSON (file_in,function (data_aa)
		{
		data_display_proc (data_aa);
		status_change_monitor (data_aa,array_status);
		});
}

// -----------------------------------------------------------------------
// [4]:
function data_display_proc (data_aa)
{
	var str_out = "";
	str_out += "<table>";
	str_out += "<tr>";
	str_out += "<th>No</th>";
	str_out += "<th>作品ID</th>";
	str_out += "<th>作品名</th>";
	str_out += "<th>仮名遣い種別</th>";
	str_out += "<th>人物ID</th>";
	str_out += "<th>著者名</th>";
	str_out += "<th>翻訳者名等</th>";
	str_out += "<th>入力者名</th>";
	str_out += "<th>校正者名</th>";
	str_out += "<th>状態</th>";
	str_out += "<th>状態の開始日</th>";

	var count = 1;
	for (var key in data_aa)
		{
		var str_record = "<tr>";
		str_record += "<td>" + count + "</td>";
		str_record += "<td>" + key + "</td>";
		str_record += "<td>" + data_aa[key].name_work + "</td>";
		str_record += "<td>" + data_aa[key].moji_chigai + "</td>";
		str_record += "<td>" + data_aa[key].id_author + "</td>";
		str_record += "<td>" + data_aa[key].name_author + "</td>";
		str_record += "<td>" + data_aa[key].name_trans + "</td>";
		str_record += "<td>" + data_aa[key].input + "</td>";
		str_record += "<td>" + data_aa[key].proof + "</td>";
		str_record += "<td>" + data_aa[key].status + "</td>";
		str_record += "<td>" + data_aa[key].date_status + "</td>";
		str_record += "</tr>";

		str_out += str_record.replace (/"/g,'');

		count += 1;
		}

	str_out += "</table>";

	jQuery(".contents").html (str_out);
}

// -----------------------------------------------------------------------
// [6]:
function status_change_monitor (data_aa,array_status)
{
	var count = 0;

	jQuery (".select#status").change (function ()
               	{
		var index_status = jQuery (".select#status").get(0).selectedIndex;

		var value_status = array_status[index_status];
		var str_tmp = "index_status = " + index_status + "<br />";
		str_tmp += "status = " + value_status + "<br />";
		str_tmp += "count = " + count + "<br />";
	jQuery("#outarea_cc").html (str_tmp);

		var data_bb = status_filter_proc (value_status,data_aa);

		data_display_proc (data_bb);

		count += 1;
		});
}

// -----------------------------------------------------------------------
function status_filter_proc (status_in,data_aa)
{
	var data_bb = new Object ();

	var count_check = 0;
	var count_match = 0;

	for (var key in data_aa)
		{
		if (data_aa[key].status == status_in)
			{
			data_bb[key] = data_aa[key];
			count_match += 1;
			}

		count_check += 1;
		}

	var str_tmp = "DD: status_in = " + status_in + "<br />";
	str_tmp += "count_check = " + count_check + "<br />";
	str_tmp += "count_match = " + count_match + "<br />";

	jQuery("#outarea_dd").html (str_tmp);
	return	data_bb;
}

// -----------------------------------------------------------------------
