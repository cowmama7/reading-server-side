const showCrafts = async () => {
    let craftJSON = await getJSON();
    if(craftJSON==null) return;

    let craftDiv = document.getElementById("craft-list");

    for(let i = 0; i < craftJSON.length;i++) {
        console.log(i%4);
        let columnDiv = document.getElementById("clm"+(i%4));
        let section = document.createElement("section");
        columnDiv.append(section);
        let title=craftJSON[i].name;
        section.className="craftImg"
        section.id=i;
        let craftImg=document.createElement("img")
        section.append(craftImg);
        craftImg.src= "./images/"+craftJSON[i].image;
    }
    

    let imgClick = document.getElementsByClassName("craftImg");
    console.log(imgClick);
    console.log(imgClick.length);
    for (const element of imgClick) {
        element.addEventListener("click", e => {
            document.getElementById('id01').style.display = 'block'
            let f = element.id;
            document.getElementById("title").textContent = craftJSON[f].name;
            document.getElementById("description").textContent=craftJSON[f].description;
            document.getElementById("popupImage").src="./images/"+craftJSON[f].image;
            listDiv.innerHTML="";
            for(let i = 0; i < craftJSON[f].supplies.length; i++) {
                let k = document.createElement("li")
                k.textContent=craftJSON[f].supplies[i];
                document.getElementById("listDiv").appendChild(k);
            }
        })
    }
}

const getJSON = async () => {
    try {
        let response = await fetch("https://portiaportia.github.io/json/crafts.json");
        return await response.json();
    } catch (error) {
        console.log("error retrieving JSON");
        return null;
    }
    return craftJSON;
};

window.onload = () => {
    showCrafts();
}