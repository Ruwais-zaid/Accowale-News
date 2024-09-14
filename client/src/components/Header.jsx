import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    const [active, setActive] = useState(false);
    const [showHeadline, setShowHeadline] = useState(false);
    const [showCountry, setShowCountry] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // State for capturing search input
    const navigate = useNavigate();

    const topHeadlineCategories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

    const countries = [
        { code: "au", name: "Australia" },
        { code: "br", name: "Brazil" },
        { code: "ca", name: "Canada" },
        { code: "cn", name: "China" },
        { code: "eg", name: "Egypt" },
        { code: "fr", name: "France" },
        { code: "de", name: "Germany" },
        { code: "hk", name: "Hong Kong" },
        { code: "in", name: "India" }
    ];

    // Function to handle the search input
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        if (searchQuery.trim() !== "") {
            navigate(`/search/${searchQuery}`); // Navigate to the search results page
        }
    };

    return (
        <div>
            <div className='p-4'>
                <h1 className='text-8xl font-bold text-yellow-300'>
                    Accowale <span className='text-black'>News</span>
                </h1>
            </div>

            <div className='bg-black w-full'>
                <nav className='flex justify-between max-md:flex-col max-md:items-center text-white p-6 ml-10'>
                    <ul className='flex gap-6 text-3xl font-mono p-2 whitespace-nowrap'>
                        <li className='hover:text-black hover:bg-yellow-300 transition-colors duration-300 p-3'>
                            <Link to={"/"} onClick={() => setActive(!active)}>All News</Link>
                        </li>

                        {/* Top Headlines Dropdown */}
                        <div className='relative'>
                            <div
                                className='flex hover:text-black hover:bg-yellow-300 transition-colors duration-300 p-3 cursor-pointer'
                                onClick={() => setShowHeadline(!showHeadline)}
                            >
                                <li>Top-Headlines</li>
                                <IoMdArrowDropdown className='pt-1 w-8 h-8' />
                            </div>
                            {showHeadline && (
                                <ul className='absolute left-0 mt-1 bg-black text-white'>
                                    {topHeadlineCategories.map((category, index) => (
                                        <li key={index} className='text-center p-3 hover:bg-yellow-300 hover:text-black transition-colors duration-300'>
                                            <Link
                                                to={`/top-headlines/${category.toLowerCase()}`}
                                                className="flex gap-3 capitalize"
                                                onClick={() => setActive(!active)}
                                            >
                                                {category}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Country Dropdown */}
                        <div className='relative'>
                            <div
                                className='flex hover:text-black hover:bg-yellow-300 transition-colors duration-300 p-3 cursor-pointer'
                                onClick={() => setShowCountry(!showCountry)}
                            >
                                <li>Country</li>
                                <IoMdArrowDropdown className='pt-1 w-8 h-8' />
                            </div>
                            {showCountry && (
                                <ul className='absolute left-0 mt-1 bg-black min-w-[14rem] text-white'>
                                    {countries.map((country, index) => (
                                        <li key={index} className='text-center p-2 hover:bg-yellow-300 hover:text-black transition-colors duration-300'>
                                            <Link
                                                to={`/country/${country.code}`}
                                                className='flex items-center gap-3'
                                                onClick={() => setActive(!active)}
                                            >
                                                <img
                                                    src={`https://flagcdn.com/32x24/${country.code}.png`}
                                                    alt={`${country.name} flag`}
                                                    className="inline-block"
                                                />
                                                {country.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </ul>

                    {/* Search Bar */}
                    <form className='flex' onSubmit={handleSearch}>
                        <input
                            className='p-3 min-w-[20rem] h-[3.8rem] text-3xl font-mono text-gray-400'
                            type="text"
                            placeholder='Keyword'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} 
                        />
                        <button
                            type="submit"
                            className='bg-yellow-300 w-11 h-[3.8rem] pt-3 pl-2 cursor-pointer'
                        >
                            <IoMdSearch className='text-3xl font-bold text-black' />
                        </button>
                    </form>
                </nav>
            </div>
        </div>
    );
}

export default Header;
