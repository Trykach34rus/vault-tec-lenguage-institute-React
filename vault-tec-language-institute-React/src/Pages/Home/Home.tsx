import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import st from './Home.module.scss'

export default function Home() {
	return (
		<>
			<Header />
			<main className={st.root}>
				<div className={st.container}>
					<section className={st.terminal}>
						<h2 className={st.vtitle}>
							WELCOME TO <span className={st.vaultAccent}>VAULT INSTITUTE</span>
						</h2>
						<p className={st.muted}>
							Retro-futuristic AI school. Chat tutor, speech trainer, essay
							checker and adaptive plans.
						</p>

						<div className={st.contentRow}>
							<div className={st.textContent}>
								<p className={st.muted}>
									Join thousands of vault dwellers and learn languages in the
									wasteland with our AI systems.
								</p>
								<div className={st.buttonGroup}>
									<a href='/signup' className={st.btn}>
										Join Vault
									</a>
									<a href='/about' className={`${st.btn} ${st.btnGhost}`}>
										Learn More
									</a>
								</div>
							</div>
							<div className={st.imageContent}>
								<img
									src='assets/img/terminal.jpg'
									alt='terminal'
									className={st.terminalImage}
								/>
							</div>
						</div>
					</section>

					<section className={st.systemsSection}>
						<h3 className={st.vtitle}>Systems</h3>
						<div className={st.cardRow}>
							<div className={`${st.card} ${st.terminal}`}>
								<h4 className={st.vtitle}>AI Replicant Tutor</h4>
								<p className={st.muted}>Adaptive chat tutor.</p>
							</div>
							<div className={`${st.card} ${st.terminal}`}>
								<h4 className={st.vtitle}>Speech Decoder</h4>
								<p className={st.muted}>Pronunciation trainer.</p>
							</div>
							<div className={`${st.card} ${st.terminal}`}>
								<h4 className={st.vtitle}>Writing Scanner</h4>
								<p className={st.muted}>Essay checking & suggestions.</p>
							</div>
							<div className={`${st.card} ${st.terminal}`}>
								<h4 className={st.vtitle}>Adaptive Plan</h4>
								<p className={st.muted}>Personalized curriculum.</p>
							</div>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	)
}
