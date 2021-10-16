export const createID = () => {
    let id = "";
    for (let i = 0; i < 4; i++) {
        id += Math.floor(Math.random() * 10);
    }
    id += '-';
    for (let i = 0; i < 6; i++) {
        id += Math.floor(Math.random() * 10);
    }
    id += '-';
    for (let i = 0; i < 8; i++) {
        id += Math.floor(Math.random() * 10);
    }
    id += '-';
    for (let i = 0; i < 4; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

export const getCurrentDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toUTCString();
}