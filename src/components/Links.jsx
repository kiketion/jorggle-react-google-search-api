import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📷 Images' },
  { url: '/video', text: '📺 Videos' },
];

export const Links = () => {
  const activeClassName =
    'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2';

  return (
    <nav className='flex items-center justify-between sm:justify-around mt-4'>
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          key={url}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
};
