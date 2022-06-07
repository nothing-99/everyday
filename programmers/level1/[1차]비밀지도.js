function solution(n, arr1, arr2) {
    const arr = arr1.map((num, index) => {
        let binary = (num | arr2[index]).toString(2);

        while (binary.length < n) {
            binary = '0' + binary;
        }

        return binary;
    });

    return arr.reduce((ret, binary) => {
        ret.push(Array.from(binary).reduce((str, zeroOrOne) => {
            if (zeroOrOne === '0') {
                str += ' ';
            } else {
                str += '#';
            }
            return str;
        }, ''));

        return ret;
    }, []);
}