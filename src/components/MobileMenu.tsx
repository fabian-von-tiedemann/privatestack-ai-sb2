import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navigation: Array<{ name: string; href: string; }>;
}

export function MobileMenu({ isOpen, setIsOpen, navigation }: MobileMenuProps) {
  const location = useLocation();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="h-full flex flex-col">
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M26.4564 52.3418C24.3955 53.0107 23 54.9308 23 57.0976V89.9615C23 90.0986 23.0056 90.2348 23.0166 90.3697V113.079C23.0056 113.216 23 113.354 23 113.494V119.228L35 123.534V123.488L44.7918 127.049L52.2192 129.714L52.2151 129.748L127.105 156.981C131.033 158.409 135.349 158.341 139.229 156.788L221 124.08V138.231L132.796 173.513L35 137.95V137.922L23 133.583V142.853C23 143.155 23.027 143.451 23.0791 143.741V164.55C23.0272 164.839 23 165.139 23 165.448V171.15L35 175.486V175.442L54.7649 182.629L54.863 182.664L127.105 208.934C131.033 210.363 135.349 210.294 139.229 208.742L221 176.034V190.185L132.796 225.466L35 189.904V189.858L23 185.484V194.807C23 196.91 24.3153 198.788 26.2913 199.506L131.206 237.657C132.361 238.077 133.631 238.057 134.772 237.6L229.857 199.566C231.755 198.807 233 196.969 233 194.924V165.694C233 162.157 229.427 159.738 226.143 161.052L134.772 197.6C133.631 198.057 132.361 198.077 131.206 197.657L34.9375 162.65V150.696L131.206 185.703C132.361 186.123 133.631 186.103 134.772 185.647L229.857 147.613C231.755 146.853 233 145.015 233 142.97V113.741C233 110.203 229.427 107.785 226.143 109.098L134.772 145.647C133.631 146.103 132.361 146.123 131.206 145.703L34.959 110.704V102.567H34.9482V82.6504H35V62.185L132.816 30.4369L221 61.9212V85.3392L132.796 120.621L46.9395 89.4001V102.169L131.206 132.811C132.361 133.231 133.631 133.211 134.772 132.755L229.857 94.7208C231.755 93.9615 233 92.123 233 90.0784V56.9876C233 54.8744 231.671 52.9893 229.681 52.2787L134.604 18.3336C133.564 17.9622 132.43 17.9457 131.38 18.2867L26.4564 52.3418Z" fill="currentColor"/>
            </svg>
            privatestack<span className="text-blue-600">.ai</span>
          </Link>
        </div>
        <div className="mt-6 flex-1">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                  location.pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 space-y-3">
            <Button variant="outline" className="w-full">
              Gå med i waitlist
            </Button>
            <Button className="w-full">
              Kontakta oss
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}