
import { FiSend } from "react-icons/fi";

const AboutComponent = () => {
    return (
        <div className="container py-8 px-8 ">
            <br /><br />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 grid-flow-row-dense">
                <div className="mb-4 md:col-span-2 lg:col-span-2 lg:row-span-3">
                    <div className="h-full   bg-[#ffe9ec]` rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg overflow-hidden">
                        <span className="font-serif text-5xl">The Best Solution For Your Investment</span><br />
                        <p>
                            Check out our latest listings
                            <br /><br />
                            <NeumorphismButton />
                            <br />
                        </p>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-1 lg:row-span-2">
                    <div className="h-full p-5 border border-purple-600   bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
                    <br />
                    <span className="font-serif text-4xl">Rent & Sale</span><br />    
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-2 lg:row-span-2">
                    <div className="h-full p-5 border border-purple-600   bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
                    <span className="font-serif text-3xl">Prime Locations of Dubai are under Your Reach Now!</span><br />
                        
                    </div>
                </div>

            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}

const NeumorphismButton = () => {
    return (
        <button
            className={`
          px-4 py-2 rounded-full 
          flex items-center gap-2 
          text-slate-500
          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
          
          transition-all
  
          hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
          hover:text-violet-500
      `}
        >
            <FiSend />
            <span>Get in Touch</span>
        </button>
    );
};


export default AboutComponent;