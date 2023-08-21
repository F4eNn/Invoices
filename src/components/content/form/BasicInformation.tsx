import React from 'react'
import { Control, FieldErrors } from 'react-hook-form'

import { InvoiceFormValues } from './InvoiceForm'
import { ControlInput } from './ControlInput'

interface BasicInformationProps {
	control: Control<InvoiceFormValues>

	error: FieldErrors<InvoiceFormValues>
}

export const BasicInformation = ({control,error}:BasicInformationProps) => {
    
  return (
    <div className='mt-12 mb-[120px]'>
        <ControlInput as='date' control={control} error={error.invoiceDate} id='date' label='Invoice Date' name='invoiceDate' />
    </div>
  )
}
