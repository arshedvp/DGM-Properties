import React, { useState } from "react";
import styles from '../app/globals.css';

const BentoComponent = () => {

    const [count, setCount] = useState(0);

    const handleHover = () => {
        let counter = 0;
        const interval = setInterval(() => {
            if (counter === 10) {
                counter = 110;
            }
            if (counter <= 110) {
                setCount(counter);
                counter++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    };

    return (
        <div className="container py-8 mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 grid-flow-row-dense">
                <div className="mb-4 md:col-span-2 lg:col-span-2 lg:row-span-3">
                    <div className="h-full bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg overflow-hiddenhover:transform hover:scale-105 transition-transform">
                        <img src="/img/p1.jpg" alt="" className="w-full h-full object-cover rounded-xl" onMouseEnter={handleHover}/>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-1 lg:row-span-1">
                    <div className="h-full p-5  bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
                        <h2 className="font-serif text-3xl">Dubai's best property management company</h2>
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-1 lg:row-span-1">
                    <div className="h-full p-5 bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
                        <h2 className="font-serif">&nbsp;</h2>
                    </div>
                </div>

                <div className="mb-4 md:col-span-1 lg:col-span-1 lg:row-span-2 relative overflow-hidden hover:transform hover:scale-105 transition-transform">
                    <div className="h-full bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
                        <img
                            src="/img/p2.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                            onMouseEnter={handleHover}
                        />
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-1 lg:row-span-2 relative overflow-hidden hover:transform hover:scale-105 transition-transform">
                    <div className="h-full   bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
                        <img
                            src="/img/i2.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                            onMouseEnter={handleHover}
                        />
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-2 lg:row-span-1">
                    <div className="h-40   bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                        <img src="/img/i4.jpg" alt="" className="w-full h-full object-cover" onMouseEnter={handleHover} />
                    </div>
                </div>
                <div className="mb-4 md:col-span-1 lg:col-span-2 lg:row-span-1">
                    <div className="h-40   bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                        <img src="/img/i3.jpg" alt="" className="w-full h-full object-cover" onMouseEnter={handleHover} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BentoComponent;
