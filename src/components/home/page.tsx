import React from 'react'
import { HeroSection } from './HeroSection'
import { BestOfAirMax } from '../sections/BestOfAirMax'
import { Featured } from '../sections/Featured'
import { GearUp } from '../sections/GearUp'
import { DontMiss } from '../sections/DontMiss'
import { TheEssentials } from '../sections/TheEssentials'
import { FooterNav } from '../sections/FooterNav'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BestOfAirMax />
      <Featured />
      <GearUp />
      <DontMiss />
      <TheEssentials />
      <FooterNav />
    </>
  )
}

export default HomePage