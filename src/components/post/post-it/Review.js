import React, { Component,Fragment } from 'react'





export default function Review() {

  return (
    <Fragment>
    <ul class="timeline">

    	<li>
    		<div class="direction-r">
    			<div class="flag-wrapper">
    				<span class="flag">E-Code</span>
    				<span class="time-wrapper"><span class="time"><b>{localStorage.getItem('eCode')}</b></span></span>
    			</div>
    		</div>
    	</li>
    	<li>
    		<div class="direction-l">
    			<div class="flag-wrapper">
    				<span class="flag">Nom</span>
    				<span class="time-wrapper"><span class="time"><b>{localStorage.getItem('lastName')} {localStorage.getItem('firstName')}</b></span></span>
    			</div>
    		</div>
    	</li>
    	<li>
    		<div class="direction-r">
    			<div class="flag-wrapper">
    				<span class="flag">Départ</span>
    				<span class="time-wrapper"><span class="time"><b>{localStorage.getItem('departure')}- {localStorage.getItem('departureDate')}</b> </span></span>
    			</div>
    		</div>
    	</li>
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Arrivée</span>
            <span class="time-wrapper"><span class="time"><b>{localStorage.getItem('departure')}- {localStorage.getItem('departureDate')}</b></span></span>
          </div>
        </div>
      </li>
      <li>
    		<div class="direction-r">
    			<div class="flag-wrapper">
    				<span class="flag">Poids</span>
    				<span class="time-wrapper"><span class="time"><b>{localStorage.getItem('allowance')} Kg </b></span></span>
    			</div>
    		</div>
    	</li>
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Kilo à vendre</span>
            <span class="time-wrapper"><span class="time"><b>{localStorage.getItem('kilo')} Kg</b></span></span>
          </div>
        </div>
      </li>
      <li>
    		<div class="direction-r">
    			<div class="flag-wrapper">
    				<span class="flag">Prix Unitaire</span>
    				<span class="time-wrapper"><span class="time"><b>{localStorage.getItem('prixUnit')} €/Kg </b></span></span>
    			</div>
    		</div>
    	</li>
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Total</span>
            <span class="time-wrapper"><span class="time"><b>{localStorage.getItem('prixTotal')} €</b></span></span>
          </div>
        </div>
      </li>
    </ul>

    </Fragment>
  );
}
