const dec2bin = nbr => {
    if (nbr < 0) {
        nbr = 0xFFFFFFFF + nbr + 1
    }
    return parseInt(nbr, 10).toString(2)
};

export default dec2bin