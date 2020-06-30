export default function createStatementData(invoice, plays) {
    const result = {};
    result.customer = invoice.customer;
    result.performances = invoice.performance.map(enrichPerfomance);
    result.totalAmount = totalAmount(result);
    result.totalVolumeCredits = totalVolumeCredits(result);
    return result;

    function enrichPerfomance(aPerformance) {
        const calculator = createPerformanceCalculator(
            aPerformance,
            playFor(aPerformance)
        );
        console.log(calculator);
        const result = Object.assign({}, aPerformance);
        result.play = calculator.play;
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;

        return result;
    }

    function playFor(aPerformance) {
        if (plays.includes(aPerformance.playId)) return aPerformance;
    }

    function totalAmount(data) {
        return data.performances.reduce((total, p) => total + p.amount, 0);
    }

    function totalVolumeCredits(data) {
        return data.performances.reduce(
            (total, p) => total + p.volumeCredits,
            0
        );
    }

    function createPerformanceCalculator(aPerformance, aPlay) {
        switch (aPlay.type) {
            case 'tragedy':
                return new TragedyCalculator(aPerformance, aPlay);
            case 'comedy':
                return new ComedyCalculator(aPerformance, aPlay);
                defaul: throw new Error('неизвестный тип: ${aPlay.type}');
        }
    }
}
