import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
export function Layout() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-sans flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}