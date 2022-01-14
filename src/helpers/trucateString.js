export const truncateString = (input) => {
    if (input.length > 15)
        return input.substring(0,15) + '...';
    else
        return input;
}