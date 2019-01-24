const btn=document.querySelector('#btn')
const path=require('path')
const BrowserWindow=require('electron').remote.BrowserWindow

btn.onclick= ()=>{
    win=new BrowserWindow({
        width:300,
        height:200,
        frame:false,
        fullscreen:true,
        transparent:true
    })

    win.loadURL(path.join('file',__dirname,'new.html'))
    win.on('close',()=>{
        win=null
    })
}