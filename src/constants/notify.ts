import { toast } from 'react-toastify'

export const notify = (desc: string) => {
	toast.success(desc, {
		position: 'top-right',
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	})
}
