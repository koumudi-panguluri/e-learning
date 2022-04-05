import Home from '../components/home'
import Navigation from '../components/navigation'


export default function Dashboard() {
  const selectedRoute = 'dashboard';
  return (
    <>
      <div className="max-h-full">
        <div className={`bg-white-700 pb-32`}>
          <Navigation selectedRoute={selectedRoute} />
          <header className="py-10">
          </header>
        </div>
        <Home />
      </div>
    </>
  )
}
