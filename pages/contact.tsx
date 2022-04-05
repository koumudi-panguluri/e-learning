import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const selectedRoute = 'contact';
  return (
    <div>
      <Navigation selectedRoute={selectedRoute} />
      <div className={`relative ${styles.main_container}`}>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className={`lg:m-8 rounded-b-3xl ${styles.card_container} py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12`}>
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
              <p className="mt-3 text-lg leading-6 text-white">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                arcu.
              </p>
              <dl className="mt-12 text-base text-white">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>Hyderabad Telangana</p>
                    <p>India</p>
                  </dd>
                </div>
                <div className="mt-10">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-100" aria-hidden="true" />
                    <span className="ml-3">(+91) 955 047 9606</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-100" aria-hidden="true" />
                    <span className="ml-3">koundinya.sai3@gmail.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              {/** form  */}
              <img
                className=" w-full h-full object-cover rounded-3xl"
                src="/transp_contact.png"
                alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

{/* <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
<div>
  <label htmlFor="full-name" className="sr-only">
    Full name
  </label>
  <input
    type="text"
    name="full-name"
    id="full-name"
    autoComplete="name"
    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
    placeholder="Full name"
  />
</div>
<div>
  <label htmlFor="email" className="sr-only">
    Email
  </label>
  <input
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
    placeholder="Email"
  />
</div>
<div>
  <label htmlFor="phone" className="sr-only">
    Phone
  </label>
  <input
    type="text"
    name="phone"
    id="phone"
    autoComplete="tel"
    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
    placeholder="Phone"
  />
</div>
<div>
  <label htmlFor="message" className="sr-only">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    rows={4}
    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
    placeholder="Message"
    defaultValue={''}
  />
</div>
<div>
  <button
    type="submit"
    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Submit
  </button>
</div>
</form> */}