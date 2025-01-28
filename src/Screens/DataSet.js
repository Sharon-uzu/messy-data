import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Supabase } from '../config/supabase-config'; // Ensure your Supabase config is correctly set up
import { Link } from 'react-router-dom';
import { HiCloudDownload } from 'react-icons/hi';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { RiCloseFill } from 'react-icons/ri';

const DataSet = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let query = Supabase.from('messy-dataset').select('*');

        // If not "All", filter by category
        if (selectedCategory !== 'All') {
          query = query.eq('category', selectedCategory);
        }

        const { data, error } = await query;

        if (error) throw error;
        const imageUrl = Supabase.storage
          .from("dataFiles")
          .getPublicUrl(data.image_path).data.publicUrl;


        setDatasets(data || []);
      } catch (err) {
        console.error('Error fetching datasets:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClick = () => {
    setClick(!click);
  };


  const filterData = () => {
    if (selectedCategory === 'All') {
      return datasets;
    }
    return datasets.filter((data) => data.category === selectedCategory);
  };

  return (
    <div>
      <Header />

      <div className="dataset">
        <div className="bars" onClick={handleClick}>
          {click ? (
            <RiCloseFill id="close" style={{ fontSize: '22px', color: '#fff' }} />
          ) : (
            <HiMiniBars3BottomLeft id="bar" />
          )}
        </div>

        <div className="dataset-l">
          <div className={click ? 'data-l active' : 'data-l'}>
            <div className="dataset-c">
              <h1>Category</h1>
              <div
                onClick={() => handleCategoryClick('All')}
                className={selectedCategory === 'All' ? 'active-category' : ''}
              >
                <h2>All</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Real estate')}
                className={selectedCategory === 'Real estate' ? 'active-category' : ''}
              >
                <h2>Real Estate</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Healthcare')}
                className={selectedCategory === 'Healthcare' ? 'active-category' : ''}
              >
                <h2>Healthcare</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Sport')}
                className={selectedCategory === 'Sport' ? 'active-category' : ''}
              >
                <h2>Sport</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Politics')}
                className={selectedCategory === 'Politics' ? 'active-category' : ''}
              >
                <h2>Politics</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Agriculture')}
                className={selectedCategory === 'Agriculture' ? 'active-category' : ''}
              >
                <h2>Agriculture</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Logistics')}
                className={selectedCategory === 'Logistics' ? 'active-category' : ''}
              >
                <h2>Logistics</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Social Media')}
                className={selectedCategory === 'Social Media' ? 'active-category' : ''}
              >
                <h2>Social Media</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Manufacturing')}
                className={selectedCategory === 'Manufacturing' ? 'active-category' : ''}
              >
                <h2>Manufacturing</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Banking and FinTech')}
                className={selectedCategory === 'Banking and FinTech' ? 'active-category' : ''}
              >
                <h2>Banking and FinTech</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('E-commerce')}
                className={selectedCategory === 'E-commerce' ? 'active-category' : ''}
              >
                <h2>E-commerce</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Education')}
                className={selectedCategory === 'Education' ? 'active-category' : ''}
              >
                <h2>Education</h2>
              </div>
              <div
                onClick={() => handleCategoryClick('Restaurant')}
                className={selectedCategory === 'Restaurant' ? 'active-category' : ''}
              >
                <h2>Restaurant</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="courses-overview data-r">
          {loading ? (
            <div>Loading...</div>
          ) : filterData().length === 0 ? (
            <div>No datasets found in this category.</div>
          ) : (
            filterData().map((dataset, id) => (
              <div className="course" key={id}>
                <img
              src={`${Supabase.storage
                .from("dataFiles")
                .getPublicUrl(dataset.image_path).data.publicUrl}`}
              alt={dataset.title}
            />
                <div className="cont">
                  <div>
                    <p>{dataset.brand}</p>
                    <h3>{dataset.title}</h3>
                    <div className="update">
                      <span>updated {dataset.time}</span>
                      <span>
                        <HiCloudDownload className="d-i" />
                        {dataset.downloads}
                      </span>
                    </div>
                    <Link to={`/courseInfo/${dataset.id}`}>
                      <button>Read more</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DataSet;
