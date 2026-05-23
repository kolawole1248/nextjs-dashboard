export function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-200" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 rounded-lg bg-gray-100" />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="col-span-4 h-[350px] rounded-lg bg-gray-100" />
        <div className="col-span-4 h-[350px] rounded-lg bg-gray-100" />
      </div>
    </div>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-6 w-36 rounded-md bg-gray-200" />
      <div className="h-[350px] rounded-lg bg-gray-100" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-6 w-36 rounded-md bg-gray-200" />
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-3 w-24 rounded bg-gray-100" />
            </div>
            <div className="h-4 w-16 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 rounded-lg bg-gray-100" />
        ))}
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="rounded-lg bg-gray-50">
        <div className="mb-4 h-12 rounded-t-lg bg-gray-200" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 border-b p-4">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-3 w-24 rounded bg-gray-100" />
            </div>
            <div className="h-4 w-20 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}