var stop = window.setInterval(function(){
    $("div").each(function(index,e){
//    console.log('11')    
    console.log(e)
	console.log('click')
    e.click()
})},100)  