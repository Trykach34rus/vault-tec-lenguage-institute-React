import { useEffect, useRef, useState } from 'react'
import { FiSend } from 'react-icons/fi'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import Sidebar from '../../Componets/Sidebar/Sidebar'
import st from './Chat.module.scss'

export default function Chat() {
	// const navigate = useNavigate()
	const [messages, setMessages] = useState<
		Array<{ text: string; sender: string }>
	>([])
	const [inputText, setInputText] = useState<string>('')
	const chatHistoryRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (chatHistoryRef.current) {
			chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight
		}
	}, [messages])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!inputText.trim()) return

		const userMessage = { text: inputText, sender: 'user' }
		setMessages(prev => [...prev, userMessage])
		setInputText('')

		setTimeout(() => {
			const aiMessage = {
				text: `Excellent! Here's feedback on: "${inputText}" - Your pronunciation is good, but try to work on verb conjugation.`,
				sender: 'ai',
			}
			setMessages(prev => [...prev, aiMessage])
		}, 700)
	}

	return (
		<>
			<Header />
			<div className={st.root}>
				<Sidebar />
				<main className={st.main}>
					<div className={st.container}>
						<div className={st.chatHeader}>
							<h1 className={st.title}>AI Tutor Chat</h1>
							<p className={st.subtitle}>
								Practice your language skills with our AI tutor
							</p>
						</div>

						<section className={st.terminal}>
							<div ref={chatHistoryRef} className={st.chatHistory}>
								{messages.length === 0 ? (
									<div className={st.welcomeMessage}>
										<p>
											Welcome to AI Tutor Chat! Start a conversation to practice
											your language skills.
										</p>
										<p>The AI tutor will provide feedback on your messages.</p>
									</div>
								) : (
									messages.map((message, index) => (
										<div
											key={index}
											className={`${st.message} ${
												message.sender === 'user'
													? st.userMessage
													: st.aiMessage
											}`}
										>
											<span className={st.sender}>
												{message.sender === 'user' ? 'You: ' : 'Tutor: '}
											</span>
											{message.text}
										</div>
									))
								)}
							</div>

							<form onSubmit={handleSubmit} className={st.chatForm}>
								<input
									type='text'
									value={inputText}
									onChange={e => setInputText(e.target.value)}
									placeholder='Type your message...'
									className={st.chatInput}
								/>
								<button
									type='submit'
									className={st.sendButton}
									disabled={!inputText.trim()}
								>
									<FiSend />
								</button>
							</form>
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
