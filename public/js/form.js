$(document).ready (() => {
	$("#submit").click(() => {
		var fname = String($("#firstName").val()).toLowerCase().trim().replace(' ', '');
		var lname = String($("#lastName").val()).toLowerCase().trim().replace(' ', '');

		if (!fname || !lname) {
			$(".error").toggleClass("hidden")
			setTimeout(() => {
				$(".error").toggleClass("hidden");
			}, 5000)
		} else {
			var cname = fname + lname;
			var final = "";
			for (var i = 0; i< Math.min(9, cname.length); i++) {
				if (i % 2 === 1) {
					final += String(cname.charCodeAt(i) % 10);
				} else {
					final += String.fromCharCode(cname.charCodeAt(i) + 1).toUpperCase();
				}
			}
			
			$("#generated").text(final);
		}

	})
})
