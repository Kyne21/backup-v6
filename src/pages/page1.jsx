import { Helmet } from 'react-helmet-async';
import Header from "src/pages/Header/header";

import PajakTargetPenerimaan from '../sections/overview/view/pajak_target_penerimaan'

function Component(){
  return (
    <div>
      <Helmet>
        <title> One Punch Man </title>
      </Helmet>
    <Header/>
    <PajakTargetPenerimaan/>
    </div>
  )
};

export default Component;
