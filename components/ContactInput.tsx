export default function ContactInput({
  placeholder,
  required = true,
  type = "text",
}: {
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div
      className={`my-[18px] py-[12px] border-b border-black relative ${
        !required ? "" : "input"
      }`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-[10px] text-[2.2rem] focus:outline-none"
      />
    </div>
  );
}
