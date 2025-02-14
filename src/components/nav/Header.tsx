import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';
import Name from '../../images/logos/app-name.svg';

export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex flex-col items-center justify-center">
        <Link href="/" className="flex justify-center w-full py-2">
          <Image src={Name} width={520} alt="" className="ml-2 mt-0.5" />
        </Link>
        <div className="mt-4">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}
