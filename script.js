window.addEventListener("load", () => {
    var para=document.querySelector('p');
    var url='https://meowfacts.herokuapp.com/?lang=eng';
    fetch(url).then((res)=>{
        return res.json();
    }).then(res=>{
        var meaning=res.data[0];
        para.innerText=meaning;
    })
})