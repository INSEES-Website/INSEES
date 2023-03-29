const container = document.getElementById('container');
const cursor = document.getElementById('cursor');
var wid = parseFloat(getComputedStyle(container).width);
var hei = parseFloat(getComputedStyle(container).height);

var size = (wid * hei) / 2500;

function randomm(min, max) {
    return min + Math.random() * (max - min)
}

for (let i = 0; i < size; i++) {
    let star = document.createElement('div');

    let o_size = randomm(.1, 4);
    let o_co = `rgba(255,255,255,${randomm(.02,.8)})`;

    star.style.position = 'relative';
    star.style.top = randomm(0, 100 - (size / 6)) + "%";
    star.style.left = randomm(0, 100) + "%";
    star.style.width = o_size + 'px';
    star.style.height = o_size + 'px';
    star.style.borderRadius = '50%';
    star.style.backgroundColor = o_co;
    star.classList.add('a_star')
    star.style.boxShadow = `0 0 ${8+ o_size}px ` + o_co;
    star.animate(
        [
            { opacity: 0.3 },
            { opacity: 1 }
        ], {
            duration: randomm(1000, 3000),
            easing: 'linear',
            iterations: Infinity,
            direction: 'alternate'
        })
    container.appendChild(star);
}

document.body.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.pageX - 100) + 'px';
    cursor.style.top = (e.pageY - 100) + 'px';
})