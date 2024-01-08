import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex flex-col  items-center justify-center text-center ">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-primary-100">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
