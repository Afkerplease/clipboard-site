import "./App.css";
import clipboardLogo from "./images/logo.svg";
import computer from "./images/image-computer.png";

function App() {
  return (
    <main className=" font-Bai">
      {/* 1st sec */}
      <section className="  pt-20 gap-4   flex flex-col items-center bg-[url('./images/bg-header-mobile.png')] bg-no-repeat bg-right-top bg-cover  ">
        <img className="mt-8" src={clipboardLogo} alt="" />
        <h1 className=" mt-10 font-[600] text-3xl text-center w-[65%] text-DarkGrayishBlue  ">
          A history of everything you copy
        </h1>
        <p className="text-center text-GrayishBlue w-[65%] ">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex flex-col gap-6 mt-8 w-[100%] items-center ">
          <button className=" bg-StrongCyan rounded-full w-[70%] py-4 shadow-xl text-white">
            Download for iOS
          </button>
          <button className=" bg-LightBlue rounded-full w-[70%] py-4 shadow-xl text-white">
            Download for Mac
          </button>
        </div>
      </section>
      {/* ********** */}
      {/* 2nd sec */}
      <section className=" mt-[10rem] flex flex-col items-center ">
        <h2 className=" font-[600] text-3xl text-center w-[60%] text-DarkGrayishBlue ">
          Keep track of your snippets
        </h2>
        <p className="text-center text-GrayishBlue w-[62%] mt-4">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <div className="mt-20 flex flex-col items-center ">
          <img src={computer} className=" w-[80%] " alt="" />
          <div className=" flex flex-col items-center gap-8 mt-10  ">
            <div className=" flex flex-col items-center gap-2">
              <h3 className=" font-[600] text-xl  text-DarkGrayishBlue ">
                Quick Search
              </h3>{" "}
              <p className=" text-GrayishBlue text-center w-[65%] ">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className=" flex flex-col items-center gap-2">
              <h3 className=" font-[600] text-xl  text-DarkGrayishBlue ">
                iCloud Sync
              </h3>
              <p className=" text-GrayishBlue text-center w-[60%] ">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div className=" flex flex-col items-center gap-2">
              <h3 className=" font-[600] text-xl  text-DarkGrayishBlue ">
                Complete History
              </h3>
              <p className=" text-GrayishBlue text-center w-[65%] ">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* *********** */}
      {/* 3rd sec */}
      <section className="mt-[10rem] flex flex-col items-center">
        <h2 className=" font-[600] text-3xl text-center w-[60%] text-DarkGrayishBlue ">
          Access Clipboard anywhere
        </h2>
        <p className="text-center text-GrayishBlue w-[65%] mt-4">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </section>
      {/*  */}
    </main>
  );
}

export default App;
