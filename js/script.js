window.onload = () =>{
    const imgURL="https://www.vecteezy.com/vector-art/2707848-red-arcade-buttons-vector-sample-design://www.https://www.vecteezy.com/vector-art/6091020-sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-vector-illustration.com/svg/401105/anguished-face"
    const root = document.getElementById("root")
    const times= +prompt("enter a numeric Value")
    for (let i=0;i<times;i++)
    {
        const img=document.createElement("img")
        img.setAttribute("class","image")
        img.setAttribute("src",imgURL);
        img.setAttribute("alt","Demo Image")
        root.appendChild(img)
    }
}
