import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from './redux/store'

type Props = {
	children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
	const { accessToken } = useAppSelector(state => state.user)
	if (accessToken) {
		return children
	} else {
		return <Navigate to='/login' />
	}
}
