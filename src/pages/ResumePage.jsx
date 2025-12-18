import { Header } from "../components";

const ResumePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row h-full w-full justify-center items-center text-center mt-40 p-10">
        <div>
          <p className="text-3xl wrap-break-word">
            This is where you'll show your resume.
          </p>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
