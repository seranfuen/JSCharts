window.onload = function () {
    var data = [{ value: 46, valueFormatted: "46 million", name: "Spain" },
	        { value: 80, valueFormatted: "80 million", name: "Germany" },
	        { value: 66, valueFormatted: "66 million", name: "France" },
	        { value: 64, valueFormatted: "64 million", name: "United Kingdom" },
	        { value: 38, valueFormatted: "38 million", name: "Poland" },
	        { value: 17, valueFormatted: "17 million", name: "Netherlands" },
	        { value: 11, valueFormatted: "11 million", name: "Belgium" },
	        { value: 10, valueFormatted: "10 million", name: "Portugal" }].sort(function (x, y) {
	            return -(x.value - y.value);
	        });
    var options = {
        data: data,
        font: 14
    };

    var pie = SERFUEN.pieChart("pieChart", options);
};