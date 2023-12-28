import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'
export default function Home() {
	return (
		<div>
			<Head>
				<title>Y-Mood Signal</title>
				<meta
					name="YMood signal is a youtube comment sentiment analysis bot for helping advertisor to get more insight about content"
					content="made by waliulislamnohan "
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Layout>
            <h1>Welcome to the Dashboard</h1>
            </Layout>

		</div>
	)
}





  