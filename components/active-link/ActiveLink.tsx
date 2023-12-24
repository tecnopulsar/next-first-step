'use client';

import Link from "next/link";
import {usePathname} from 'next/navigation';

import style from './ActiveLink.module.css';


interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

    const pathname = usePathname()

  return (
    <Link href={path} className={`${style.link} ${(pathname === path) && style["active-link"]}`}>
      {text}
    </Link>
  );
};
