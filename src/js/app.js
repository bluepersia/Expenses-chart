
let data;

fetchDataAndRender ();

async function fetchDataAndRender () 
{
    const res = await fetch ('./data.json');

    if (!res.ok)
        throw new Error ((await res.json()).message | res.statusText);

    data = await res.json ();

    this.renderChart (data);
}

function renderChart (data) 
{
    document.querySelector ('.cmp__chart').innerHTML = data.map (item => `
        <div class='cmp__chart__item'>
            <div class='cmp__chart__inner ${item.day === 'wed' && 'cmp__chart__inner--active'}' style="height:${item.amount * 3}px">
            </div>
            <p class='cmp__chart__day'>${item.day}</p>
            <h3 class='cmp__chart__label'>$${item.amount}</h3>
        </div>
        ` ).join ('');
}