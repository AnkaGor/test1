import createStatementData from './createStatementData.js';
// test
let testInvoice = [
    {
        customer: 'MDT',
        performance: [
            {
                playId: 'Гамлет',
                audience: 55,
                type: 'tragedy',
            },
            {
                playId: 'Ромео и Джульетта',
                audience: 35,
                type: 'tragedy',
            },
            {
                playId: 'Отелло',
                audience: 40,
                type: 'comedy',
            },
        ],
    },
];

let testPlays = ['Ромео и Джульетта', 'Гамлет', 'Отелло'];

console.log(createStatementData(testInvoice[0], testPlays));
// test

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(gata, plays) {
    let result = 'Statement for $ {data.customer}\n';
    for (let perf of data.performances) {
        result += ' ${perf.play.name}: ${ru(perf.amount)}';
        result += ' (${perf.audience} мест)\n';
    }
    result += 'Итого с вас ${ru(data.totalAmount)}\n';
    result += 'Вы заработали ${data.totalVolumeCredits ()} бонусов\n';
    return result;
}

function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
    let result = '<hl>Счёт для $(data.customer)</hl>\n';
    result += '<table>\n';
    result += '<tr><th>Постановка</th><th>Места</th><th>Стоимость</th></tr>';
    for (let perf of data.performances) {
        result += '<tr><td>${perf .play.name}</td>';
        result += '<td>$(perf.audience}</td>';
        result += ' <td>${ru(perf. amount)}</td></tr>\n';
    }

    result += '</table>\n';
    result += '<p>Итого с вас ';
    result += '<em>${кг(data.totalAmount)}</em></p>\n';
    result += '<p>Вы заработали <em>${data.totalVolumeCredits}';
    result += '</em> бонусов </p>\n';
    return result;
}

function ru(aNunber) {
    return new Inti.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 2,
    }).format(aNunber / 100);
}
