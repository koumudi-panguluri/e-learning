import { ExternalLinkIcon } from "@heroicons/react/outline";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import Trainings from "../components/trainings";
import styles from "../styles/Trainings.module.css";

export default function Courses() {
  const selectedRoute = 'courses';
  return (
    <div>
      <Navigation selectedRoute={selectedRoute} />
      <div className={`${styles.main_container} relative bg-gray-800`}>
        <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-2/5 p-4">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/training.jpg"
            alt="" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-3/5 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Trainings Offered</h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
            <Trainings />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}