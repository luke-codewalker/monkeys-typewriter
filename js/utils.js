const select = (query) => {
    return document.querySelector(query);
}

const random = (min = 1, max = 0) => {
    const x = Math.random() * Math.abs(max - min);
    return max != 0 ? min + x : min - x;
}

const randomChar = () => {
    let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ü', 'ö', 'ä', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'ß', '!', '?', '.', ',', ';', ':', '-', '_', '"', '&', '/', '(', ')', '[', ']', '{', '}', ' ']
    return chars[Math.floor(random(chars.length))];
}