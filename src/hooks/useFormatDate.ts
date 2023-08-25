
export const useFormatDate = (date: Date) => {
	const newDate = new Intl.DateTimeFormat('en-Gb', { dateStyle: 'medium' }).format(date)
	return [newDate]
}
