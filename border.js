const rtl = document.getElementById('rtl');
const ttl = document.getElementById('ttl');

const rtr = document.getElementById('rtr');
const ttr = document.getElementById('ttr');

const rbr = document.getElementById('rbr');
const tbr = document.getElementById('tbr');

const rbl = document.getElementById('rbl');
const tbl = document.getElementById('tbl');

const block = document.getElementById('block');

rtl.addEventListener('input', () => {
    block.style.borderTopLeftRadius = rtl.value + 'px';
    ttl.value = rtl.value;
});

rtr.addEventListener('input', () => {
    block.style.borderTopRightRadius = rtr.value + 'px';
    ttr.value = rtr.value;
});

rbr.addEventListener('input', () => {
    block.style.borderBottomRightRadius = rbr.value + 'px';
    tbr.value = rbr.value;
});

rbl.addEventListener('input', () => {
    block.style.borderBottomLeftRadius = rbl.value + 'px';
    tbl.value = rbl.value;
});