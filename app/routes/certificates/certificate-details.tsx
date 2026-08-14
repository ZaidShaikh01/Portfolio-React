import { InteractiveHoverButton } from "~/components/ui/interactive-hover-button";



const CertificateDetails = () => {
    return ( <div className='flex-9 flex justify-center items-center flex-col gap-8 h-full w-full p-5'>
        <div className='text-3xl text-center'>
          Internship Certificate Endava
        </div>
        <div className='flex  w-full justify-around'>
          <div>
            <span className='text-xl'>From - </span>
            <span className='text-indigo-500 text-xl'>13th jan 2026</span>
          </div>
          <div>
            <span className='text-xl'>To - </span>
            <span className='text-indigo-500 text-xl'>13th jan 2026</span>
          </div>
        </div>

        {/* Details of certificate & Image preview*/}
        <div className='flex justify-center items-center gap-20 w-full px-30 '>
          <div className='detials w-2/4 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            accusantium facilis explicabo est praesentium dolore. Vitae nisi
            necessitatibus quos iure porro animi quo error beatae, accusamus,
            non eligendi enim dolorum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quae perspiciatis animi totam placeat repellendus
            incidunt corrupti quaerat similique adipisci soluta. Aliquid
            exercitationem consequatur temporibus fugiat eveniet assumenda,
            tempora non placeat. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Magni, labore dignissimos? Sed rerum, rem a
            molestiae quam sapiente accusamus laboriosam distinctio officiis
            voluptatem animi nobis, esse placeat ea optio amet.
          </div>
          <div className='image-container w-1/4'>
            <img
              src='/images/DAVA.png'
              className=' w-full object-cover'
              alt='endava-logo'
            />
          </div>
        </div>
        {/* link to certificate */}
        <InteractiveHoverButton className='w-60 text-sm h-13'>
          {' '}
          Download certificate
        </InteractiveHoverButton>
      </div> );
}
 
export default CertificateDetails;