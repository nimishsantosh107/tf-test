import * as React from "react";

const BaseTemplate = ({ children }: React.PropsWithChildren) => {
    return <div className="w-full flex justify-center pt-32">{children}</div>;
};

export default BaseTemplate;
