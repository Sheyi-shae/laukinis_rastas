import CompanyDetails from '@/_components/contact/CompanyDetails'
import ContactHero from '@/_components/contact/contact-hero'

import ContactDetails from '@/_components/contact/ContactDetails'
import React from 'react'

export default function page() {
  return (
    <div>
      <ContactHero />
      <ContactDetails />
      <CompanyDetails />
    </div>
  )
}
