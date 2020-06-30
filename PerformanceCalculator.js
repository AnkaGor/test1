class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        throw new Error('Подкласса не существует');
    }

    get volumeCredits() {
        return Math.max(this.preference.audience - 30, 0);
    }
}
export default PerformanceCalculator;
