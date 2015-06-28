// -----------------------------------------------------------------------
//	gen_table.js
//
//					Jun/19/2015
//
// -----------------------------------------------------------------------
function gen_table_proc (file_in)
{
	jQuery.getJSON (file_in,function (data_aa)
		{
		var str_out = "";
		str_out += "<table>";
		for (var key in data_aa)
			{
			str_out += "<tr>";
			str_out += "<td>" + key + "</td>";
			str_out += "<td>" + data_aa[key] + "</td>";
			str_out += "</tr>";
			}
		str_out += "</table>";

		jQuery(".contents").html (str_out);
		});
}

// -----------------------------------------------------------------------
