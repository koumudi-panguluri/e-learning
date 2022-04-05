import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import styles from "../../styles/Category.module.css";

export default function Category() {
  const router = useRouter();
  const dummyBreif = "Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae."
  const dummyDesp = "Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.";
  const dummyContact = "This course includes 52.5 hours on-demand video, 35 articles, 223 downloadable resources, Full lifetime access. Enjoy!"

  const [courseName, setCourseName] = useState('');
  const [type, setType] = useState('');
  const [brief, setBrief] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  useEffect(() => {
    console.log("category", router.query)
    switch (router.query.type) {
      case "policy_center":
        setCourseName("Guidewire");
        setType("Policy Center");
        setDescription(dummyDesp);
        setBrief(dummyBreif);
        setDetails(dummyContact);
        break;
      case "claim_center":
        setCourseName("Guidewire");
        setType("Claim Center");
        setDescription(dummyDesp);
        setBrief(dummyBreif);
        setDetails(dummyContact);
        break;
      case "billing_center":
        setCourseName("Guidewire");
        setType("Billing Center");
        setDescription(dummyDesp);
        setBrief(dummyBreif);
        setDetails(dummyContact);
        break;
      case "qa":
        setCourseName("Guidewire");
        setType("Guidewire QA Training & Support");
        setDescription(dummyDesp);
        setBrief(dummyBreif);
        setDetails(dummyContact);
        break;
      case "jee":
        setCourseName("Test Coachings");
        setType("Math (JEE)");
        setDescription(dummyDesp);
        setBrief(dummyBreif);
        setDetails(dummyContact);
        break;
      case "gate":
        setCourseName("Test Coachings");
        setType("GATE");
        setDescription(dummyDesp);
        setBrief(dummyBreif);
        setDetails(dummyContact);
        break;
    }
  })
  return (
    <div>
      <Navigation />
      <div className={`${styles.main_container} py-16 bg-gray-50 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-white font-semibold tracking-wide uppercase">{courseName}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              {type}
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-white">
              {brief}
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-indigo text-white mx-auto lg:max-w-none">
                <p>
                  {description}
                </p>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <div className="relative text-lg text-gray-700 font-medium mt-8">
                    <p className="relative">
                      {details}
                    </p>
                  </div>
                </div>
                <cite className={`relative flex items-center sm:items-start ${styles.card_container} rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10`}>
                  <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                    <img
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-green-300"
                      src="https://media-exp1.licdn.com/dms/image/C5603AQFhmBgQcVbabQ/profile-displayphoto-shrink_400_400/0/1589051295850?e=2147483647&v=beta&t=tSJOcOfZNgLyxi5Aa58HdEZhVplzMH7S3dlyUiphsWY"
                      alt="" />
                  </div>
                  <span className="relative ml-4 text-white-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                    <p className="text-white font-semibold sm:inline">Koundinya Panguluri</p>{' '}
                    <p className="sm:inline text-gray-100 font-thin">Contact @(+91) 955 047 9606</p>
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}