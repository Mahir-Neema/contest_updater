let api = "https://kontests.net/api/v1/all";

let response = fetch(api);
response.then((k)=>{
    return k.json();
}).then((contests)=>{
    text="";
    console.log(contests);
    for(item in contests){

        if(contests[item].name[0]=="A") {Ilink="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1674812036~exp=1674812636~hmac=3487d888c01d9f41c60c630b85526716aec138e886f193ae9d64a19866aba3ec";}
        else if(contests[item].name[0]=="B") {Ilink="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?w=740&t=st=1674813780~exp=1674814380~hmac=0f13cb4fb8193eeed301a495878de4af3dc8fd1dc1e7c35daca487132e0bc065";}
        else if(contests[item].name[0]=="C") {Ilink="https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-7681.jpg?w=740&t=st=1674814231~exp=1674814831~hmac=da4cb0fcf6723f4138e430b7e0702f616393f0fb62387095a2d0250ceb44a9d3";}
        else if(contests[item].name[0]=="P") {Ilink="https://img.freepik.com/free-vector/flat-design-web-developers_23-2148817994.jpg?w=740&t=st=1674813853~exp=1674814453~hmac=8539e8ebebf66d7ccbbae64053ce957b594149297dfdbd6e91bfa9cef34c9f8f";}
        else if(contests[item].name[0]=="T" || contests[item].name[0]=="I" || contests[item].name[0]=="J") {Ilink="https://img.freepik.com/free-vector/professional-programmer-engineer-writing-code_3446-693.jpg?w=740&t=st=1674813905~exp=1674814505~hmac=99bd17d1bcc7c80c9ef44aab342a830efed9097458a51495d06c67295344b3ba";}
        else if(contests[item].name[0]=="W") {Ilink="https://img.freepik.com/free-vector/programmer-doing-his-job-flat-design_52683-14150.jpg?w=740&t=st=1674814069~exp=1674814669~hmac=53e18283ecf9d2b1fe579103fbbc5ca1fabe05bc7cfc4d1cfe818c4b14b66a7a";}
        else {Ilink="https://img.freepik.com/free-vector/young-programmer-working-laptop-computer-cartoon-character_24797-2123.jpg?w=740&t=st=1674814061~exp=1674814661~hmac=2d2fd25f9077457b29fa9cc4406e20da4794eaf0f6105fe3f6e2f012c5c934fc"};

        text+=`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${Ilink}  alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text">In 24 hours   <b> ${contests[item].in_24_hours} </b></p>
            <p class="card-text">Starts at: ${contests[item].start_time.slice(11, 16)+"  "+contests[item].start_time.slice(0, 10)}</p>
            <p class="card-text">Ends at: ${contests[item].end_time.slice(11, 16)+"  "+ contests[item].end_time.slice(0, 10)}</p>
            <a href="${contests[item].url}" class="btn btn-primary" target="_blank" >Visit Here</a>
            </div>
        </div>
        `;
    }
    containerCard.innerHTML = text
})
