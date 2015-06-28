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
		str_out += "<th>No</th>";
		str_out += "<th>作品ID</th>";
		str_out += "<th>作品名</th>";
		str_out += "<th>仮名遣い種別</th>";
		str_out += "<th>人物ID</th>";
		str_out += "<th>姓</th>";
		str_out += "<th>名</th>";
		str_out += "<th>役割</th>";
		str_out += "<th>入力者名</th>";
		str_out += "<th>校正者名</th>";
		str_out += "<th>公開日</th>";
		str_out += "<th>最終更新日</th>";

		var count = 1;
		for (var key in data_aa)
			{
			str_out += "<tr>";
			str_out += "<td>" + count + "</td>";
			str_out += "<td>" + key + "</td>";
			str_out += "<td>" + data_aa[key].name_work + "</td>";
			str_out += "<td>" + data_aa[key].moji_chigai + "</td>";
			str_out += "<td>" + data_aa[key].id_author + "</td>";
			str_out += "<td>" + data_aa[key].sei + "</td>";
			str_out += "<td>" + data_aa[key].mei + "</td>";
			str_out += "<td>" + data_aa[key].yakuwari + "</td>";
			str_out += "<td>" + data_aa[key].input + "</td>";
			str_out += "<td>" + data_aa[key].proof + "</td>";
			str_out += "<td>" + data_aa[key].koukai + "</td>";
			str_out += "<td>" + data_aa[key].koushin + "</td>";
			str_out += "</tr>";

			count += 1;
			}
		str_out += "</table>";

		jQuery(".contents").html (str_out);
		});
}

// -----------------------------------------------------------------------
