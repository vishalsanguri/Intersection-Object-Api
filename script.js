const box=document.getElementsByClassName("box")
const box1=document.getElementsByClassName("box1")
const scroll=document.getElementsByClassName("scroll")
const callback=function callbackfunction(entries){
    console.log(entries[0])
}

const observer=new IntersectionObserver(callback,{
    threshold:[0.5]
})
observer.observe(box[0])
const observer1=new IntersectionObserver(callback,{
    threshold:[0.5],
    
    root: scroll[0]
})
observer1.observe(box1[0])