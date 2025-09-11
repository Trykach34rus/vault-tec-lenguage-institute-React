import { FiBook, FiMessageSquare, FiMic } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer.tsx'
import Header from '../../Componets/Header/Header.tsx'
import Sidebar from '../../Componets/Sidebar/Sidebar.tsx'
import st from './Dashboard.module.scss'

export default function Dashboard() {
	return (
		<div className={st.root}>
			<Header />
			<div className={st.layout}>
				<Sidebar />
				<main className={st.main}>
					<div className={st.container}>
						<h2 className={st.vtitle}>VAULT DASHBOARD</h2>
						<p className={st.muted}>Overview and quick access</p>

						<div className={st.cardRow}>
							<div className={st.card}>
								<h4 className={st.vtitle}>Language Level</h4>
								<div className={st.value}>B1</div>
								<div className={st.muted}>Intermediate</div>
								<div className={st.progress} data-value='65'>
									<i style={{ width: '65%' }}></i>
								</div>
							</div>
							<div className={st.card}>
								<h4 className={st.vtitle}>Streak</h4>
								<div className={st.value}>12</div>
								<div className={st.muted}>Days</div>
								<div className={st.progress} data-value='40'>
									<i style={{ width: '40%' }}></i>
								</div>
							</div>
							<div className={st.card}>
								<h4 className={st.vtitle}>Words Learned</h4>
								<div className={st.value}>427</div>
								<div className={st.muted}>This month</div>
								<div className={st.progress} data-value='86'>
									<i style={{ width: '86%' }}></i>
								</div>
							</div>
							<div className={st.card}>
								<h4 className={st.vtitle}>XP Points</h4>
								<div className={st.value}>2,845</div>
								<div className={st.muted}>To next level: 1,155</div>
								<div className={st.progress} data-value='71'>
									<i style={{ width: '71%' }}></i>
								</div>
							</div>
						</div>

						<section className={st.section}>
							<h3 className={st.sectionTitle}>Quick Access</h3>
							<div className={st.quickAccess}>
								<Link
									to='/chat'
									className={`${st.card} ${st.terminal} ${st.quickAccessCard}`}
								>
									<div className={st.iconContainer}>
										<FiMessageSquare size={24} />
									</div>
									<h4 className={st.vtitle}>AI Tutor</h4>
									<p className={st.muted}>Practice conversation</p>
								</Link>
								<Link
									to='/speech'
									className={`${st.card} ${st.terminal} ${st.quickAccessCard}`}
								>
									<div className={st.iconContainer}>
										<FiMic size={24} />
									</div>
									<h4 className={st.vtitle}>Speech Trainer</h4>
									<p className={st.muted}>Record & compare</p>
								</Link>
								<Link
									to='/exercises'
									className={`${st.card} ${st.terminal} ${st.quickAccessCard}`}
								>
									<div className={st.iconContainer}>
										<FiBook size={24} />
									</div>
									<h4 className={st.vtitle}>Exercises</h4>
									<p className={st.muted}>Generate practice</p>
								</Link>
							</div>
						</section>

						<section className={st.section}>
							<h3 className={st.sectionTitle}>Recent Activity</h3>
							<div className={`${st.terminal} ${st.tableContainer}`}>
								<table className={st.table}>
									<thead>
										<tr>
											<th>Date</th>
											<th>Activity</th>
											<th>XP</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className={st.muted}>10.23.2287</td>
											<td>Conversation Practice (Spanish)</td>
											<td className={st.xpPositive}>+120</td>
											<td>
												<span className={`${st.badge} ${st.success}`}>
													COMPLETED
												</span>
											</td>
										</tr>
										<tr>
											<td className={st.muted}>10.22.2287</td>
											<td>Grammar Exercise</td>
											<td className={st.xpPositive}>+85</td>
											<td>
												<span className={`${st.badge} ${st.success}`}>
													COMPLETED
												</span>
											</td>
										</tr>
										<tr>
											<td className={st.muted}>10.20.2287</td>
											<td>Writing Assignment</td>
											<td className={st.muted}>—</td>
											<td>
												<span className={`${st.badge} ${st.warn}`}>
													IN REVIEW
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
