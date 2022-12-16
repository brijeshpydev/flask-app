const file_recv_send = () => {
	// $.ajax({
	// 	url:location.href+"/file",
	// 	type:"POST",
	// 	enctype:"multipart/form-data",
	// 	data:{"file":query},
	// 	success:(res)=>{
	// 		console.log(res)
	// 	},
	// 	error:(res)=>{
	// 		console.log(res)
	// 	}
	// })

	$(function() {
	    $('.upload').click(function() {
	    	let form = document.querySelector(".files");
	        // var form_data = new FormData(form);
	        console.log(form)
	    //     $.ajax({
	    //         type: 'POST',
	    //         url: location.href+"/file",
	    //         data: form_data,
	    //         contentType: false,
	    //         cache: false,
	    //         processData: false,
	    //         success: function(data) {
	    //             console.log('Success!');
	    //         },
	    //     });
	    });
	});
};

export default file_recv_send;