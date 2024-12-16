import { Helmet } from 'react-helmet-async';
import Header from "src/pages/Header/header";

import PajakTargetPenerimaan from '../sections/overview/view/pajak_target_penerimaan'
import PajakRealisasi from '../sections/overview/view/pajak_realisasi'
import PajakCapainPersen from '../sections/overview/view/pajak_capaian_persen'
import PajakDistribusi from '../sections/overview/view/pajak_distribusi_perpajakan'
import PajakRealisasiPenerimaan from '../sections/overview/view/pajak_realisasi_penerimaan'
import PajakPenerimaanTarget from '../sections/overview/view/pajak_target_penerimaan'
import PajakPrediksiRealisasi from '../sections/overview/view/pajak_prediksi_realisasi_penerimaan'
function Component(){
  return (
    <div>
      <Helmet>
        <title> One Punch Man </title>
      </Helmet>
    <Header/>
    <PajakTargetPenerimaan/>
    <PajakRealisasi/>
    <PajakCapainPersen/>
    <PajakDistribusi/>
    <PajakRealisasiPenerimaan/>
    <PajakPenerimaanTarget/>
    <PajakPrediksiRealisasi/>
    </div>
  )
};

export default Component;
