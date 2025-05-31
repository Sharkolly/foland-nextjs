import Home from './Home'
import AboutUs from './AboutUs'
import BasedLocation from './BasedLocation'
import Rate from './Rate'
import CTA from './CTA'
import WithNavAndFooter from '../Layout/WithNavAndFooter'

const HomeLayout = () => {
  return (
    <>
      <WithNavAndFooter>
      <Home/>
      <AboutUs/>
      <BasedLocation/>
      <Rate/>
      <CTA/>
      </WithNavAndFooter>
    </>
  )
}

export default HomeLayout
