import { User } from 'types/user';
import Sidebar from './Sidebar';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface Props {
  children: React.ReactNode;
  users: User[];
}

const MobileSidebar = ({ children, users }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side='left'>
        <Sidebar users={users} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
