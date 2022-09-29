import GradientDiv from '../../_rds-final/_misc/Gradient/GradientDiv';

export default function EventBanner({ children }: any) {
  return (
    <header className="relative bg-cu-black-50">
      <GradientDiv />
      <div className="relative mx-auto max-w-7xl items-start px-8 py-8 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
          {children}
        </h1>
      </div>
    </header>
  );
}
