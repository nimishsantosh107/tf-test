import React, { useContext } from "react";
import Spinner from "@/components/Spinner";
import { SpinnerContext } from "@/contexts";

const BaseTemplate = ({ children }: React.PropsWithChildren) => {
    const { spinnerVisible } = useContext(SpinnerContext);

    return (
        <div className="w-full flex justify-center pt-10 lg:pt-32 pb-10">
            <div>
                {spinnerVisible && (
                    <>
                        <div className="w-full h-full fixed top-0 left-0 bg-slate-800 opacity-75 z-50">
                            <div className="flex justify-center items-center mt-[50vh]">
                                <Spinner />
                            </div>
                        </div>
                    </>
                )}
            </div>
            <>{children}</>
        </div>
    );
};

export default BaseTemplate;
