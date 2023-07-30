import formatDateToCustomFormat from "./formatDateToCustomFormat";

const findDatesInString = (inputString: string): string => {
    console.log(inputString);

    const dateRegex1 = /\b\d{1,2}[\/]\d{1,2}[\/]\d{4}\b/g;
    const dateRegex2 = /\b\d{1,2}[.]\d{1,2}[.]\d{4}\b/g;

    // const dateRegex1 = /\b\d{1,2}[\/.]\d{1,2}[\/.]\d{4}\b/g;
    // const dateRegex2 = /\b\d{4}-\d{1,2}-\d{1,2}\b/g;

    const dates1 = inputString.match(dateRegex1);
    const dates2 = inputString.match(dateRegex2);


    const allDates = ([] as string[]).concat(dates1 || [], dates2 || []);


    if (allDates.length > 0) {
        const newArrDates = allDates.map((item) => {
            return formatDateToCustomFormat(item);
        });
        return newArrDates.join(", ");
    } else {
        return "";
    }
};

export default findDatesInString;

