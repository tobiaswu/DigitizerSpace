export const BlogPreview = () => {
  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      <a role="tab" className="tab tab-active sm:w-28 md:w-32">
        All
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">
          <div className="skeleton col-span-6 w-full h-48"></div>
          <div className="skeleton col-span-6 sm:col-span-3 lg:col-span-2 w-full h-48"></div>
          <div className="skeleton col-span-6 sm:col-span-3 lg:col-span-2 w-full h-48"></div>
          <div className="skeleton col-span-6 sm:col-span-3 lg:col-span-2 w-full h-48"></div>
          {/* <PostCard
            className="col-span-6 card lg:card-side bg-neutral shadow-md rounded-lg"
            preview
          />
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2 card bg-neutral shadow-md rounded-lg" />
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2 card bg-neutral shadow-md rounded-lg" />
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2 card bg-neutral shadow-md rounded-lg" /> */}
        </div>
      </div>
      <a role="tab" className="tab sm:w-28 md:w-32">
        Use Cases
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        Guides
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        Trends
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        Product News
      </a>
      {/* <a role="tab" className="tab sm:w-28 md:w-32">
        Industries
      </a> */}
    </div>
  );
};
