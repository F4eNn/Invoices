export const useDate = () => {
    const date = new Date()
    const formatDate = new Intl.DateTimeFormat('en-Us', {timeStyle: 'short', dateStyle:'short'}).format(date)
    return formatDate
}