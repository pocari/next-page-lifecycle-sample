import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { NextPageWithLayout } from 'next'
import DefaultLayout from '~/layouts/DefaultLayout';

const Child1: NextPageWithLayout = () => {
  const [value, setValue] = useState(0);
  console.log(`initialize------------------------- value ${value}`);

  useEffect(() => {
    console.log(`useeffect---------------------------- value ${value}`);
    return () => {
      console.log(`cleanup---------------------------- value ${value}`);
    };
  }, []);
  const inc = useCallback(() => {
    setValue(value + 1)
  }, [value]);

  const dec = useCallback((_e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    setValue(value - 1)
  }, [value]);

  return (
    <div>
      <h1>hello, child1</h1>
      <div>value is {value}</div>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>

      <div><Link href="/">Home</Link></div>
    </div>
  );
};

Child1.getLayout= (page) => <DefaultLayout>{page}</DefaultLayout>;
export default Child1;
