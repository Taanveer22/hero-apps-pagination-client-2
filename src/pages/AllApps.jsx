import { useEffect, useState } from 'react';
import { DiVisualstudio } from 'react-icons/di';
import baseURL from '../api/baseURL';
import AppCard from '../components/AppCard';

const AllApps = () => {
  // pagiantion state
  const [appsData, setAppsData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [countApps, setCountApps] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // sort state
  const [sortField, setSortField] = useState('size');
  const [sortOrder, setSortOrder] = useState('asc');
  // search state
  const [searchText, setSearchText] = useState('');

  const paginationPages = [...Array(totalPages).keys()];
  // console.log(paginationPages);

  useEffect(() => {
    fetch(
      `${baseURL}/apps?limit=${limit}&skip=${currentPage * limit}&sortField=${sortField}&sortOrder=${sortOrder}&searchText=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAppsData(data?.appsData);
        setCountApps(data?.countApps);
        const requiredPages = Math.ceil(data?.countApps / limit);
        setTotalPages(requiredPages);
      });
  }, [limit, currentPage, sortField, sortOrder, searchText]);

  const handleLimitChange = (e) => {
    console.log(e.target.value);
    console.log(typeof e.target.value);
    setLimit(Number(e.target.value));
    // ✅ Reset to first page after limit change
    setCurrentPage(0);
  };

  const handleSortChange = (e) => {
    const sortText = e.target.value;
    console.log(sortText);
    setSortField(sortText.split('-')[0]);
    setSortOrder(sortText.split('-')[1]);
    // ✅ Reset to first page after sort
    setCurrentPage(0);
  };

  const handleSearchTextChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    // ✅ Reset to first page after search
    setCurrentPage(0);
  };

  return (
    <section className="w-11/12 mx-auto">
      <title>All Apps | Hero Apps</title>

      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
          All Apps {countApps}
          <DiVisualstudio size={48} className="text-secondary"></DiVisualstudio>
        </h2>
        <p className="text-center text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search and Count and Sort */}
      <div className="flex flex-col-reverse lg:flex-row gap-5 items-start justify-between lg:items-end mt-10">
        <div>
          <h2 className="text-lg underline font-bold">({appsData.length}) Apps Found</h2>
        </div>

        <form>
          <label className="input max-w-75 w-75 input-secondary">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handleSearchTextChange}
              type="search"
              className="input"
              placeholder="Search Apps"
            />
          </label>
        </form>

        <div>
          <select
            onChange={handleSortChange}
            className="select bg-white"
            defaultValue={'Sort by R / S / D'}
          >
            <option value={'Sort by R / S / D'} disabled={true}>
              Sort by R / S / D
            </option>
            <option value={'rating-desc'}>Ratings : High - Low</option>
            <option value={'rating-asc'}>Ratings : Low - High</option>
            <option value={'size-desc'}>Size : High - Low</option>
            <option value={'size-asc'}>Size : Low - High</option>
            <option value={'downloads-desc'}>Downloads : High - Low</option>
            <option value={'downloads-asc'}>Downloads : Low - High</option>
          </select>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
        {appsData.length === 0 ? (
          <div className="col-span-full text-center py-10 space-y-10">
            <h2 className="text-6xl font-semibold opacity-60">No Apps Found</h2>
            <button className="btn btn-primary">Show All Apps</button>
          </div>
        ) : (
          appsData.map((appItem) => <AppCard key={appItem.id} appItem={appItem}></AppCard>)
        )}
      </div>

      {/* items per page */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <span className="text-primary text-md font-medium">Items per page</span>
        <select onChange={handleLimitChange} value={limit} className="select select-bordered">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      {/* Pagination Buttons */}
      <div className="flex gap-5 flex-wrap justify-center">
        {/* prev btn */}
        {currentPage > 0 && (
          <button onClick={() => setCurrentPage(currentPage - 1)} className="btn btn-soft">
            Prev
          </button>
        )}
        {/* number btn */}
        {paginationPages.map((pageItem) => (
          <button
            onClick={() => setCurrentPage(pageItem)}
            key={pageItem}
            className={`btn  ${pageItem === currentPage ? 'btn-primary' : 'btn-soft'}`}
          >
            {pageItem}
          </button>
        ))}
        {/* next btn */}
        {currentPage < totalPages - 1 && (
          <button onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-soft">
            Next
          </button>
        )}
        {}
      </div>
    </section>
  );
};

export default AllApps;
