const Pic = () => {
    const query = $(".query").val();
    const loading_img = () => {
            window.onscroll = function(ev) {
                lazyload();
            };
            function lazyload() {
                let img = document.querySelectorAll(".lazyimg");
                for (let i = 0; i < img.length; i++) {
                    if (viewPort(img[i])) {
                        img[i].setAttribute("src", img[i].getAttribute("data-src"));
                    }
                }
            }

            function viewPort(el) {
                let rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
                );
            }
    }

    const get_pic = (query) => {
        $.ajax({
            url:location.href+'/s',
            type:'GET',
            data:{'query':query},
            success:(res)=>{
                let loading_gif = "./static/media/giphy.gif";
                let pic = JSON.parse(res.res);
                $(".show-data").html(" ");
                let tags = document.querySelector('.tags');
                $(".tags").html(" ");       
                for(let x in pic.hits){
                    let tag = pic.hits[x].tags;
                    let web = pic.hits[x].webformatURL;
                    let user = pic.hits[x].user;
                    let userImageURL = pic.hits[x].userImageURL;
                    if(navigator.userAgent.includes("Android")){
                        if(x <= 4){
                        const tags_pic = document.createElement("b");
                        tags_pic.setAttribute("class",'btn btn-light m-1');
                        tags_pic.innerText = tag;
                        tags.appendChild(tags_pic);
                      }
                    }else{
                        if(x <= 10){
                        const tags_pic = document.createElement("b");
                        tags_pic.setAttribute("class",'btn btn-light m-1');
                        tags_pic.innerText = tag;
                        tags.appendChild(tags_pic);
                    };;
                    };
                    $(".show-data").prepend(`
                        <div class="col text-center mb-2">
                    <div class="shadow p-2 border border-dark rounded">
                        <div class="d-flex  justify-content-around align-items-center">
                            <img src="${userImageURL}"  class="border border-dark p-1 rounded-circle" style="width:50px;height:50px" alt="">
                            <b class="text-dark" style='overflow:hidden;'>${user}</b>
                        </div>
                        <img src="${loading_gif}" data-src='${web}' class="img-fluid p-1 lazyimg" alt="">
                        <div class="d-flex justify-content-around align-items-center">
                                <a href="${web}" target="__blank" class=" bg-success  text-white btn btn-success ">View</a>
                            <button class='btn btn-success download' data-url='${web}'>Download</button>
                        </div>
                    </div>
                </div>
                        `);
                };
        $(".tags .btn").click((e)=>{
            let tag = e.target.innerText;
                get_pic(tag);
                $(".query").val(tag);
        });
        $(".download").click((e)=>{
            let url = e.target.dataset.url;
            fetch(url).then(res=>res.blob()).then(res=>{
                url = URL.createObjectURL(res);
                let a = document.createElement("a");
                a.href = url;
                a.download = `${query}-${Math.floor(Math.random()*100)}`;
                document.body.append(a);
                a.click();
                a.remove();
            });
        });
        loading_img();
            },
            error:(res)=>{
                console.log(res);
            }
        });
    };
    get_pic(query);
};

export default Pic;