const select = (query) => {
    return document.querySelector(query);
}

const random = (min = 1, max = 0) => {
    const x = Math.random() * Math.abs(max - min);
    return max != 0 ? min + x : min - x;
}

const randomChar = () => {
    let code = Math.floor(random(64, 122));
    if (code === 64) code = 32;
    return String.fromCharCode(code);
}