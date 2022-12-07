import Link from 'next/link'
import { NextPageWithLayout } from 'next'
import DefaultLayout from '~/layouts/DefaultLayout';

const Home: NextPageWithLayout = () => {
  return (
    <ul>
      <li><Link  href="/child1">Child1</Link></li>
      <li><Link  href="/child2">Child2</Link></li>
    </ul>
  )
}

Home.getLayout= (page) => <DefaultLayout>{page}</DefaultLayout>;
export default Home;
