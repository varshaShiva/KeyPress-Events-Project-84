canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_img="Alphabet.png";
numberImg="Number.png";
ArrowImg="Arrow.png";
specialImg="Special.png";
symbolImg="Symbol.png";

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log("keyPressed");

    if ((keyPressed>=97 && keyPressed<=122)||(keyPressed>=65 && keyPressed<=90))
    {
        alphabetkey();
        console.log("Alphabet Key");
    }

    if ((keyPressed>=48 && keyPressed<=57))
    {
        numberkey();
        console.log("Number Key");
    }

    if ((keyPressed>=37 && keyPressed<=40))
    {
        arrowkey();
        console.log("Arrow Key");
    }

    if ((keyPressed==17 || keyPressed==18 || keyPressed==27))
    {
        specialkey();
        console.log("Special Key");
    }
    
    if ((keyPressed==8 || keyPressed==13 || keyPressed==16))
    {
        Symbolkey();
        console.log("Symbol Key");
    }
}
function Symbolkey()
{
    img_image="Symbol.png";
    addSymbol();
}
function specialkey()
{
    img_image="Special.png";
    addSpecial();
}
function arrowkey()
{
    img_image="Arrow.png";
    addArrow();
}
function numberkey()
{
    img_image="Number.png";
    addNumber();
}
function alphabetkey()
{
    img_image="Alpabet.png";
    add();
}
function upload_bg()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function addSymbol(){
    background_imgtag= new Image();
    background_imgtag.onload=upload_bg;
    background_imgtag.src=symbolImg;
}
function addSpecial(){
    background_imgtag= new Image();
    background_imgtag.onload=upload_bg;
    background_imgtag.src=specialImg;
}
function add(){
    background_imgtag= new Image();
    background_imgtag.onload=upload_bg;
    background_imgtag.src=background_img;
}
function addNumber(){
    background_imgtag= new Image();
    background_imgtag.onload=upload_bg;
    background_imgtag.src=numberImg;
}
function addArrow(){
    background_imgtag= new Image();
    background_imgtag.onload=upload_bg;
    background_imgtag.src=ArrowImg;
}