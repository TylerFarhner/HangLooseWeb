import SpotCard from '../components/SpotCard/SpotCard'

export default function DashboardPage(props) {
    return (
        <main className="Page">
            <h1>Spots Dashboard</h1>
            <SpotCard />
            <SpotCard />
            <SpotCard />
        </main>
    )
}