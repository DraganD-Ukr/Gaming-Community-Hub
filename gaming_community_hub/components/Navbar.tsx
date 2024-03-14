'use client';


import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Games', href: '/games' },
  { name: 'Events', href: '/events' },
  { name: 'Tech and Gear', href: '/tech-and-gear' },
  { name: 'About', href: '/about' },
];

const loginPath = "/login";




export default function Navbar() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Links
  const isActive = (href: string) => href === currentPath;
  const currentPath = usePathname();

  // Close mobile menu
  const closeMobileMenu: React.MouseEventHandler<HTMLAnchorElement> = () => {
    setMobileMenuOpen(false);
  };

  return (

    <header className="absolute inset-x-0 top-0 z-50 dark:bg-gray-900">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          {/* Use the Link component for the logo */}
          <Link href="/">
            <div className="-m-1.5 p-0">
              <span className="sr-only">Gaming Community Hub</span>
              <Image
                className="h-12 w-auto"
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu opened */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link legacyBehavior key={item.name} href={item.href}>
              <a
                onClick={closeMobileMenu}
                className={`-mx-3 block rounded-full px-4 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-opacity-30 transition-colors duration-300 ease-in-out ${isActive(item.href) ? ' decoration-blue-400 decoration-2 underline underline-offset-8' : ''}`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Login button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link legacyBehavior href={loginPath} >
            <a className="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-opacity-30 rounded-full px-4 py-2 transition-colors duration-300 ease-in-out">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </Link>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>

        <div className="fixed inset-0 z-50" />

        {/* Mobile menu properties */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto dark:bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-12 w-auto"
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
              />
            </a>

            {/* Mobile menu closed */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">

              {/* Nav links */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link legacyBehavior key={item.name} href={item.href}>
                    <a
                      onClick={closeMobileMenu}
                      className={`-mx-3 block rounded-full px-4 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-opacity-30 transition-colors duration-300 ease-in-out ${isActive(item.href) ? ' decoration-blue-400 decoration-2 underline underline-offset-8' : ''}`}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}


              </div>

              <div className="py-6">
                <Link legacyBehavior href="#">
                  <a className="-mx-3 block rounded-full px-4 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-opacity-30 transition-colors duration-300 ease-in-out">
                    Log in
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
