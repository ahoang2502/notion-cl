import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
	return <div className="h-full bg-red-500">{children}</div>;
};

export default AuthLayout;
