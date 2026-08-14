import { InteractiveHoverButton } from '~/components/ui/interactive-hover-button';
import type { certificateData } from '~/types/certificateData';

type CertificateDetailsProps = {
  section: certificateData ;
};

const CertificateDetails = ({ section }: CertificateDetailsProps) => {
  return (
    <div className='flex-9 flex justify-center items-center flex-col gap-8 h-full w-full p-5'>
      <div className='text-3xl text-center'>{section.certificateTitle}</div>
      <div className='flex  w-full justify-around'>
        <div>
          <span className='text-xl'>From - </span>
          <span className='text-indigo-500 text-xl'>{section.beginDate.toLocaleDateString()}</span>
        </div>
        <div>
          <span className='text-xl'>To - </span>
          <span className='text-indigo-500 text-xl'>{section.endDate.toLocaleDateString()}</span>
        </div>
      </div>

      {/* Details of certificate & Image preview*/}
      <div className='flex justify-center items-center gap-20 w-full px-30 '>
        <div className='detials w-2/4 '>
          {section.certificateDetails}
        </div>
        <div className='image-container w-1/4'>
          <img
            src={section.certificateLogoURL}
            className=' w-full object-cover'
            alt={section.certificateTitle}
          />
        </div>
      </div>
      {/* link to certificate */}
      <InteractiveHoverButton className='w-60 text-sm h-13'>
        {' '}
        Download certificate
      </InteractiveHoverButton>
    </div>
  );
};

export default CertificateDetails;
