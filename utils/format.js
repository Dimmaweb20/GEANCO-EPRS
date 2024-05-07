import moment from "moment";

export const formatNum = (value) => {
    return Intl.NumberFormat().format(value);
}

export const dateTimeFormat = (value) => {
    return moment(value).format("MMMM Do, YYYY, h:mm:ss")
}

export const dateFormat = (value) => {
    return moment(value).format("MMMM Do, YYYY")
}