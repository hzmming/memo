const memo = document.createElement('div')
memo.style = "width: 300px;height: 300px;background: pink;position: fixed;right: 20px;bottom: 50px;padding: 20px; font-size: 20px;color: hotpink; outline: hotpink;"
memo.contentEditable = true
memo.onmousemove = (evt) => {
  if(evt.buttons > 0){
      const target = evt.target
      const {top, left} = target.getBoundingClientRect()
      // 碰撞检测
      if(top + evt.movementY + target.offsetHeight > window.innerHeight){
          target.style.top = `${window.innerHeight - target.offsetHeight}px`
      }else if(top + event.movementY < 0){
          target.style.top = 0
      }else{
          target.style.top = `${top + evt.movementY}px`	
      }
      if(left + evt.movementX + target.offsetWidth > window.innerWidth){
          target.style.left = `${window.innerWidth - target.offsetWidth}px`
      }else if(left + evt.movementX < 0){
          target.style.left = 0
      }else{
          target.style.left = `${left + evt.movementX}px`
      }
  }
}
document.body.appendChild(memo)
