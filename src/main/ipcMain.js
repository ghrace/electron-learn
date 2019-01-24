const { ipcMain } = require('electron')
//主进程接收消息
ipcMain.on('sendMsg', (e, data) => {
  console.log(data)
  console.log(e)
  e.sender.send('sendBack', 'callback')
})
