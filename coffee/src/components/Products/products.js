import React from 'react';
import Solimo from '../../img/solimo.png';
import Presto from '../../img/presto.png';
import Aromitico from '../../img/aromitico.png';
import BigItemImg from '../../img/aromitico-item.jpg';


export const products = [
  {
    id: 1,
    title: "Solimo",
    description: "Solimo Coffee Beans 2 kg",
    bigdescr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    country: "Kenya",
    price: "10.73$",
    image: Solimo,
    bigimg: BigItemImg,
    alt: "Solimo Coffee Beans"
  },
  {
    id: 2,
    title: "Presto",
    description: "Presto Coffee Beans 1 kg",
    bigdescr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    country: "Columbia",
    price: "15.99$",
    image: Presto,
    bigimg: BigItemImg,
    alt: "Presto Coffee Beans"
  },
  {
    id: 3,
    title: "AROMISTICO",
    description: "AROMISTICO Coffee 1 kg",
    bigdescr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    country: "Brazil",
    price: "6.99$",
    image: Aromitico,
    bigimg: BigItemImg,
    alt: "AROMISTICO Coffee"
  }
];