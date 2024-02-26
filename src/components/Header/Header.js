import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const products = [
    {
        name: 'Analytics',
        description: 'Get a better understanding where your traffic is coming from',
        href: '#',
        icon: ChartPieIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers with our engagement tool',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    {
        name: 'Integrations',
        description: 'Your customers’ data will be safe and secure',
        href: '#',
        icon: SquaresPlusIcon,
    },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
    { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="group relative sticky top-0 isolate z-10 2xl:px-[200px]">
            <nav className=" mx-auto flex items-center justify-between bg-red" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="flex lg:flex-1 h-[88px]">
                        <div className='deuNavDefaultLogo my-auto'></div>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    {/* <Popover.Group className="hidden lg:flex h-[88px] leading-6"> */}
                    <Popover>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                        </Transition>
                    </Popover>
                        <ul className=''>
                            <a href="" className="">
                                <li className='mx-[50px] py-8 text-[20px] leading-6 text-gray-900'>사업단소개</li>
                            </a>
                            <div className='leading-[56px] hidden group-hover:block'>
                                <a><li className='pt-[16px]'>인사말</li></a>
                                <a><li>조기취업형 계약학과 소개</li></a>
                                <a><li>구성원 소개</li></a>
                            </div>
                        </ul>
                        <ul>
                            <a href="#" className="">
                                <li className='mx-[50px] py-8 text-[20px] leading-6 text-gray-900'>참여기업현황</li>
                            </a>
                            <div className='leading-[56px] hidden group-hover:block'>
                                <a><li className='pt-[16px]'>참여기업현황</li></a>
                            </div>
                        </ul>
                        <ul>
                            <a href="#" className="">
                                <li className='mx-[50px] py-8 text-[20px] leading-6 text-gray-900'>학과소개</li>
                            </a>
                            <div className='leading-[56px] hidden group-hover:block'>
                                <a><li className='pt-[16px]'>학과소개</li></a>
                            </div>
                        </ul>
                        <ul>
                            <a href="#" className="">
                                <li className='mx-[50px] py-8 text-[20px] leading-6 text-gray-900'>입학안내</li>
                            </a>
                            <div className='leading-[56px] hidden group-hover:block'>
                                <a><li className='pt-[16px]'>신입생 모집요강</li></a>
                                <a><li>장학 및 지원 혜택</li></a>
                                <a><li>FAQ</li></a>
                                <a><li>입학상담 Q&A</li></a>
                                <a><li className='pb-[16px]'>입학설명회</li></a>
                            </div>
                        </ul>
                        <ul>
                            <a href="#" className="">
                                <li className='mx-[50px] py-8 text-[20px] leading-6 text-gray-900'>창의융합교육센터</li>
                            </a>
                            <div className='leading-[56px] hidden group-hover:block'>
                                <a><li className='pt-[16px]'>창의융합교육센터</li></a>
                            </div>
                        </ul>
                        <ul>
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                <a href="#" className="">
                                    <li className='mx-[50px] py-8 text-[20px] leading-6 text-gray-900'>커뮤니티</li>
                                </a>
                            </div>
                            <div className='leading-[56px] hidden group-hover:block'>
                                <a><li className='pt-[16px]'>사업단 소식</li></a>
                                <a><li>공지사항</li></a>
                                <a><li>문의하기</li></a>
                            </div>
                        </ul>
                    {/* </Popover.Group> */}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
