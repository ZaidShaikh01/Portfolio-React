const ContactForm = () => {
    return ( <div className='h-full w-full'>
          

          {/* Upper section */}
          <div className='h-11 w-full border-b border-b-stroke'></div>

          {/* Center Section */}
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <form className='w-2/5 flex flex-col gap-3'>
              <div className='w-full flex flex-col gap-2'>
                <label htmlFor='name'>_name:</label>
                <input
                  name='name'
                  type='text'
                  placeholder='Please Enter Your name... '
                  className='w-full p-5 bg-backdrop rounded-xl h-3/5'
                />
              </div>
              <div className='w-full flex flex-col   gap-2'>
                <label htmlFor='email'>_email:</label>
                <input
                  name='email'
                  type='text'
                  placeholder='Please Enter Your email... '
                  className='w-full p-5 bg-backdrop rounded-xl h-3/5'
                />
              </div>
              <div className='w-full flex flex-col   gap-2'>
                <label htmlFor='message'>_message:</label>
                <input
                  name='message'
                  type='text'
                  placeholder='Please Enter Your message... '
                  className='w-full p-5 bg-backdrop rounded-xl h-28'
                />
              </div>

              <button
                type='submit'
                className='w-2/5 p-2 text-sm bg-stroke rounded-xl mt-5 h-15'
              >
                submit-message
              </button>
            </form>
          </div>
        </div> );
}
 
export default ContactForm;