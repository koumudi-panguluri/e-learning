import Link from "next/link";
import { useEffect, useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Trainings() {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs, setTabs] = useState([
    {
      id: '01',
      name: 'Guidewire',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      current: true,
      items: [
        {
          itemName: 'Policy Center',
          itemDesp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
          itemType: 'policy_center',
        },
        {
          itemName: 'Claim Center',
          itemDesp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
          itemType: 'claim_center',
        },
        {
          itemName: 'Billing Center',
          itemDesp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
          itemType: 'billing_center',
        }
      ]
    },
    {
      id: '02',
      name: 'Tests', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      current: false,
      items: [
        {
          itemName: 'Math (JEE)',
          itemDesp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
          itemType: 'jee',
        },
        {
          itemName: 'Thermodynamics',
          itemDesp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
          itemType: 'thermodynamics',
        },
        {
          itemName: 'GATE (Support)',
          itemDesp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
          itemType: 'gate',
        }
      ]
    }
  ]);

  const changeTabHandler = (index: any) => {
    const newTabs = [...tabs];
    switch (index) {
      case 0:
        newTabs[index].current = true;
        newTabs[1].current = false;
        break;
      case 1:
        newTabs[index].current = true;
        newTabs[0].current = false;
        break;
    }
    setCurrentTab(index);
    setTabs(newTabs);
  }

  return (
    <div className={`mt-10`}>
      <div className="sm:block">
        <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          {tabs.map((tab, tabIdx) => (
            <a key={tab.name}
              className={classNames(
                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={() => changeTabHandler(tabIdx)}>
              <span>{tab.name}</span>
              <span aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-1'
                )} />
            </a>
          ))}
        </nav>
        {/** tab data */}
        <div className="mt-12">
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
            {tabs[currentTab]?.items?.map((item) => (
              <li key={item.itemName} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium">{item.itemName}</h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm">{item.itemDesp}</p>
                  </div>
                  {/* <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" /> */}
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <Link
                        href={`/courses/category?type=${item.itemType}`}>
                        <span className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                          <a className="ml-3">Know More</a>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

