export const TailwindExample = () => {
  return (
    <div className="text-center bg-[var(--color-lighter)] rounded w-full max-w-lg mx-auto my-5 p-5">
      <h1 className="text-[var(--color-primary)]">This is a Tailwind CSS Example component</h1>
      <p className="text-[var(--color-default)]">This is for utility-first fans. You apply pre-defined classes directly in your JSX. It's like having a huge set of utility classes at your disposal for almost every CSS property.</p>
    </div>
  );
};