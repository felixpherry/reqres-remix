import { Skeleton } from './ui/skeleton';

const SidebarSkeleton = () => {
  return (
    <div className='p-5 flex flex-col gap-5'>
      <div className='border-b-[1px] border-b-muted px-5 py-[10px]'>
        <h1 className='text-2xl font-extrabold'>Logo</h1>
      </div>
      <div className='flex flex-col gap-5'>
        {new Array(10).fill(0).map((_, idx) => (
          <Skeleton key={idx} className='rounded-md p-5' />
        ))}
      </div>
    </div>
  );
};

export default SidebarSkeleton;
