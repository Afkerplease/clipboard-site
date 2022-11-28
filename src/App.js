import "./App.css";
import clipboardLogo from "./images/logo.svg";
import computer from "./images/image-computer.png";
import ipad from "./images/image-devices.png";
import paper from "./images/icon-blacklist.svg";
import text from "./images/icon-text.svg";
import peak from "./images/icon-preview.svg";
import google from "./images/logo-google.png";
import ibm from "./images/logo-ibm.png";
import microsoft from "./images/logo-microsoft.png";
import entreprise from "./images/logo-hp.png";
import vector from "./images/logo-vector-graphics.png";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";

function App() {
  return (
    <main className=" font-Bai">
      {/* 1st sec */}
      <section className="  pt-20 gap-4   flex flex-col items-center bg-[url('./images/bg-header-mobile.png')] bg-no-repeat bg-top-right bg-cover  ">
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
            <div className=" mt-10 flex flex-col items-center gap-2">
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
        <img src={ipad} className=" w-[70%] mt-10  " alt="" />
      </section>
      {/*  */}
      {/* 4th sec */}
      <section className="mt-[10rem] flex flex-col items-center">
        <h2 className=" font-[600] text-3xl text-center w-[60%] text-DarkGrayishBlue ">
          Supercharge your workflow
        </h2>
        <p className="text-center text-GrayishBlue w-[65%] mt-4">
          We’ve got the tools to boost your productivity.
        </p>
        <div>
          <div className=" mt-20 flex flex-col items-center gap-2">
            <img src={paper} className="mb-6" alt="" />
            <h3 className=" font-[600] text-xl  text-DarkGrayishBlue ">
              Create blacklists
            </h3>
            <p className=" text-GrayishBlue text-center w-[65%] ">
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>
          <div className=" mt-20 flex flex-col items-center gap-2">
            <img src={text} className="mb-6" alt="" />
            <h3 className=" font-[600] text-xl  text-DarkGrayishBlue ">
              Plain text snippets
            </h3>
            <p className=" text-GrayishBlue text-center w-[65%] ">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className=" mt-20 flex flex-col items-center gap-2">
            <img src={peak} className="mb-6" alt="" />
            <h3 className=" font-[600] text-xl  text-DarkGrayishBlue ">
              Sneak preview
            </h3>
            <p className=" text-GrayishBlue text-center w-[65%] ">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      {/* 5th sec */}
      <section className="mt-[10rem] flex gap-[4rem] flex-col items-center">
        <img src={google} alt="" />
        <img src={ibm} alt="" />
        <img src={microsoft} alt="" />
        <img src={entreprise} alt="" />
        <img src={vector} alt="" />
      </section>
      {/*  */}
      {/* 6th sec */}
      <section className="mt-[10rem] pb-20 flex  flex-col items-center">
        <h2 className=" font-[600] text-3xl text-center w-[60%] text-DarkGrayishBlue ">
          Clipboard for iOS and Mac OS
        </h2>
        <p className="text-center text-GrayishBlue w-[60%] mt-4">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
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
      {/*  */}
      <footer className=" bg-Grayish mt-[10rem] pb-20 flex  flex-col items-center">
        <img src={clipboardLogo} className=" w-[10%] mt-8 " alt="" />
        <ul className=" flex flex-col items-center gap-4 mt-8">
          <li>
            {" "}
            <a className=" font-[600] text-DarkGrayishBlue " href="#">
              FAQs
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className=" font-[600] text-DarkGrayishBlue" href="#">
              Contact Us
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className=" font-[600] text-DarkGrayishBlue" href="#">
              Privacy Policy
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className=" font-[600] text-DarkGrayishBlue" href="#">
              Press Kit
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className=" font-[600] text-DarkGrayishBlue" href="#">
              Install Guide
            </a>{" "}
          </li>
        </ul>
        <div className=" mt-10 w-[100%] gap-10 flex justify-center items-center">
          <img className=" cursor-pointer" src={facebook} alt="" />
          <img className=" cursor-pointer" src={twitter} alt="" />
          <img className=" cursor-pointer  " src={instagram} alt="" />
        </div>
      </footer>
    </main>
  );
}

export default App;
