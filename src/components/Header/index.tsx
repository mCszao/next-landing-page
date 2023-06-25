import Image from 'next/image';
import Logo from '../../assets/images/logo.png';
import { StyledHeader } from './StyledHeader';
export default function Header() {
    return (
        <StyledHeader>
            <Image src={Logo} alt={'Logo'} />
        </StyledHeader>
    );
}
