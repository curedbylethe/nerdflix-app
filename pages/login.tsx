import { NextPage } from "next";
import Head from "next/head";
import LoginCard from "../components/login-card";
import Logo from "../components/navBar/logo";

const Login: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className=" bg-gradient-to-b from-red-300 to-transparent dark:from-gray-700">
        <Logo />
      </div>
      <div className="flex items-center justify-center align-middle">
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
