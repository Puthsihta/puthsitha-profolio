export const ProgressBar = ({ progressPercentage, skill }: any) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <p className="text-slate-600">{skill}</p>
        <p className="text-slate-600">
          {progressPercentage}
          {"%"}
        </p>
      </div>
      <div className="relative h-2 rounded-md w-full bg-gray-300">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full rounded-l-md ${"bg-green-600"}`}></div>
      </div>
    </div>
  );
};
