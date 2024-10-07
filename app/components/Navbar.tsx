import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useAtom } from 'jotai';
import { sidebarAtom } from '~/atoms/sidebarAtom';
import MobileSidebar from './MobileSidebar';
import { User } from 'types/user';

export interface Props {
  users: User[];
}

const Navbar = ({ users }: Props) => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);
  return (
    <div className='h-[70px] shadow-sm p-5 fixed top-0 w-full'>
      <Button
        className='hidden md:block'
        variant={'outline'}
        onClick={() =>
          setSidebar({
            isOpen: !sidebar.isOpen,
          })
        }
      >
        <Menu />
      </Button>
      <MobileSidebar users={users}>
        <Button
          className='block md:hidden'
          variant={'outline'}
          onClick={() =>
            setSidebar({
              isOpen: !sidebar.isOpen,
            })
          }
        >
          <Menu />
        </Button>
      </MobileSidebar>
    </div>
  );
};

export default Navbar;
