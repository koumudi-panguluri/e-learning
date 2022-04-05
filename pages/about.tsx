import { useState } from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import styles from "../styles/About.module.css";
const features = [
  { name: 'Experience', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' },
  { name: 'Projects', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' },
  { name: 'Certifications', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' },
  { name: 'Test scores', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' },
]

export default function About(props: any) {
  const selectedRoute = 'about';
  return (
    <div>
      <Navigation selectedRoute={selectedRoute} />
      <div className={`${styles.main_container}`}>
        <div aria-hidden="true" className="relative">
          <img
            src="https://images.unsplash.com/photo-1578589335615-9e804277a5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3MlMjBhbmQlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
            className="w-full h-96 object-center object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-700" />
        </div>

        <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
            <h2 className="text-2xl font-thin tracking-tight text-white sm:text-4xl italic">Koundinya Panguluri</h2>
            <p className="mt-4 text-white">
              Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you
              meticulously arrange items into dedicated trays.
            </p>
          </div>

          <dl className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-x-16">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-100">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-200">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Footer />
    </div>
  )
}
