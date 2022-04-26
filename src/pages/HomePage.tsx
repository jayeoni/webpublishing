import React from 'react';

export const HomePage = () => {
  return (
    <div className="m-4 space-y-10">
      <div className='space-y-4'>
        <div className="text-3xl font-bold">New</div>
        <img 
          src="https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" 
          alt='' 
          className='w-full h-72 object-cover rounded-2xl'
        />
      </div>

      <div className='space-y-4'>
        <div className="text-2xl font-bold">Category</div>
        <div className='flex space-x-6'>
          <div>
            <img 
              src='https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' 
              alt='Japanese food' 
              className='w-20 h-20 object-cover rounded-full'
            />
            <div className='text-center'>일식</div>
          </div>
          <div>
            <img 
              src='https://images.unsplash.com/photo-1635685296916-95acaf58471f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' 
              alt='Chinese food'
              className='w-20 h-20 object-cover rounded-full' 
            />
            <div className='text-center'>중식</div>
          </div>
          <div>
            <img 
              src='https://images.unsplash.com/photo-1645530654581-dd24d807b2fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a29yZWFuZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' 
              alt='Korean food' 
              className='w-20 h-20 object-cover rounded-full'
            />
            <div className='text-center'>한식</div>
          </div>
          <div>
            <img 
              src='https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' 
              alt='Western food'
              className='w-20 h-20 object-cover rounded-full' 
            />
            <div className='text-center'>양식</div>
          </div>
        </div>
      </div>
      
      <div className='space-y-5'>
        <div className="text-3xl font-bold">List</div>
        
        <div className="space-y-3 p-5 border border-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFjb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" 
            alt=""
            className='w-full h-60 object-cover rounded-xl'
          />
          <div>
            <div className="text-xl font-semibold">Card Title</div>
            <div className="font-light">Sed vel turpis adipiscing~~</div>
          </div>
          <div className="flex justify-end mt-4 space-x-3">
            <div className="bg-gray-800 text-white text-center rounded-lg p-3">
              상세정보
            </div>
            <div className="text-center p-3 text-gray-800 border border-gray-800 rounded-lg">
              주문하기
            </div>
          </div>
        </div>
        
      </div>
      <div className='space-y-5'>
        <div className="text-3xl font-bold">Today's Special</div>
        <div className= "flex space-x-5">
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className = "w-40 h-56 object-cover rounded-xl"
          />
          <div>
            <div className='text-xl font-bold'> 식당 이름 </div>
            <div className='text-lg font-normal'>말이 필요 없는 서울 최고의 식당 중 하나</div> 
            <div className='text-base text-gray-500'>서울시 강남구 청담동</div>
          </div>
        </div>
        <div className='border-t-2 border-gray-100'></div>
        <div className='space-y-5'>
          <img 
            src="https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            className = 'w-full h-60 object-cover rounded-xl'
          />
          <div className = 'space-y-2'>
           <div className='text-xl font-bold'>이화여대 아콘스톨</div> 
           <div> 서울특별시 서대문구 신촌역로 17 1층 110호 (대현동)<br/>02-1234-5678<br/>MON-SUN 12:00 PM - 9:00 PM</div>
          </div>
          <div className="bg-gray-800 text-white text-center rounded-full p-3">네이버 지도로 길찾기</div>
        </div>
      </div>
    </div>
  );
};