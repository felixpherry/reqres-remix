import { LoaderFunctionArgs } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { Await, defer, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import UserPageSkeleton from './UserPageSkeleton';
import { getUser } from '~/services/user';

export const loader = ({ params }: LoaderFunctionArgs) => {
  invariant(params.userId, 'Missing userId param');
  const userPromise = getUser(Number(params.userId));
  return defer({
    user: userPromise,
  });
};

const UserDetailsPage = () => {
  const { user } = useLoaderData<typeof loader>();
  return (
    <Suspense fallback={<UserPageSkeleton />}>
      <Await resolve={user}>
        {(user) => (
          <div className='flex gap-8'>
            <img
              src={user.avatar}
              alt={user.first_name}
              className='h-32 w-32 rounded-full object-contain'
            />
            <div className='flex flex-col gap-[5px]'>
              <h1 className='text-3xl font-bold'>
                {user.first_name} {user.last_name}
              </h1>
              <p>{user.email}</p>
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default UserDetailsPage;
