'use client';
import React from 'react';
import { LogoutLink } from "@/utils/ory/hooks";
import Link from 'next/link';
import { useEnv } from '@/components/context/EnvContext';

const Sidebar = () => {
  const onLogout = LogoutLink()
  const env = useEnv()

  return (
    <aside className="w-fit min-w-56 px-2 shrink-0 bg-base-200 text-base-content border-r border-base-300 p-4">
        <ul className="anchor-menu-list menu bg-base-200 text-base-content min-h-full w-fit min-w-56 px-2">
          <li>
            <h3 className="menu-title text-lg font-bold normal-case text-base-content">
              Data Access
            </h3>
          </li>
          <li>
            <Link
              href="/datasets"
              className="anchor-menu-link bg-transparent! hover:text-brand-blue!"
            >
              Browse Datasets
            </Link>
          </li>
          <li>
            <Link
              href="/passport"
              className="anchor-menu-link bg-transparent! hover:text-brand-blue!"
            >
              View Passport Token
            </Link>
          </li>
          <div className="flex w-full flex-col">
            <div className="divider" />
          </div>
          <li>
            <h3 className="menu-title text-lg font-bold normal-case text-base-content">
              GA4GH APIs
            </h3>
          </li>
          <li>
            <Link
              href="/drs"
              className="anchor-menu-link bg-transparent! hover:text-brand-blue!"
            >
              DRS
            </Link>
          </li>
          <li><a aria-disabled="true" className="anchor-menu-link pointer-events-none opacity-50" href="#">Beacon</a></li>
          <li><a aria-disabled="true" className="anchor-menu-link pointer-events-none opacity-50" href="#">htsget</a></li>
          <li><a aria-disabled="true" className="anchor-menu-link pointer-events-none opacity-50" href="#">refget</a></li>
          <div className="flex w-full flex-col">
            <div className="divider" />
          </div>
          <li>
            <h3 className="menu-title text-lg font-bold normal-case text-base-content">
              Docs & Guides
            </h3>
          </li>
          <li>
            <a
              href={env.REFCLOUD_DOCS_URL}
              target="_blank"
              className="anchor-menu-link bg-transparent! hover:text-brand-blue!"
            >Reference Cloud Docs
            </a>
          </li>
          <li><a aria-disabled="true" className="anchor-menu-link pointer-events-none opacity-50" href="#">OpenAPI Reference</a></li>
          <div className="flex w-full flex-col">
            <div className="divider" />
          </div>
          <li>
            <h3 className="menu-title text-lg font-bold normal-case text-base-content">
              Settings
            </h3>
          </li>
          <li><a aria-disabled="true" className="anchor-menu-link pointer-events-none opacity-50" href="#">Manage Profile</a></li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onLogout();
              }}
              className="anchor-menu-link bg-transparent! hover:text-brand-blue!"
            >
              Logout
            </a>
          </li>
        </ul>
    </aside>
  )
}

export default Sidebar;
