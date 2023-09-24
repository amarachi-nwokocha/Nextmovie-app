"use client"
import AppIcon from '../assets/icons/AppIcon'
import IconNavHome from '../assets/icons/IconNavHome'
import IconCategoryTv from '../assets/icons/categoryTv'
import IconCategoryMovie from '../assets/icons/iconMovie'
import ProfilePic from '../assets/image-avatar.png'
import { useRouter } from "next/navigation";
import Image from 'next/image'

export default function Nav() {
  const router = useRouter();
  
  return (
    <>
      <nav className="sticky  z-50 flex items-center justify-between bg-app-semi-dark-blue p-4 md:mx-2 md:mt-0 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-5/6 lg:flex-col lg:py-9">
        <button onClick={() => router.push("/")}>
          <AppIcon />
        </button>

        <div className="  items-center justify-between lg:h-[200px] md:flex md:space-between  lg:flex-col 2xs:w-2/5">
          <button onClick={() => router.push("/")} className='py-4 md:px-3 text-app-pure-white w-4'>
            <IconNavHome />
          </button>

          <button onClick={() => router.push("/tv")} className='py-8  md:px-6 fill-current text-app-greyish-blue w-4'>
            <IconCategoryTv />
          </button>

          <button onClick={() => router.push("/movie")} className='md:px-6 py-3 text-app-greyish-blue w-4' >
            <IconCategoryMovie />
          </button>
        </div>
        <div className="flex items-center justify-center rounded-full bg-app-pure-white p-px">
          <Image
            className="rounded-full"
            src= {ProfilePic}
            alt="user avatar"
            height={24}
            width={24}
            unoptimized
          />
        </div>
      </nav>
    </>
  );
}
