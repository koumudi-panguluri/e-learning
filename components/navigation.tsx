import styles from "../styles/Dashboard.module.css";
import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://media-exp1.licdn.com/dms/image/C5603AQFhmBgQcVbabQ/profile-displayphoto-shrink_400_400/0/1589051295850?e=2147483647&v=beta&t=tSJOcOfZNgLyxi5Aa58HdEZhVplzMH7S3dlyUiphsWY',
}


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation(props: any) {
  // const router = useRouter();
  const [navigation, setNavigation] = useState([
    { name: 'Dashboard', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Courses', href: '/courses', current: false },
    { name: 'Contact', href: '/contact', current: false }
  ]);

  useEffect(() => {
    console.log("props", props.selectedRoute);
    setSelectedNav(props.selectedRoute);
  }, []);

  const setSelectedNav = (selectedRoute: any) => {
    const newNav = [...navigation];
    switch (selectedRoute) {
      case 'dashboard':
        newNav[0].current = true;
        setNavigation(newNav);
        break;
      case 'about':
        newNav[1].current = true;
        setNavigation(newNav);
        break;
      case 'courses':
        newNav[2].current = true;
        setNavigation(newNav);
        break;
      case 'contact':
        newNav[3].current = true;
        setNavigation(newNav);
        break;
      default:
        newNav[0].current = true;
        setNavigation(newNav);
        break;
    }
  }

  return (
    <div>
      <Disclosure as="nav" className={`${styles.nav}`}>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="border-b border-white-700">
                <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}>
                            <a className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-100 hover:bg-gray-600 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                              aria-current={item.current ? 'page' : undefined}>
                              {item.name}</a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="border-b border-gray-700 md:hidden">
              <div className="px-2 py-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-gray-200">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                </div>
                {/*
                    transition needed
                    */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}