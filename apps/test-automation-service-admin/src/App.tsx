import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UrlList } from "./url/UrlList";
import { UrlCreate } from "./url/UrlCreate";
import { UrlEdit } from "./url/UrlEdit";
import { UrlShow } from "./url/UrlShow";
import { SitemapList } from "./sitemap/SitemapList";
import { SitemapCreate } from "./sitemap/SitemapCreate";
import { SitemapEdit } from "./sitemap/SitemapEdit";
import { SitemapShow } from "./sitemap/SitemapShow";
import { TestResultList } from "./testResult/TestResultList";
import { TestResultCreate } from "./testResult/TestResultCreate";
import { TestResultEdit } from "./testResult/TestResultEdit";
import { TestResultShow } from "./testResult/TestResultShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TestAutomationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Url"
          list={UrlList}
          edit={UrlEdit}
          create={UrlCreate}
          show={UrlShow}
        />
        <Resource
          name="Sitemap"
          list={SitemapList}
          edit={SitemapEdit}
          create={SitemapCreate}
          show={SitemapShow}
        />
        <Resource
          name="TestResult"
          list={TestResultList}
          edit={TestResultEdit}
          create={TestResultCreate}
          show={TestResultShow}
        />
      </Admin>
    </div>
  );
};

export default App;
