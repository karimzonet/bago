import React from 'react'
import AppLink from '../../../others/link/link'

const UpdateInstruction = () => (
  <div className="sabout_one">
    <img src="/images/tree.png" />

    <div className="sabout_one_info">
      <span>Editer ou mettre à jour ton profil afin de le rendre attractif</span>

      <AppLink url="/" className="sec_btn" label="Mettre à jour" />
      <AppLink url="/edit-profile" className="pri_btn" label="Editer" />
    </div>
  </div>
)

export default UpdateInstruction
