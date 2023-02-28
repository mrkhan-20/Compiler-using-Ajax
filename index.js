let btn=document.getElementById("btn");
let code=document.getElementById("code");

let langcode=[{
    "C++":77
},
{
    "JavaScript":4
},
{
    "Python":"0"
},
{
    "Java":8
},
{
    "C":7
},];


btn.addEventListener("click", ()=>{
    let lang=document.getElementById("lang").selectedIndex;
    let val=document.getElementsByTagName("option")[lang].value;
    
    let data={
        "code":code.value,
        "langId":findcode(val)
    };
    postreq(data);

})

function findcode(val) {
    for (let i = 0; i < langcode.length; i++) {
        if(langcode[i][val]){
            return langcode[i][val];
        }
    }
}
function postreq(data) {
    let req=new XMLHttpRequest();
    req.open("POST"," https://codequotient.com/api/executeCode");
    req.send(data);
    console.log(req.responseText);
}
