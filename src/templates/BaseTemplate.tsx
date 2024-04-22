import * as React from "react";

const BaseTemplate = ({ children }: React.PropsWithChildren) => {
    return <div className="w-full flex justify-center pt-10 lg:pt-32 pb-10">{children}</div>;
};

export default BaseTemplate;
