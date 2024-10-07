import { Skeleton } from '~/components/ui/skeleton';

const UserPageSkeleton = () => {
  return (
    <div className='flex gap-8'>
      <Skeleton className='h-32 w-32 rounded-full object-contain' />
      <div className='flex flex-col gap-[5px] w-full'>
        <Skeleton className='w-1/2 h-9' />
        <Skeleton className='w-1/3 h-4' />
      </div>
    </div>
  );
};

export default UserPageSkeleton;
