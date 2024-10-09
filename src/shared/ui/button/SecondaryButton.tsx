import { Button, ButtonProps } from '@mui/material'
import React from 'react'

interface SecondaryButtonProps extends ButtonProps {
	children: React.ReactNode
}

const SecondaryButton = ({ children, ...props }: SecondaryButtonProps) => {
	return (
		<Button variant='contained' color='secondary' {...props}>
			{children}
		</Button>
	)
}

export default SecondaryButton
