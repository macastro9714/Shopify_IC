import Card from '@components/LandingPage/Card';
import Header from '@components/LandingPage/Header';
import SearchBar from '@components/LandingPage/SearchBar';
import { getPosts } from '@store/slices/NasaSlice';
import React from 'react';
import { useSelector } from 'react-redux';

const LandingPage: React.FC = () => {
    const posts = useSelector(getPosts);

    const renderCards = (): JSX.Element[] =>
        posts.map((post) => (
            <div key={post.id} className="p-10">
                <Card post={post} />
            </div>
        ));

    return (
        <div className="container mx-auto px-4 h-full md:h-screen w-full bg-dark">
            <Header />
            <div className="w-full h-24 py-24">
                <SearchBar />
            </div>
            <div className="flex flex-wrap">{renderCards()}</div>
        </div>
    );
};

export default LandingPage;
