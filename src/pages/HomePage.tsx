import React, { useEffect, useState } from 'react';
import { CategoryButton } from '../components/CategoryButton';
import { MovieCard } from '../components/MovieCard';

const API_KEY = 'd344ffd6ff492bc9cb8daa82e50ce0f2';

export type Category = {
  id: number;
  label: string;
  url: string;
  imageUrl: string;
}

const CATEGORY_LIST = [
  { id: 0, label: '인기있는영화', url: '/popular', imageUrl: 'movie' },
  { id: 1, label: '현재 상영작', url: '/now_playing', imageUrl: 'popcorn' },
  { id: 2, label: '인기 영화', url: '/upcoming', imageUrl: 'night' },
  { id: 3, label: '개봉예정영화', url: '/top_rated', imageUrl: 'theater' }
];

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}


export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const setCategory = (index: number) => {
    setCategoryIndex(index);
  }

  const getData = async (categoryIndex: number) => {
    const url = `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      setMovies(data.results);
    } else {
      throw new Error("데이터를 받아오지 못했습니다.");
    }
    setIsLoading(false);

  }

  useEffect(() => {
    getData(categoryIndex);
  }, [categoryIndex])

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
          {CATEGORY_LIST.map((data => (
            <CategoryButton key={data.id} category={data} onClick={setCategory} />
          )))}
        </div>
      </div>

      {/*
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
  */}

      <div className='space-y-5'>
        <div className="text-3xl font-bold">Today's Special</div>

        {!isLoading && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

        <div className='border-t-2 border-gray-100'></div>
        <div className='space-y-5'>
          <img
            src="https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            className='w-full h-60 object-cover rounded-xl'
          />
          <div className='space-y-2'>
            <div className='text-xl font-bold'>이화여대 아콘스톨</div>
            <div> 서울특별시 서대문구 신촌역로 17 1층 110호 (대현동)<br />02-1234-5678<br />MON-SUN 12:00 PM - 9:00 PM</div>
          </div>
          <div className="bg-gray-800 text-white text-center rounded-full p-3">네이버 지도로 길찾기</div>
        </div>
      </div>
    </div>
  );
};