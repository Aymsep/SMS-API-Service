const myHeaders = new Headers();
myHeaders.append("Authorization", `App ${process.env.KEY}`);
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");


exports.GetInformation = async(from,text)=>{
    const raw = JSON.stringify({
        "messages": [
            {
                "destinations": [{"to":process.env.NUMBER_DESTINATION}],
                "from": from,
                "text": text
            }
        ]
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    const response = await fetch("https://z15pq6.api.infobip.com/sms/2/text/advanced", requestOptions)
    const result = await response.json();
    return result;

}


