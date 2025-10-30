import Tooltip from "./Tooltip.jsx";

export default function Skillbar({ value, tooltip, color }) {
  if (value > 100) value = 100;

  return (
    <div className="w-6/10 h-2/10 bg-none outline-2 outline-zinc-900 dark:outline-zinc-200 rounded-xl overflow-clip">
      <div
        className={`${color} group-hover/skill:inset-shadow-sm group-hover/skill:inset-shadow-zinc-900 transition-all duration-400 group-hover/skill:animate-pulse`}
        title={tooltip}
        style={{ width: value + "%" }}
      >
        -
      </div>
    </div>
  );
}
