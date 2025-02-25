'use client';

import Head from 'next/head';
import FlowingMenu from '@/components/reactbits/collections';
import testimage from "../../public/assets/HALSEUS.png";

const ProductsPage = () => {

    const demoItems = [
        { link: '/products/ai-gpt', text: 'Customized ChatGPT', image: "https://images.pexels.com/photos/16245252/pexels-photo-16245252/free-photo-of-a-laptop-computer-with-the-word-chatgpt-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { link: '/products/ai-training', text: 'Train AI model', image: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { link: '/products/ai-local', text: 'Local AI', image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg' },
    ];

    return (
        <>
            <Head>
                <title>AI Products - Explore Our AI Solutions</title>
                <meta name="description" content="Discover our range of AI products including Customized ChatGPT, AI Training, and Local AI solutions. Enhance your business with cutting-edge AI technology." />
                <meta name="keywords" content="AI, ChatGPT, AI Training, Local AI, Local AI safety, AI Solutions" />
                <meta property="og:title" content="AI Products - Explore Our AI Solutions" />
                <meta property="og:description" content="Discover our range of AI products including Customized ChatGPT, AI Training, and Local AI solutions. Enhance your business with cutting-edge AI technology." />
                <meta property="og:image" content="https://images.pexels.com/photos/16245252/pexels-photo-16245252/free-photo-of-a-laptop-computer-with-the-word-chatgpt-on-it.jpeg" />
                <meta property="og:url" content="https://halseus.com/products" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Products - Explore Our AI Solutions" />
                <meta name="twitter:description" content="Discover our range of AI products including Customized ChatGPT, AI Training, and Local AI solutions. Enhance your business with cutting-edge AI technology." />
                <meta name="twitter:image" content="https://images.pexels.com/photos/16245252/pexels-photo-16245252/free-photo-of-a-laptop-computer-with-the-word-chatgpt-on-it.jpeg" />
            </Head>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 mt-10 to-gray-100 py-20">
                <div style={{ height: '600px', position: 'relative' }}>
                    <FlowingMenu items={demoItems} />
                </div>
            </div>
        </>
    );
};

export default ProductsPage;