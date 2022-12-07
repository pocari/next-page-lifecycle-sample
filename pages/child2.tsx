import Link from "next/link";
import { NextPageWithLayout } from 'next'
import DefaultLayout from '~/layouts/DefaultLayout';

const Child2: NextPageWithLayout = () => {
  return (
    <div>
      <h1>hello, child2</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

Child2.getLayout= (page) => <DefaultLayout>{page}</DefaultLayout>;
export default Child2;
