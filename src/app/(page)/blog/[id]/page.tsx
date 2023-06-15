"use client";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div className="m-4 font-bold">Blog ID: {params.id}</div>
      <div className="w-3/4 m-auto">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
