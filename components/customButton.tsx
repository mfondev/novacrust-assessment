interface CustomButtonProps {
  subject: string;
  disabled?: boolean;
}

export default function CustomButton({ subject, disabled }: CustomButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        w-full rounded-[30px] py-5 px-10
        font-instrument text-[16px] font-bold
        transition-all
        ${
          disabled
            ? "bg-[#BDBDBD] text-white cursor-not-allowed"
            : "bg-[#013941] text-[#E6FBF2] hover:opacity-90"
        }
      `}
    >
      {subject}
    </button>
  );
}
