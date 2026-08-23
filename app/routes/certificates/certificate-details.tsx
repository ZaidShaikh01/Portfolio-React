import { InteractiveHoverButton } from '~/components/ui/interactive-hover-button';
import type { certificateData } from '~/types/certificateData';

type CertificateDetailsProps = {
  section: certificateData;
};

const CertificateDetails = ({ section }: CertificateDetailsProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 lg:gap-8 h-full w-full p-5 lg:p-8'>
      {/* Certificate Title */}
      <h2 className='text-2xl lg:text-3xl font-medium text-center'>
        {section.certificateTitle}
      </h2>

      {/* Dates */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-lg lg:text-xl'>
        <div>
          <span className='text-gray-400'>
            {section.endDate ? 'From - ' : 'Issued Date - '}
          </span>
          <span className='text-indigo-500'>
            {section.beginDate.toLocaleDateString()}
          </span>
        </div>

        {section.endDate && (
          <div>
            <span className='text-gray-400'>To - </span>
            <span className='text-indigo-500'>
              {section.endDate.toLocaleDateString()}
            </span>
          </div>
        )}
      </div>

      {/* Details + Image */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-5xl'>
        {/* Certificate Details */}
        <div className='text-base lg:text-lg text-gray-300 leading-relaxed text-center lg:text-left w-full lg:w-1/2'>
          {section.certificateDetails}
        </div>

        {/* Certificate Image (only on large screens) */}
        <div className='hidden lg:block w-48 flex-shrink-0'>
          <img
            src={section.certificateLogoURL}
            alt={section.certificateTitle}
            className='w-full h-auto object-contain rounded-lg'
          />
        </div>
      </div>

      {/* Download Button */}
      <InteractiveHoverButton className='w-60 h-12 lg:text-sm mt-2'>
        Download certificate
      </InteractiveHoverButton>
    </div>
  );
};

export default CertificateDetails;
