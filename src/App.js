import "./App.css";
import clipboardLogo from "./images/logo.svg";
import computer from "./images/image-computer.png";

function App() {
  return (
    <main className=" font-Bai">
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
          <div>
            <h3>Quick Search</h3>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
            <h3>Complete History</h3>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
