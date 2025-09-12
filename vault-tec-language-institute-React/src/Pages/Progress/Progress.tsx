import { useEffect, useState } from 'react'
import { FiAward, FiCalendar, FiTrendingUp } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import Sidebar from '../../Componets/Sidebar/Sidebar'
import st from './Progress.module.scss'

interface ProgressItem {
	category: string
	percentage: number
}

export default function Progress() {
	const navigate = useNavigate()
	const [progressData, setProgressData] = useState<ProgressItem[]>([
		{ category: 'Vocabulary', percentage: 86 },
		{ category: 'Grammar', percentage: 72 },
		{ category: 'Pronunciation', percentage: 64 },
	])

	const [adaptivePlan] = useState([
		'Past Continuous review',
		"Pronunciation: 'th' vs 't'",
		'Vocabulary: Food & Dining',
		'Conversation practice: Job interviews',
		'Reading comprehension: Technical articles',
	])

	const [stats] = useState({
		totalLessons: 47,
		completedLessons: 32,
		streak: 14,
		accuracy: 78,
	})

	// Анимация прогресс-баров
	useEffect(() => {
		const timer = setTimeout(() => {
			setProgressData(prev =>
				prev.map(item => ({
					...item,
					animated: true,
				}))
			)
		}, 100)

		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			<Header />
			<div className={st.root}>
				<Sidebar />
				<main className={st.main}>
					<div className={st.container}>
						<section className={st.terminal}>
							<h2 className={st.title}>Learning Progress</h2>
							<p className={st.subtitle}>
								Overview of your recent activity and the adaptive plan.
							</p>

							<div className={st.statsGrid}>
								<div className={st.statCard}>
									<FiAward className={st.statIcon} />
									<div className={st.statNumber}>
										{stats.completedLessons}/{stats.totalLessons}
									</div>
									<div className={st.statLabel}>Lessons Completed</div>
								</div>
								<div className={st.statCard}>
									<FiTrendingUp className={st.statIcon} />
									<div className={st.statNumber}>{stats.accuracy}%</div>
									<div className={st.statLabel}>Average Accuracy</div>
								</div>
								<div className={st.statCard}>
									<FiCalendar className={st.statIcon} />
									<div className={st.statNumber}>{stats.streak}</div>
									<div className={st.statLabel}>Day Streak</div>
								</div>
							</div>

							<div className={st.progressSection}>
								<h3 className={st.sectionTitle}>Skill Progress</h3>
								<div className={st.progressList}>
									{progressData.map((item, index) => (
										<div key={item.category} className={st.progressItem}>
											<div className={st.progressHeader}>
												<span className={st.progressCategory}>
													{item.category}
												</span>
												<span className={st.progressPercentage}>
													{item.percentage}%
												</span>
											</div>
											<div className={st.progressBar}>
												<div
													className={st.progressFill}
													style={{
														width: `${item.percentage}%`,
														animationDelay: `${index * 0.2}s`,
													}}
												/>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className={st.adaptivePlan}>
								<h3 className={st.sectionTitle}>
									<FiCalendar className={st.planIcon} />
									Adaptive Plan (next topics)
								</h3>
								<ul className={st.planList}>
									{adaptivePlan.map((topic, index) => (
										<li key={index} className={st.planItem}>
											<span className={st.planBullet}></span>
											{topic}
										</li>
									))}
								</ul>
							</div>

							<div className={st.recommendations}>
								<h3 className={st.sectionTitle}>Recommendations</h3>
								<div className={st.recommendationList}>
									<div className={st.recommendationItem}>
										<span className={st.recommendationIcon}>💡</span>
										Focus on pronunciation exercises to improve from 64% to 80%
									</div>
									<div className={st.recommendationItem}>
										<span className={st.recommendationIcon}>📚</span>
										Complete 2 grammar lessons this week to maintain your streak
									</div>
									<div className={st.recommendationItem}>
										<span className={st.recommendationIcon}>🎯</span>
										Try conversation practice to apply your vocabulary knowledge
									</div>
								</div>
							</div>
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
