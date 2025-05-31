import PropertyId from "@/Components/Properties/[id]/Id";
import { Suspense } from "react";

export default async function Page ({ params }: {
  params: Promise<{ id: string }>
})  {
  
  const { id } = await params; // Get property ID from URL params
  // to={`/chats/${singleProperty?.owner}/${user?.userProfile?._id}`}
  // const { isLoading } = useQuerySinglePropertyFunction(`/property/${id}`);

  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <PropertyId id={id}/>
      </Suspense>
    </div>
  );
};

