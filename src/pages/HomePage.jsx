import { Header } from "../components";
import figure from "../assets/stick_guy.PNG";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row h-full w-full justify-center items-center mt-20 p-10">
        <img src={figure} alt="Stick Figure" className="h-70 shrink-0" />
        <div className="flex flex-col max-w-xl mr-8">
          <h1 className="text-4xl mb-2">Hi, I'm Hayden!</h1>
          <p className="wrap-break-word">
            Placeholder text for an 'About Me' blurb. Placeholder text for an
            'About Me' blurb. Placeholder text for an 'About Me' blurb.
            Placeholder text for an 'About Me' blurb. Placeholder text for an
            'About Me' blurb. Placeholder text for an 'About Me' blurb.
            Placeholder text for an 'About Me' blurb.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
