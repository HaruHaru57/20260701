type ButtonProps = {
  label: string;
  onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} style={{ padding: "8px 16px", cursor: "pointer" }}>
      {label}
    </button>
  );
}