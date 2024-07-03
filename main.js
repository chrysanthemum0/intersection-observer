

let observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1; // 불투명도를 1로 설정
        } else {
            entry.target.style.opacity = 0;
        }
    })
})

let div = document.querySelectorAll('div')

//특정 html요소 감시해주는 함수 
observe.observe(div[0])
observe.observe(div[1])
observe.observe(div[2])
observe.observe(div[3])
observe.observe(div[4])