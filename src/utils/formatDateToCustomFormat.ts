const formatDateToCustomFormat = (date: string): string => {
    const dateParts: RegExpMatchArray | null = date.match(/\d+/g);
    if (dateParts && dateParts.length === 3) {
        const day: string = dateParts[0].padStart(2, '0');
        const month: string = dateParts[1].padStart(2, '0');
        const year: string = dateParts[2];
        return `${day}/${month}/${year}`;
    }

    return '';
};

export default formatDateToCustomFormat;