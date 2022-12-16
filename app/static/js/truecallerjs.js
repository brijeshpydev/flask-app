const truecallerjs = (phone)=>{
	$.ajax({
		url:location.origin+"/ultron/phone",
		type:'GET',
		data:{'phone':phone},
		success:(res)=>{
			$(".data").html(res.data)
			document.querySelector('.truecallerjs-btn').disabled=false;
			document.querySelector('.phone').readOnly=false;
			if(res.data.includes("null")){
				$(".data").addClass('pigment')
			}else {
				$(".data").addClass('energos')
			}
		},
		error:(res)=>{
				$(".data").addClass('pigment')
				$(".data").html(res.data)
				document.querySelector('.truecallerjs-btn').disabled=false;
				document.querySelector('.phone').readOnly=false;
		}
	})
}

export default truecallerjs;