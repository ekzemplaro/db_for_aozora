// -----------------------------------------------------------------------
//	gen_table_persons.js
//
//					Jun/21/2015
//
// -----------------------------------------------------------------------
function gen_table_proc (file_in)
{
	jQuery.getJSON (file_in,function (data_aa)
		{
		var str_out = "";
		str_out += "<table>";
		str_out += "<tr>";
		str_out += "<th>人物ID</th>";
		str_out += "<th>姓</th>";
		str_out += "<th>名</th>";
		str_out += "<th>姓読み</th>";
		str_out += "<th>名読み</th>";
		str_out += "<th>姓ローマ字</th>";
		str_out += "<th>名ローマ字</th>";
		for (var key in data_aa)
			{
			str_out += "<tr>";
			str_out += "<td>" + key + "</td>";
			str_out += "<td>" + data_aa[key].sei + "</td>";
			str_out += "<td>" + data_aa[key].mei + "</td>";
			str_out += "<td>" + data_aa[key].sei_yomi + "</td>";
			str_out += "<td>" + data_aa[key].mei_yomi + "</td>";
			str_out += "<td>" + data_aa[key].sei_roma + "</td>";
			str_out += "<td>" + data_aa[key].mei_roma + "</td>";
			str_out += "</tr>";
			}
		str_out += "</table>";

		jQuery(".contents").html (str_out);
		});
}

// -----------------------------------------------------------------------
