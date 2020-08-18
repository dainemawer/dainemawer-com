export const formatDate = timestamp => {
    const date = new Date(timestamp)
    const dateTimeFormat = new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short', year: 'numeric' })
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date)

    return `${day} ${month} ${year}`;
}