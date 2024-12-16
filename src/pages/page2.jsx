import { Helmet } from 'react-helmet-async';

import Header from "src/pages/Header/header";

function Component(){
  return (
    <div>
      <Helmet>
        <title> One Punch Man </title>
      </Helmet>
    <Header/>

    </div>
  )
};

export default Component;
