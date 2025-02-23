import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

type HeaderLinkProps = {
    title: string;
    link: string;
    offset: number;
} 

const HeaderLink = ( { link, title, offset }:HeaderLinkProps ) => {
    return (
        <motion.div
            className='relative inline-block font-[manrope] z-20'
            whileHover="hover"
            initial="initial"
        >
            <Link
                className='relative text-lg cursor-pointer'
                to={link}
                smooth={true}
                offset={offset}
                duration={500}
            >
                <span>{title}</span>
            </Link>
            <motion.div
                className='absolute bottom-0 left-0 h-[2px] bg-[#fff]'
                variants={{
                    initial: { width: 0 },
                    hover: { width: '100%' },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
        </motion.div>
    )
}

export default HeaderLink