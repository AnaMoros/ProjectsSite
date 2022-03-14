document.querySelectorAll('.btn-services')
        .forEach(btn => btn.addEventListener( 'click', addService));

document.getElementById('btn-reset').addEventListener('click', () => {
    servicesSelected.clear();
    updateTable();
})

const invoiceTable = document.getElementById('table_invoice');
const notes = document.getElementById('invoice-notes');

const servicesSelected = new Set();
const services = {
    'Wash Car': 10,
    'Mow Lawn': 20,
    'Pull Weeds': 30,
}

const total = document.getElementById('invoice-total');
const updateTotal = () => {
    let totalSum = 0;
    servicesSelected.forEach(service => totalSum += services[service]);
    total.textContent = totalSum;
    notes.textContent = totalSum > 0 ? 'We accept cash, credit card, or PayPal' : ''
}

const invoiceHeader_Template = `<tr class="row">
        <th class="invoice-titles col-1">Task</th>
        <th class="invoice-titles col-2">Total</th>
    </tr>`;

const invoiceRow_Template = (service, price) => `<tr class="row">
            <td class="invoice-services col-1">${service} <button class="btn-remove invoice-remove" value="${service}">remove</button></td>
            <td class="invoice-cost col-2"><span class="currency">£</span>${price}</td>
        </tr>`;

invoiceTable.innerHTML = invoiceHeader_Template;

function updateTable() {
    invoiceTable.innerHTML = invoiceHeader_Template + update_invoiceRows();
    updateTotal();
    document.querySelectorAll('.invoice-remove')
        .forEach(btn => btn.addEventListener( 'click', removeService));
}

function addService(btn) {
    servicesSelected.add(btn.target.value);
    updateTable();
}

function removeService(btn) {
    servicesSelected.delete(btn.target.value);
    updateTable();
}

function update_invoiceRows() {
    let newTable = '';
    servicesSelected.forEach( service => newTable += invoiceRow_Template(service, services[service]));
    return newTable;
}
