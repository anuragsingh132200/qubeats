export default function SectionWrapper({
  id,
  className = "",
  children,
  containerClassName = "",
}) {
  return (
    <section
      id={id}
      className={`relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 ${className}`}
    >
      <div
        className={`mx-auto flex w-full max-w-8xl flex-col gap-4 sm:gap-6 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

