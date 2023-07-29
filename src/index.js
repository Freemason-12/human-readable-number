module.exports = function toReadable(n) {
    if (n == 0) return 'zero'
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const elev = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    switch (`${n}`.length) {
        case 1: return ones[n]
        case 2:
            const fl = Math.floor(n / 10), rm = n % 10
            return fl == 1 ? elev[rm] : `${tens[fl]}${rm == 0 ? "" : " " + ones[rm]}`
        case 3:
            const d = n % 100
            const dl = Math.floor(d / 10), rn = d % 10
            const t = dl == 1 ? " " + elev[rn] : `${dl == 0 ? "" : " " + tens[dl]}${rn == 0 ? "" : " " + ones[rn]}`
            return `${ones[Math.floor(n / 100)]} hundred${t}`.trim()
    }
}
