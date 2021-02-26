$(function () {
	$(".item").click(function () {
		this.animate(
			{
				top: "+=10px",
			},
			5000
		)
	})
})
