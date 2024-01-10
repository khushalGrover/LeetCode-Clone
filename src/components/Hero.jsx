import Button from "./helperCompenents/Button";

const Hero = () => (
    <header className="flex flex-col  items-center justify-center text-center ">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-primary-100">
        <>
            {'A New Way to '}
            <span className="text-primary-500">Learn</span>
        </>
    </h1>
    <div className="mb-16 mt-4 text-2xl">LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</div>

    <Button xl>Get Started</Button>
  </header>
);

export { Hero};