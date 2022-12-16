const Exif = () => {
	let select = document.querySelector(".exif");
	let files = document.querySelector(".files");
	let path = document.querySelector(".path");
	select.addEventListener("change",()=>{
		let val = select.value;
		if(val=='file'){
			$(".path").hide()
			$(".files").show()
		}else{
			$(".files").hide()
			$(".path").show()
		}
	})
	$("form input.form-control").hide()
	$(".files").show()
	
}

export default Exif;