import { Button, ButtonProps } from '@mui/material'
import React from 'react'

interface PrimaryButtonProps extends ButtonProps {
	children: React.ReactNode
}

const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
	return (
		<Button variant='contained' color='primary' {...props}>
			{children}
		</Button>
	)
}

export default PrimaryButton
