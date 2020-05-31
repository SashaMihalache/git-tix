import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/Header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (AppContext) => {
  const { data } = await buildClient(AppContext.ctx).get(
    "/api/users/currentuser"
  );

  let pageProps = {};

  if (AppContext.Component.getInitialProps) {
    pageProps = await AppContext.Component.getInitialProps(AppContext.ctx);
  }

  return {
    pageProps,
    ...data, // to spread currentUser
  };
};

export default AppComponent;
