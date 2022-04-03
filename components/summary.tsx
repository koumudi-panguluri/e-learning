import { AcademicCapIcon, DesktopComputerIcon, AnnotationIcon, CheckIcon } from "@heroicons/react/outline"
import styles from '../styles/Summary.module.css';

export default function Summary() {
  const features = [
    {
      name: 'Experience',
      icon: DesktopComputerIcon,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Projects',
      icon: AnnotationIcon,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'Education',
      icon: AcademicCapIcon,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  ]
  return (
    <div className={`${styles.main_container}`}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">About ME</h2>
          <img src="/transp_profile.gif" width={300} className="rounded-2xl" />
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <button
            type="button"
            className="inline-flex items-center mt-5 px-4 py-2 border-gray-300 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-white hover:bg-blue-50">
            More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={`mt-12 lg:mt-0 lg:col-span-2`}>
          <dl className={`space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8`}>
            {features.map((feature) => (
              <div key={feature.name} className={`relative rounded-lg ${styles.summary_container}`}>
                <dt>
                  <feature.icon className="h-6 w-6 text-green-200" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-white-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 font-thin text-white-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}