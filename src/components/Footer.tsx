import React from 'react';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    if (email) {
      toast.success('Thank you for subscribing!', {
        description: `A confirmation has been sent to ${email}.`,
      });
      e.currentTarget.reset();
    }
  };
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Logo className="h-8 w-auto" />
            <p className="text-base text-gray-500 dark:text-gray-400">
              Modernizing your legacy Windows Forms applications for the cloud era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="text-base text-gray-500 dark:text-gray-400 hover:text-primary">Services</a></li>
              <li><a href="#winforms-ideas" className="text-base text-gray-500 dark:text-gray-400 hover:text-primary">Winforms Ideas</a></li>
              <li><a href="#faq" className="text-base text-gray-500 dark:text-gray-400 hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Get the latest news and updates.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2" onSubmit={handleNewsletterSubmit}>
              <Input type="email" name="email" placeholder="Enter your email" required className="flex-grow" />
              <Button type="submit" className="bg-primary text-primary-foreground">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-base text-gray-400">
          <p>&copy; {new Date().getFullYear()} Winform Modernizer. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}