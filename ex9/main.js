$(function(){
	$("#creat").click(function(){
		if($("#c1").is(":checked") && $("#c2").is(":checked") && $("#c3").is(":checked")){
			$("#ul").append("<li class='black'> black </li>")
		}
		else if($("#c1").is(":checked") && $("#c2").is(":checked") || $("#c2").is(":checked") && $("#c3").is(":checked") || $("#c1").is(":checked") && $("#c3").is(":checked")){
			$("#ul").append("<li class='purple'> purple = blue + red </li><li class='green'> green = blue + yellow </li><li class='orange'> orange = red + yellow</li>")

		}
		else if($("#c1").is(":checked") || $("#c2").is(":checked") || $("#c3").is(":checked")){
			$("#ul").append("<li class='red'> red </li>")
		}

	})

	$("#remove").click(function(){
			if($("#c1").is(":checked") && $("#c2").is(":checked") && $("#c3").is(":checked")){
			$(".black").remove()
		}
		else if($("#c1").is(":checked") && $("#c2").is(":checked") || $("#c2").is(":checked") && $("#c3").is(":checked") || $("#c1").is(":checked") && $("#c3").is(":checked")){
			$(".purple").remove()
			$(".green").remove()
			$(".orange").remove()
		}
		else if($("#c1").is(":checked") || $("#c2").is(":checked") || $("#c3").is(":checked")){
			$(".red").remove()
		}
	})




})
