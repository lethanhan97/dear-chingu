import './badged-icon.css';

function BadgedIcon({ children, count }: BadgedIconProps) {
  return (
    <div className="badge-wrapper">
      {count > 0 ? <div className="badge">{count}</div> : null}

      {children}
    </div>
  );
}

interface BadgedIconProps {
  children: React.ReactNode;
  count: number;
}
export default BadgedIcon;
