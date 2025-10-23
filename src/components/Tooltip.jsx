export default function Tooltip({ children, text, width }) {
  return (
    <div className="relative group">
      {children}
      <div className={`tooltip w-${width}`}>{text}</div>
    </div>
  );
}
