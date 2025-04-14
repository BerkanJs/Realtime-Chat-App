// components/MessageSkeleton.tsx
import { Skeleton } from "daisyui";
import { UserCircle } from "lucide-react";

export default function MessageSkeleton() {
  return (
    <div className="flex items-start space-x-3 p-4 animate-pulse">
      {/* Avatar kısmı */}
      <div className="rounded-full bg-base-300 w-10 h-10 flex items-center justify-center">
        <UserCircle className="w-6 h-6 text-base-content/30" />
      </div>

      {/* Mesaj içeriği */}
      <div className="flex flex-col space-y-2 w-full">
        <div className="h-3 w-1/3 rounded bg-base-300" />
        <div className="h-4 w-full rounded bg-base-200" />
        <div className="h-4 w-5/6 rounded bg-base-200" />
      </div>
    </div>
  );
}
