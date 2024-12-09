import { Container } from './Container';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const certifications = [
  {
    src: '/iso27001.svg',
    alt: 'ISO 27001 Certification',
    className: 'h-16 w-auto'
  },
  {
    src: '/aaa.svg',
    alt: 'AAA Credit Rating',
    className: 'h-16 w-auto'
  },
  {
    src: '/iso9001.svg',
    alt: 'ISO 9001 Certification',
    className: 'h-16 w-auto'
  },
  {
    src: '/iso14001.svg',
    alt: 'ISO 14001 Certification',
    className: 'h-16 w-auto'
  },
  {
    src: '/iso45001.svg',
    alt: 'ISO 45001 Certification',
    className: 'h-16 w-auto'
  },
  {
    src: '/gptw.svg',
    alt: 'Great Place to Work Certification',
    className: 'h-24 w-auto'
  }
];

const navigation = {
  main: [
    { name: 'Platform', href: '/product' },
    { name: 'Priser', href: '/pricing' },
    { name: 'Kunder', href: '/customers' },
    { name: 'Blogg', href: '/blog' },
    { name: 'Om Oss', href: '/about' },
  ],
  legal: [
    { name: 'Integritetspolicy', href: '#' },
    { name: 'Cookiepolicy', href: '#' },
    { name: 'Villkor', href: '#' },
  ],
  social: [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-16">
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2">
              <div>
                <Link to="/" className="text-2xl font-bold flex items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.4564 52.3418C24.3955 53.0107 23 54.9308 23 57.0976V89.9615C23 90.0986 23.0056 90.2348 23.0166 90.3697V113.079C23.0056 113.216 23 113.354 23 113.494V119.228L35 123.534V123.488L44.7918 127.049L52.2192 129.714L52.2151 129.748L127.105 156.981C131.033 158.409 135.349 158.341 139.229 156.788L221 124.08V138.231L132.796 173.513L35 137.95V137.922L23 133.583V142.853C23 143.155 23.027 143.451 23.0791 143.741V164.55C23.0272 164.839 23 165.139 23 165.448V171.15L35 175.486V175.442L54.7649 182.629L54.863 182.664L127.105 208.934C131.033 210.363 135.349 210.294 139.229 208.742L221 176.034V190.185L132.796 225.466L35 189.904V189.858L23 185.484V194.807C23 196.91 24.3153 198.788 26.2913 199.506L131.206 237.657C132.361 238.077 133.631 238.057 134.772 237.6L229.857 199.566C231.755 198.807 233 196.969 233 194.924V165.694C233 162.157 229.427 159.738 226.143 161.052L134.772 197.6C133.631 198.057 132.361 198.077 131.206 197.657L34.9375 162.65V150.696L131.206 185.703C132.361 186.123 133.631 186.103 134.772 185.647L229.857 147.613C231.755 146.853 233 145.015 233 142.97V113.741C233 110.203 229.427 107.785 226.143 109.098L134.772 145.647C133.631 146.103 132.361 146.123 131.206 145.703L34.959 110.704V102.567H34.9482V82.6504H35V62.185L132.816 30.4369L221 61.9212V85.3392L132.796 120.621L46.9395 89.4001V102.169L131.206 132.811C132.361 133.231 133.631 133.211 134.772 132.755L229.857 94.7208C231.755 93.9615 233 92.123 233 90.0784V56.9876C233 54.8744 231.671 52.9893 229.681 52.2787L134.604 18.3336C133.564 17.9622 132.43 17.9457 131.38 18.2867L26.4564 52.3418Z" fill="currentColor"/>
                  </svg>
                  privatestack<span className="text-blue-600">.ai</span>
                </Link>
                <p className="text-sm text-gray-600 max-w-xs">
                  En tjänst som utvecklas och tillhandahålls av Digitalist Open Tech
                </p>
                <div className="mt-6">
                  <svg width="195" height="50" viewBox="0 0 195 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1703_326)">
                      <g clipPath="url(#clip1_1703_326)">
                        <path d="M71.8915 16.3916V10.9951H77.084V16.3916H71.8915Z" fill="black"/>
                        <path d="M103.265 16.3917V10.9951H108.458V16.3917H103.265Z" fill="black"/>
                        <path d="M154.46 16.3917V10.9951H159.653V16.3917H154.46Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H38.1284V49.9784H0V0ZM10.5462 39.1497H17.0361V21.6573H10.5462V39.1497ZM27.5823 39.1497H21.0923V10.8286H27.5823V39.1497Z" fill="black"/>
                        <path d="M57.5237 39.4621C52.0592 39.4621 48.6746 34.3119 48.6746 29.0242C48.6746 23.8266 51.9964 18.5863 57.5237 18.5863C59.6857 18.5863 61.9209 19.5147 63.4109 21.1317V10.9951H68.6034V39.0826H63.7035L63.5925 36.7399C62.138 38.5737 59.7819 39.4621 57.5237 39.4621ZM58.6938 34.9833C61.8235 34.9833 63.5938 32.0143 63.5938 29.0242C63.5938 26.0863 61.8621 23.1031 58.6938 23.1031C55.5602 23.1031 53.867 26.0405 53.867 29.0242C53.867 31.9542 55.4888 34.9833 58.6938 34.9833Z" fill="black"/>
                        <path d="M71.8915 39.0827V19.0039H77.084V39.0827H71.8915Z" fill="black"/>
                        <path d="M89.605 47.8126C86.8387 47.8126 83.6781 47.0722 81.4504 45.3075L83.2789 41.4359C84.9485 42.6493 87.061 43.2578 89.0923 43.2578C92.4841 43.2578 94.6874 41.2449 94.6874 37.7922V36.4185C93.3124 38.1929 90.9614 39.0827 88.8003 39.0827C83.3844 39.0827 79.5122 34.4754 79.5122 28.9864C79.5122 23.6472 83.0704 18.5864 88.6542 18.5864C90.9565 18.5864 93.2856 19.5711 94.8327 21.3423L94.9065 19.0039H99.8802V37.5645C99.8802 43.6327 95.6293 47.8126 89.605 47.8126ZM89.751 34.7557C92.88 34.7557 94.8335 32.0952 94.8335 28.9864C94.8335 25.9451 92.9368 23.2171 89.751 23.2171C86.6545 23.2171 84.7043 25.9333 84.7043 28.9864C84.7043 32.019 86.5612 34.7557 89.751 34.7557Z" fill="black"/>
                        <path d="M103.265 39.0827V19.0039H108.458V39.0827H103.265Z" fill="black"/>
                        <path d="M130.245 39.4622C124.881 39.4622 121.688 34.0587 121.688 28.9864C121.688 23.834 124.966 18.5864 130.464 18.5864C132.809 18.5864 135.069 19.6702 136.462 21.6362V19.0039H141.617V39.0827H136.389V36.4594C134.92 38.3555 132.598 39.4622 130.245 39.4622ZM131.671 34.7937C134.831 34.7937 136.535 31.9306 136.535 28.9864C136.535 26.0349 134.722 23.2171 131.671 23.2171C128.596 23.2171 126.844 26.1191 126.844 28.9864C126.844 31.9471 128.596 34.7937 131.671 34.7937Z" fill="black"/>
                        <path d="M145.397 39.0826V10.9951H150.589V39.0826H145.397Z" fill="black"/>
                        <path d="M154.46 39.0827V19.0039H159.653V39.0827H154.46Z" fill="black"/>
                        <path d="M170.245 39.4622C167.186 39.4622 164.033 38.4951 162.054 35.9703L165.271 33.0856C166.654 34.6133 168.544 35.4389 170.574 35.4389C171.699 35.4389 173.024 34.9007 173.024 33.5411C173.024 31.7654 170.515 31.468 169.258 31.1119C166.091 30.2739 162.675 28.5494 162.675 24.6594C162.675 20.7102 166.679 18.5864 170.135 18.5864C172.944 18.5864 175.855 19.6271 177.85 21.6988L175.072 24.8871C173.829 23.6691 172.074 22.5718 170.318 22.5718C169.145 22.5718 167.721 22.9734 167.721 24.3937C167.721 25.5766 168.752 26.0082 169.659 26.3674C173.028 27.6386 177.96 28.3307 177.96 33.0477C177.96 37.2229 173.924 39.4622 170.245 39.4622Z" fill="black"/>
                        <path d="M188.938 39.0829V33.6863H194.13V39.0829H188.938Z" fill="black"/>
                        <path d="M112.12 39.0826V10.9951H117.312V19.0038H121.261V24.2121H117.312V39.0826H112.12Z" fill="black"/>
                        <path d="M180.546 39.0826V10.9951H185.739V19.0038H189.688V24.6001H185.739V39.0826H180.546Z" fill="black"/>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1703_326">
                        <rect width="194.13" height="50" fill="white"/>
                      </clipPath>
                      <clipPath id="clip1_1703_326">
                        <rect width="194.13" height="49.9784" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  Digitalist Open Tech AB<br />
                  Götgatan 55<br />
                  11621 Stockholm, Sweden
                </p>
              </div>
              <div className="mt-6 flex gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-gray-600"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Juridiskt</h3>
              <ul className="mt-4 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Bottom */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {certifications.map((cert) => (
                <img
                  key={cert.alt}
                  src={cert.src}
                  alt={cert.alt}
                  className={cert.className}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} privatestack.ai. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}