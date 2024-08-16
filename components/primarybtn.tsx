export default function PrimaryButton({ variant, children }: {variant: boolean, children: React.ReactNode }) {
  return (
    <button className={`rounded-xl font-semibold ${variant ? "bg-[#056855]" : "border border-[#056855]"} px-10 py-3.5`}>
      {children}
    </button>
  )
}
