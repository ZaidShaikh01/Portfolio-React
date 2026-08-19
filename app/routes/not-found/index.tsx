import AnimatedContent from '~/components/ui/AnimatedContent';

const NotFoundPage = () => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row gap-20 justify-center items-center  '>
      <div className='p-3 lg:p-0'>
        <img
          src='/public/images/404.png'
          alt='not-found.png'
          className='object-cover w-full'
        />
      </div>

      <AnimatedContent>
        <code className='p-3 flex flex-col gap-5 lg:hidden'>
          <div className='text-gray-400 text-2xl'>
            
            <span className='mr-2 text-indigo-500'>Throw</span>
            <span className='mr-2 text-indigo-500'>new</span>
            
            <span className=' text-rose-400'>findPage</span>
            <span className='text-rose-50'>(</span>
            <span className='text-teal-400'>'404: PageNotFoundError 😓'</span>
            <span className='text-rose-50'>)</span>
            <span className=' text-rose-50'>;</span>
          </div>
          <div className='text-gray-400 text-2xl'>           
            
            <span className=' text-rose-400'>goBack</span>
            <span className='text-rose-50'>(</span>
            <span className='text-rose-50'>)  || </span>
            
            <span className=' text-rose-400'>goHome</span>
            <span className='text-rose-50'>(</span>
            <span className='text-rose-50'>)</span>
            <span className=' text-rose-50'>;</span>
          </div>
        </code>
        <code className='code hidden'>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>1</span>
            <span className='mr-2 text-indigo-500'>const</span>
            <span className='mr-2 text-rose-50'>page</span>
            <span className='mr-2 text-rose-50'>=</span>
            <span className=' text-rose-400'>findPage</span>
            <span className='text-rose-50'>(</span>
            <span className='text-teal-400'>'you-were-looking-for'</span>
            <span className='text-rose-50'>)</span>
            <span className=' text-rose-50'>;</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>2</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>3</span>
            <span className='mr-2 text-indigo-500'>if</span>
            <span className='mr-2 text-rose-50'>(!page)</span>
            <span className='mr-2 text-rose-50'>&#123;</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-11'>4</span>
            <span className=' text-rose-400'>console.log</span>
            <span className='text-rose-50'>(</span>
            <span className='text-teal-400'>
              "Oops! Looks like you took a wrong turn in the codebase."
            </span>
            <span className='text-rose-50'>)</span>
            <span className=' text-rose-50'>;</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-11'>5</span>
            <span className=' text-rose-400'>console.log</span>
            <span className='text-rose-50'>(</span>
            <span className='text-teal-400'>
              "But hey, since you're here..."
            </span>
            <span className='text-rose-50'>)</span>
            <span className=' text-rose-50'>;</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-11'>6</span>
            <span className=' text-rose-400'>console.log</span>
            <span className='text-rose-50'>(</span>
            <span className='text-teal-400'>
              "🔍 Go back to the homepage and explore more cool stuff!"
            </span>
            <span className='text-rose-50'>)</span>
            <span className=' text-rose-50'>;</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-11'>7</span>
            <span className='mr-2 text-indigo-500'>throw</span>
            <span className='mr-2 text-indigo-500'>new</span>
            <span className=' text-rose-400'>Error</span>
            <span className='text-rose-50'>(</span>
            <span className='text-teal-400'>"404: PageNotFoundError 😢"</span>
            <span className='text-rose-50'>)</span>
            <span className=' text-rose-50'>;</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>8</span>
            <span className='mr-2 text-rose-50'>&#125;</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>9</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>10</span>
            <span className='mr-2 '>/*</span>
            <span className='mr-2 '>Suggestions:</span>
          </div>

          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>11</span>
            <span className='mr-2 '> *</span>
            <span className='mr-2 '>- Check the URL for typos</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>12</span>
            <span className='mr-2 '> *</span>
            <span className='mr-2 '>- Use the sight navigation</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>13</span>
            <span className='mr-2 '> *</span>
            <span className='mr-2 '>- Or hit CMD+Z in real life 😅</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>14</span>
            <span className='mr-2 '> */</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>15</span>
          </div>
          <div className='text-gray-400 text-xl'>
            <span className='mr-5'>16</span>

            <span className=' text-rose-400'>redirect</span>
            <span className='text-rose-50'>(</span>
            <span className='text-teal-400'>'home'</span>
            <span className='text-rose-50'>)</span>
            <span className=' text-rose-50'>;</span>
          </div>
        </code>
      </AnimatedContent>
    </div>
  );
};

export default NotFoundPage;
