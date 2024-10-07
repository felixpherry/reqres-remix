import { NavLink } from '@remix-run/react';
import { User } from 'types/user';
import { cn } from '~/lib/utils';

interface Props {
  users: User[];
}

const Sidebar = ({ users }: Props) => {
  return (
    <div className='p-5 flex flex-col gap-5 min-h-screen'>
      <div className='border-b-[1px] border-b-muted px-5 py-[10px]'>
        <h1 className='text-2xl font-extrabold'>Logo</h1>
      </div>
      <div className='flex flex-col'>
        {users.map((user) => (
          <NavLink
            key={user.id}
            className={({ isActive, isPending }) =>
              cn(
                isActive && 'bg-blue-500 text-white',
                isPending && 'bg-blue-200',
                'p-5 hover:bg-blue-500 hover:text-white font-medium text-lg rounded-md'
              )
            }
            to={`/users/${user.id}`}
          >
            {user.first_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
