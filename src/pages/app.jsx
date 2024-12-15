import { Helmet } from 'react-helmet-async';
import Header from 'src/pages/Header/header';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>
      
      <Header />
      <AppView />
    </>
  );
}
