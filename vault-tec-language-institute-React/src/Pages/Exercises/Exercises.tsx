import { useState } from 'react'
import { FiBook, FiPlay } from 'react-icons/fi'
import Footer from '../../Componets/Footer/Footer'
import Header from '../../Componets/Header/Header'
import Sidebar from '../../Componets/Sidebar/Sidebar'
import st from './Exercises.module.scss'

export default function ExerciseGenerator() {
	// const navigate = useNavigate()
	const [topic, setTopic] = useState<string>('')
	const [level, setLevel] = useState<string>('B1')
	const [count, setCount] = useState<number>(5)
	const [exercises, setExercises] = useState<string[]>([])
	const [isGenerating, setIsGenerating] = useState<boolean>(false)

	const exerciseTemplates = {
		B1: [
			'Complete the sentence: If I had more time, I _________ (travel) around the world.',
			'Fill in the blank: She _________ (study) English for three years.',
			"Choose the correct option: I'm looking forward to _________ (see/seeing) you next week.",
			'Rewrite the sentence in passive voice: They built this house in 1990.',
			"Correct the mistake: He don't like coffee.",
		],
		B2: [
			'Use the correct conditional: If I _________ (know) the answer, I would tell you.',
			'Transform the sentence using inversion: I had never seen such a beautiful sunset before.',
			'Complete with the appropriate phrasal verb: We need to _________ (look/look into) this problem more carefully.',
			"Rephrase using a modal verb: It's possible that she forgot about the meeting.",
			"Combine the sentences using a relative clause: That's the woman. Her son won the competition.",
		],
		C1: [
			"Use the correct subjunctive form: It's essential that he _________ (be) informed immediately.",
			'Rewrite using inversion for emphasis: I seldom have I encountered such rudeness.',
			'Complete with the appropriate collocation: The company decided to _________ (make/take) drastic measures.',
			'Paraphrase using advanced vocabulary: The government introduced new policies to help the economy.',
			'Analyze and correct the error in this complex sentence: Not only she plays the piano but also composing music.',
		],
	}

	const generateExercises = (e: React.FormEvent) => {
		e.preventDefault()
		if (!topic.trim()) return

		setIsGenerating(true)

		// Имитация генерации упражнений
		setTimeout(() => {
			const selectedLevel = level as keyof typeof exerciseTemplates
			const levelExercises =
				exerciseTemplates[selectedLevel] || exerciseTemplates.B1

			const generatedExercises: string[] = []
			for (let i = 0; i < count; i++) {
				const randomIndex = Math.floor(Math.random() * levelExercises.length)
				const exercise = `[${level}] ${topic} - ${levelExercises[randomIndex]}`
				generatedExercises.push(exercise)
			}

			setExercises(generatedExercises)
			setIsGenerating(false)
		}, 800)
	}

	const clearExercises = () => {
		setExercises([])
		setTopic('')
		setCount(5)
	}

	return (
		<>
			<Header />
			<div className={st.root}>
				<Sidebar />
				<main className={st.main}>
					<div className={st.container}>
						<section className={st.terminal}>
							<h2 className={st.title}>Generate Exercises</h2>
							<p className={st.subtitle}>
								Choose topic/level and generate practice items (demo generator).
							</p>

							<form onSubmit={generateExercises} className={st.form}>
								<div className={st.formGroup}>
									<label className={st.label}>Topic</label>
									<input
										type='text'
										value={topic}
										onChange={e => setTopic(e.target.value)}
										placeholder='e.g. Past Perfect, Food vocabulary'
										className={st.input}
									/>
								</div>

								<div className={st.formGroup}>
									<label className={st.label}>Level</label>
									<select
										value={level}
										onChange={e => setLevel(e.target.value)}
										className={st.select}
									>
										<option value='B1'>B1</option>
										<option value='B2'>B2</option>
										<option value='C1'>C1</option>
									</select>
								</div>

								<div className={st.formGroup}>
									<label className={st.label}>Number of items</label>
									<input
										type='number'
										value={count}
										onChange={e =>
											setCount(
												Math.max(1, Math.min(20, parseInt(e.target.value) || 1))
											)
										}
										min='1'
										max='20'
										className={st.input}
									/>
								</div>

								<div className={st.buttons}>
									<button
										type='submit'
										disabled={!topic.trim() || isGenerating}
										className={st.generateButton}
									>
										<FiPlay className={st.buttonIcon} />
										{isGenerating ? 'Generating...' : 'Generate'}
									</button>
									<button
										type='button'
										onClick={clearExercises}
										className={st.clearButton}
									>
										<FiBook className={st.buttonIcon} />
										Clear
									</button>
								</div>
							</form>

							{exercises.length > 0 && (
								<div className={st.exercises}>
									<h3 className={st.exercisesTitle}>Generated Exercises</h3>
									<div className={st.exercisesList}>
										{exercises.map((exercise, index) => (
											<div key={index} className={st.exerciseItem}>
												<span className={st.exerciseNumber}>{index + 1}.</span>
												{exercise}
											</div>
										))}
									</div>
								</div>
							)}
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</>
	)
}
