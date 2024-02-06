// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
    return (
        <Layout>
            <div>
                <h1>Welcome to My Next.js App!</h1>
                {/* Content specific to the landing page goes here */}
            </div>
        </Layout>
    );
};

export default HomePage;
