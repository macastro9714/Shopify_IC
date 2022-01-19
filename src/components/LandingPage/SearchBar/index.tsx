import { setPostsFromSearchQuery } from '@store/slices/NasaSlice';
import { debounce } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');

    const debounceNasaData = useMemo(
        () =>
            debounce((text: string) => {
                dispatch(setPostsFromSearchQuery(text));
            }, 300),
        [dispatch]
    );

    useEffect(() => {
        if (searchText && searchText !== '') {
            debounceNasaData(searchText);
        }
    }, [searchText, debounceNasaData]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(event.target.value);
    };

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex border-2 border-layerTwo bg-layerOne rounded">
                <input
                    value={searchText}
                    type="text"
                    className="px-4 py-2 w-[45vw] h-14 text-dark text-lg"
                    placeholder="Search..."
                    onChange={(event): void => onChange(event)}
                />
                <button
                    className="px-4 text-white bg-gray-600 border-l"
                    onClick={(): void | null =>
                        debounceNasaData(searchText) || null
                    }
                    type="submit"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
