const blocks = prompt("Size: ");

console.log(blocks);

const container = document.querySelector('.container');

var size = Math.sqrt(blocks);
console.log(size);
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < blocks; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}

document.querySelectorAll('.container div').forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = 'red';
        e.style.margin = '1px';
    })
})