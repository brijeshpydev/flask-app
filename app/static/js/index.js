import Password from "./password.js";
import system_info from "./system.js";
import Exif from "./exif.js";
import file_recv_send from "./file.js";
import Pic from "./pic.js";
import truecallerjs from "./truecallerjs.js";

jQuery(document).ready(()=>{
	if(location.href.includes('corvus')){
		Password()
	}else if(location.href.includes("whiplash")){
		system_info()
	}
	else if(location.href.includes('ghost')){
		$('.form').submit((e)=>{
			e.preventDefault()
		})
		Pic()
		$(".search").click(()=>{
			Pic()
		})
	}else if(location.href.includes('exif')){
		Exif()
	}
	// else if (location.href.includes("male"))  {
	// 	$('form').submit((e)=>{
	// 		e.preventDefault()
	// 	})
	// 	$(".upload").click(()=>{
	// 		let file = $(".file").val()
	// 		console.log()
	// 		file_recv_send()
	// 	})
	// }
	$(".truecallerjs-btn").click(()=>{
		const phone = $(".phone").val();
		if(phone.length>=10){
			$(".data").html("")
			truecallerjs(phone);
			document.querySelector('.truecallerjs-btn').disabled=true;
			document.querySelector('.phone').readOnly=true;
		}
	})

})
