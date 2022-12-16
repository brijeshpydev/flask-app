const Password = ()=>{
	const range = document.querySelector(".form-control-range");
	const pass = document.querySelector("#pass");
	const generate = document.querySelector(".generate");
	document.querySelector(".input-group-text").value=range.value;
	range.addEventListener('change',()=>{
		document.querySelector(".input-group-text").value=range.value;
	})
	let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let LowerCase = "abcdefghijklmnopqrstuvwxyz"
	let digit = "1234567890"
	let symbols = `@$&+_-=|%`
	let alpha = ""
	let store = ''
	const createPass = (length, check)=>{
		check.forEach((ele,key)=>{
			if(ele.value=="upper"){
				alpha += UpperCase;
			}
			if(ele.value=="lower"){
				alpha += LowerCase;
			}
			if(ele.value=="digit"){
				alpha += digit;
			}
			if(ele.value=="symbols"){
				alpha += symbols;
			}
		})
		for(let x=0;x<=(parseInt(length.value));x++){
				let temppass = Math.floor(Math.random()*alpha.length+1);
				store += alpha.charAt(temppass)
		}
		pass.value=store;
		store = " "
		alpha = ""
	}
	pass.addEventListener("click",()=>{
		pass.select()
		navigator.clipboard.writeText(pass.value)
	})
	generate.addEventListener("click",()=>{
		creat()
	})
	function creat(){
		let length = document.querySelector(".length");
		let check = document.querySelectorAll("input[type=checkbox]:checked");
		createPass(length, check)
	}
	creat()

	document.querySelector(".save").addEventListener("click",()=>{
		let pass = $("#pass").val();
		let msg = $("#msg").val();
		$.ajax({
			url:location.origin+"/corvus/save",
			type:'GET',
			data:{'pass':pass,'msg':msg},
			success:(res)=>{
			console.log(new Array(res.res))
			}
		})
	})

}
export default Password;