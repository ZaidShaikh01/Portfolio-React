import { InteractiveHoverButton } from '~/components/ui/interactive-hover-button';
import type { certificateData } from '~/types/certificateData';

type CertificateDetailsProps = {
  section: certificateData;
};
const CertificateDetails = ({ section }: CertificateDetailsProps) => {
  return (
    <div className='flex flex-col lg:justify-center items-center gap-5 sm:gap-6 lg:gap-8 w-full p-4 sm:p-6 lg:p-8 pb-24 overflow-y-auto'>
      {/* Certificate Title */}
      <h2 className='text-xl sm:text-2xl lg:text-3xl font-medium text-center px-2'>
        {section.certificateTitle}
      </h2>

      {/* Dates */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm sm:text-base lg:text-lg'>
        <div>
          <span className='text-gray-400'>
            {section.endDate ? 'From - ' : 'Issued Date - '}
          </span>
          <span className='text-indigo-500 font-medium'>
            {section.beginDate.toLocaleDateString()}
          </span>
        </div>

        {section.endDate && (
          <div>
            <span className='text-gray-400'>To - </span>
            <span className='text-indigo-500 font-medium'>
              {section.endDate.toLocaleDateString()}
            </span>
          </div>
        )}
      </div>

      {/* Details + Image */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-5 lg:gap-12 w-full max-w-4xl'>
        <div className='text-sm sm:text-base text-gray-300 leading-relaxed text-center lg:text-left w-full lg:w-1/2 px-1'>
          {section.certificateDetails}
        </div>

        <div className='w-32 sm:w-40 lg:w-48 shrink-0'>
          <img
            src={section.certificateLogoURL}
            alt={section.certificateTitle}
            className='w-full h-auto object-contain rounded-lg'
          />
        </div>
      </div>

      {/* Download Button */}
      <a
        href={section.certificateURL}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-2 mb-4 px-8 py-3 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors duration-200'
      >
        Download certificate
      </a>
    </div>
  );
};
export default CertificateDetails;
