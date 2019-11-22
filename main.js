setTimeout(() => {
    const items = document.querySelectorAll('.item');
    const previous_item = document.getElementById('previous');
    const next_item = document.getElementById('next');
    const desc = document.querySelector('.desc');
    let current_item = 1;
    let clicked = false;
    
    desc.innerText = `${current_item} of ${items.length}`;
    
    prevAnim = () => {
        if(!clicked) {
            clicked = true;
            setTimeout(() => {
                items.forEach(element => {
                    element.classList.remove('active');
                    element.classList.remove('slide_left');
                    element.classList.remove('slide_next_left');
                })
            }, 1000);
            let current = document.getElementById(current_item);
            current.classList.add('slide_left');
            if(current_item != 1) {
                current_item--;
                current = document.getElementById(current_item);
                setTimeout(() => {
                    current.classList.add('active');
                    current.classList.add('slide_next_left');
                }, 1000);
            } else {
                current.classList.add('slide_left');
                current_item = items.length;
                current = document.getElementById(current_item);
                setTimeout(() => {
                    current.classList.add('active');
                    current.classList.add('slide_next_left');
                }, 1000);
            }
            setTimeout(() => {
                current.classList.remove('slide_next_left');
                clicked = false;
            }, 2000);
            setTimeout(() => {
                desc.innerText = `${current_item} of ${items.length}`;
            }, 1000);
        }
    }
    
    // -----------------------------------------------------------------
    
    nextAnim = () => {
        if(!clicked) {
            clicked = true;
            setTimeout(() => {
                items.forEach(element => {
                    element.classList.remove('active');
                    element.classList.remove('slide_right');
                    element.classList.remove('slide_next_right');
                })
            }, 1000);
            let current = document.getElementById(current_item);
        
            if(current_item != items.length) {
                current.classList.add('slide_right');
                setTimeout(() => {
                    current.classList.remove('slide_right');
                }, 1000);
                current_item++;
                current = document.getElementById(current_item);
                setTimeout(() => {
                    current.classList.add('active');
                    current.classList.add('slide_next_right');    
                }, 1000);
            } else {
                current.classList.add('slide_right');
                setTimeout(() => {
                    current.classList.remove('slide_right');
                }, 1000);
                current_item = 1;
                current = document.getElementById(current_item);
                setTimeout(() => {
                    current.classList.add('active');
                    current.classList.add('slide_next_right');
                }, 1000);
            }
            setTimeout(() => {
                current.classList.remove('slide_next_right');
                clicked = false;
            }, 2000);
            setTimeout(() => {
                desc.innerText = `${current_item} of ${items.length}`;
            }, 1000);
        }
    }
    
    window.onload = (setInterval(() => {
        nextAnim();
    }, 6000))
    
    previous_item.addEventListener('click', prevAnim);
    next_item.addEventListener('click', nextAnim);
}, 100);