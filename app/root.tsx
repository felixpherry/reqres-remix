import {
  Await,
  defer,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import styles from './styles/tailwind.css?url';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAtomValue } from 'jotai';
import { sidebarAtom } from './atoms/sidebarAtom';
import { Loader2 } from 'lucide-react';
import { getUsers } from './services/user';
import { Suspense } from 'react';
import SidebarSkeleton from './components/SidebarSkeleton';
import NavbarSkeleton from './components/NavbarSkeleton';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export const loader = () => {
  const usersPromise = getUsers();
  return defer({ users: usersPromise });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { isOpen: isSidebarOpen } = useAtomValue(sidebarAtom);
  const { users } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {navigation.state === 'loading' && (
          <div className='absolute h-full w-full bg-black/60 z-[999] flex justify-center items-center'>
            <Loader2 className='animate-spin h-12 w-12 text-white' />
          </div>
        )}
        <div className='flex items-start gap-0'>
          {isSidebarOpen && (
            <div className='hidden md:block w-[320px] border-r-[1px] border-r-muted'>
              <Suspense fallback={<SidebarSkeleton />}>
                <Await resolve={users}>
                  {(users) => <Sidebar users={users} />}
                </Await>
              </Suspense>
            </div>
          )}
          <div className='flex flex-col w-full'>
            <Suspense fallback={<NavbarSkeleton />}>
              <Await resolve={users}>
                {(users) => <Navbar users={users} />}
              </Await>
            </Suspense>
            <div className='p-5 mt-[70px]'>{children}</div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
