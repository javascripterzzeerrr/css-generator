const rtl = document.getElementById('rtl');
const ttl = document.getElementById('ttl');

const rtr = document.getElementById('rtr');
const ttr = document.getElementById('ttr');

const rbr = document.getElementById('rbr');
const tbr = document.getElementById('tbr');

const rbl = document.getElementById('rbl');
const tbl = document.getElementById('tbl');

const inputs = document.querySelector('.block');
const block = document.getElementById('block');

inputs.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'INPUT') {
        console.log(event.target.value);
        event.target.value = '';
    }
});

// Top Left
rtl.addEventListener('input', () => {
    block.style.borderTopLeftRadius = rtl.value + 'px';
    ttl.value = rtl.value;
});

ttl.addEventListener('input', () => {
    block.style.borderTopLeftRadius = ttl.value + 'px';
});

// Top Right
rtr.addEventListener('input', () => {
    block.style.borderTopRightRadius = rtr.value + 'px';
    ttr.value = rtr.value;
});

ttr.addEventListener('input', () => {
    block.style.borderTopRightRadius = ttr.value + 'px';
});

// Bottom Right
rbr.addEventListener('input', () => {
    block.style.borderBottomRightRadius = rbr.value + 'px';
    tbr.value = rbr.value;
});

tbr.addEventListener('input', () => {
    block.style.borderBottomRightRadius = tbr.value + 'px';
});

// Bottom Left
rbl.addEventListener('input', () => {
    block.style.borderBottomLeftRadius = rbl.value + 'px';
    tbl.value = rbl.value;
});

tbl.addEventListener('input', () => {
    block.style.borderBottomLeftRadius = tbl.value + 'px';
});