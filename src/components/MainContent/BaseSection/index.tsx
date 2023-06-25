import { BaseSectionProps } from '@/interface/IBaseSectionProps';

export const BaseSection = ({
    isBlue,
    isColumn,
    children,
    isEvenly,
}: BaseSectionProps) => {
    return (
        <section
            className={`flex items-center ${
                isEvenly ? 'justify-evenly' : 'justify-center'
            } gap-2 p-5 ${isBlue ? 'bg-sectionBackground' : 'bg-white'} ${
                isColumn ? 'flex-col' : 'lg:flex-row flex-col'
            }`}
        >
            {children}
        </section>
    );
};
