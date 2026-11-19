import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12.031 2C6.508 2 2.023 6.484 2.023 12.005c0 1.766.461 3.49 1.337 5.01L2 22l5.121-1.343a9.97 9.97 0 0 0 4.906 1.288h.004c5.522 0 10.007-4.484 10.007-10.005C22.038 6.484 17.553 2 12.031 2Zm5.825 14.139c-.247.696-1.438 1.331-2.011 1.416-.525.078-1.189.111-1.918-.121-.443-.141-1.012-.329-1.74-.644-3.063-1.322-5.063-4.407-5.216-4.611-.152-.204-1.245-1.656-1.245-3.159 0-1.503.787-2.242 1.067-2.548.28-.305.611-.381.814-.381.204 0 .407.002.585.011.188.009.439-.071.687.524.254.611.864 2.113.941 2.266.076.153.127.331.025.535-.102.203-.153.33-.305.509-.153.178-.321.398-.458.534-.153.153-.312.318-.134.623.178.306.791 1.305 1.698 2.113 1.167 1.04 2.15 1.363 2.456 1.515.305.153.483.128.661-.076.178-.204.763-.891.966-1.196.204-.306.407-.255.687-.153.28.102 1.78.84 2.085.992.306.153.509.229.585.357.077.127.077.738-.17 1.434Z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
