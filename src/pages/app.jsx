import { Helmet } from 'react-helmet-async';
import Header from 'src/pages/Header/header';

import { AppView } from 'src/sections/overview/view';
import UploadData from "../uploadData"
import Pdb_t1 from '../sections/overview/view/pdb_t1'
import Pdb_t2 from '../sections/overview/view/pdb_t2'
import Pdb_t3 from '../sections/overview/view/pdb_t3'
import Pdb_t4 from '../sections/overview/view/pdb_t4'
 
// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>
      
      <Header />
      {/* <UploadData/> */}
      <Pdb_t1/> 
      <Pdb_t2/> 
      <Pdb_t3/> 
      <Pdb_t4/> s
      {/* <AppView /> */}
    </>
  );
}
