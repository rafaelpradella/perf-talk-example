import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

import useHash, { createHash } from '@/hooks/useHash';
import Layout from '@/components/Layout';

import { footerData } from '@/constants/FooterData';

export default function BannerForm() {
  const hashID = useHash(60 * 24);
  const [title, setTitle] = useState(null);
  const [details, setDetails] = useState(null);
  const [bgColor, setBgColor] = useState('#663399');
  const [textColor, setTextColor] = useState('#FFFFFF');

  useEffect(() => {
    if (!bgColor && !textColor) return;
    const history = JSON.parse(localStorage.getItem('color'));
    localStorage.setItem('color', JSON.stringify({
      bgColor: [bgColor, ...history?.bgColor ?? []],
      textColor: [textColor, ...history?.textColor ?? []]
    }));
  }, [bgColor, textColor]);

  const Footer = () => {
    return (
      <footer id={hashID} className='grid grid-cols-5 gap-4'>
        {footerData.map(({ title, id }) => (
          <div key={createHash()} className='flex flex-row justify-center gap-1'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className='w-3 fill-gray-400'
              viewBox="0 96 960 960"
            >
              <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976zm-43-61v-82q-35 0-59-26t-24-61v-44L149 497q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437 915zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607 257v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393 488h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44z"></path>
            </svg>
            <Link className='text-xs text-gray-400 hover:underline' href={`#${id}`}>{title}</Link>
          </div>
        ))}
      </footer>
    );
  }

  const onSave = (e) => {
    e.preventDefault();
    if (!e || !e.currentTarget) return;

    const formData = new FormData(e.currentTarget);
    console.log([...formData.entries()]);
  }

  return (
    <Layout>
      <div className={`grid grid-cols-2 gap-24 items-center`}>
        <form
          className='flex flex-col gap-8'
          action=''
          method='post'
          onSubmit={onSave}
        >
          <div className='flex flex-col max-w-screen-xl w-max'>
            <label htmlFor='title'>Banner Title *</label>
            <input
              required
              className='bg-slate-800 rounded-xl p-3 mt-2'
              placeholder='E.g: 7-day Free Trial!'
              type='text'
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='details'>Details</label>
            <input
              className='bg-slate-800 rounded-xl p-3 mt-2'
              placeholder='E.g: Try our product, no strings attached'
              type='text'
              onChange={e => setDetails(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='bgColor'>Background Color</label>
            <input
              className='rounded-sm border-none'
              type='color'
              defaultValue={bgColor}
              onChange={e => setBgColor(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='textColor'>Text Color</label>
            <input
              className='rounded-sm'
              type='color'
              defaultValue={textColor}
              onChange={e => setTextColor(e.target.value)}
            />
          </div>
          <input className='rounded-2xl bg-orange-300 text-orange-950 font-extrabold p-4 w-56 hover:bg-orange-200 focus:scale-95' type='submit' title='Submit' />
        </form>
          <aside key={bgColor}>
            <span className='sr-only'>Banner Preview</span>
            <div
              style={{
                color: textColor,
                backgroundColor: bgColor,
                backgroundImage: `url("https://www.toptal.com/designers/subtlepatterns/uploads/moroccan-flower.png")`,
                backgroundBlendMode: 'color-burn',
              }}
              className='p-8 rounded-lg'
            >
              <h2 className='font-bold text-lg'>{title ?? 'not yet'}</h2>
              <p>{details ?? 'not yet'}</p>
            </div>
          </aside>
      </div>
      <Footer />
    </Layout>
  )
}
