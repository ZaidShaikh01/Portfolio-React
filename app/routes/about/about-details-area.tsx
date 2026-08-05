import BorderGlow from "~/components/BorderGlow";
import TiltedCard from "~/components/TiltedCard";

const AboutDetailsArea = () => {
    return ( <div className='p-15 h-full w-full flex justify-center  items-start gap-18 '>
        <div className='flex flex-col w-2/5 gap-20 justify-center items-center'>
          <p className='text-xl font-bold text-indigo-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab earum quod at vero, nulla eligendi quos tenetur molestias hic magnam, nobis repellat! Natus fugit optio nobis amet veritatis non?
          </p>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque tempora quod aperiam eos quasi quos reprehenderit! Odit quia voluptatibus impedit fugit molestiae veniam dolore corrupti, eum magnam illum ad vero. Aliquid ab, itaque velit est id aperiam numquam voluptas quod quos magnam in illo beatae vel voluptatum, magni eveniet dolores at repudiandae.
          </p>
          <button className='w-50 p-3 text-white rounded-xl  bg-teal-600'>download-resume</button>
        </div>
        <div className='h-full'>
          <BorderGlow className='h-4/5 rounded-lg overflow-hidden'>
            <TiltedCard
              imageSrc='/images/profile.jpg'
              altText='Berserk'
              captionText='Berserk'
              containerHeight='100%'
              containerWidth='320px'
              imageHeight='100%'
              imageWidth='320px'
              rotateAmplitude={12}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={<p className='tilted-card-demo-text'>Berserk</p>}
            />

            {/* <img
            src='/images/profile.jpg'
            alt='img'
            className='relative h-full rounded-lg object-cover'
          /> */}
          </BorderGlow>
        </div>
      </div> );
}
 
export default AboutDetailsArea;