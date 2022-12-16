const system_info = ()=>{
	let n = navigator;
	let dict = {
		"appCodeName":n.appCodeName,
		"appVersion":n.appVersion,
		"cookieEnabled":n.cookieEnabled,
		"deviceMemory":n.deviceMemory,
		"language":n.language,
		"platform":n.platform,
		"userAgent":n.userAgent,
		"downlink":n.connection.downlink,
		"effectiveType":n.connection.effectiveType,
		"hardwareconcurrency":n.hardwareConcurrency,
	}
	if(n.geolocation){
		n.geolocation.getCurrentPosition(showPosition)
	}
	function showPosition(e){
		dict.accuracy = e.coords.accuracy
		dict.latitude = e.coords.latitude
		dict.longitude = e.coords.longitude
	}
	n.getBattery(e=>e).then(e=>{
	dict.battery =(e.level*100)+"%";
	})

	setTimeout(()=>{
		for(let x in dict){
			$('.data').append(`
				<div class='d-flex my-2 justify-content-between '>
					<h5><b class='text-capitalize mx-2 pigment'>${x}</b></h5>
					<h5 class='sea'>${dict[x]}</h5>
				</div>
				`)
		}
	},1000)
}

export default system_info;