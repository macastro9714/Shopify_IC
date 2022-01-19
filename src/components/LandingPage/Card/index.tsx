import { modifyPostLikes } from '@store/slices/NasaSlice';
import type { Post } from '@types';
import { ModifyPostLike } from '@types';
import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FcDislike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';

import CardModal from './Modal';

interface Props {
    post: Post;
}

const Card: React.FC<Props> = ({ post }) => {
    const [open, setOpen] = useState(false);
    const { id, description, image, likes, title } = post;

    const dispatch = useDispatch();

    const AddOrRemoveLike = (type: ModifyPostLike): void => {
        dispatch(modifyPostLikes({ id, type }));
    };

    return (
        <>
            <CardModal
                open={open}
                setOpen={setOpen}
                description={description}
            />
            <div className="h-full bg-layerTwo hover:bg-gray-800 shadow-xl hover:shadow-none w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
                <div className="relative mt-2 mx-2">
                    <div className="h-56 rounded-2xl overflow-hidden">
                        <img
                            src={
                                image ||
                                'https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400.png'
                            }
                            className="object-cover w-full"
                            style={{ height: '-webkit-fill-available' }}
                            alt={title}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row">
                        <div
                            className="z-20 cursor-pointer bg-contrast h-10 w-10 flex items-center justify-center text-x hover:bg-red-500 text-red-500 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            onClick={(): void =>
                                AddOrRemoveLike(ModifyPostLike.increase)
                            }
                            onKeyDown={(): void => {
                                // No Need
                            }}
                            role="presentation"
                        >
                            <AiFillHeart />
                        </div>
                        <div
                            className="z-20 cursor-pointer bg-contrast h-10 w-10 ml-2 hover:bg-blue-600 flex items-center justify-center font-medium text-blue-600 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out group"
                            onClick={(): void =>
                                AddOrRemoveLike(ModifyPostLike.decrease)
                            }
                            onKeyDown={(): void => {
                                // No Need
                            }}
                            role="presentation"
                        >
                            <FcDislike />
                        </div>
                        <div className="bg-contrast h-10 w-10 ml-2 flex items-center justify-center font-medium text-blue-60 rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out group">
                            <span className="text-gray-800 ml-">{likes}</span>
                        </div>
                    </div>
                </div>
                <div
                    className="cursor-pointer pt-10 pb-6 w-full px-4 transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    onClick={(): void => setOpen(true)}
                    onKeyDown={(): void => {
                        // No Need
                    }}
                    role="presentation"
                >
                    <h1 className="font-medium leading-none text-base tracking-wider text-gray-400 truncate">{`${title}`}</h1>
                </div>
            </div>
        </>
    );
};

export default Card;
