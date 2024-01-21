let accordions = document.querySelectorAll(".accordeon")
accordions.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.toggle('open')
    })
})